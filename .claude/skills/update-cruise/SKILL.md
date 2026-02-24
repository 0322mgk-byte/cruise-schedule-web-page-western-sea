---
name: update-cruise
description: 크루즈 일정표 데이터 업데이트 스킬. 사용자가 새로운 크루즈 일정표(텍스트, 이미지, 또는 복사한 데이터)를 제공하면 기존 UI/레이아웃/컴포넌트 코드는 일절 건드리지 않고 `data/sections/` 내 개별 데이터 파일만 업데이트한다. 새로운 기항지 관광정보, 선박 제원, 시설 안내 등은 서브에이전트를 통해 인터넷에서 자동 조사하여 반영한다. 사용자가 '일정 업데이트', '일정표 변경', '새 크루즈 일정', '스케줄 교체', '일정 수정', '새로운 일정표 데이터', '크루즈 데이터 업데이트' 등을 요청하거나, 크루즈 일정표 텍스트/이미지를 제공하며 업데이트를 요청할 때 반드시 이 스킬을 사용한다. /update-cruise 명령어로도 트리거된다.
---

# 크루즈 일정표 데이터 업데이트 스킬

## 핵심 원칙

이 스킬의 존재 이유는 단 하나: **데이터만 바꿔 끼우기**. UI 컴포넌트는 이미 완성되어 있고, `data/sections/` 내 개별 데이터 파일만 새 일정에 맞게 교체하면 웹페이지가 자동으로 새 일정을 표시한다.

1. **수정 대상은 `data/sections/` 내 개별 파일** — `app/components/` 내 UI 파일은 절대 수정하지 않는다
2. **`data/types.ts`의 타입을 반드시 준수** — 타입 정의는 수정하지 않는다. 새 데이터가 기존 타입에 맞지 않으면 사용자에게 확인한다
3. **기존 형식을 정확히 보존** — 같은 구조, 같은 패턴, 같은 스타일로 데이터를 작성한다

## 파일 구조

데이터는 섹션별로 분리되어 있다. **변경이 필요한 파일만 읽고 수정**하면 된다.

```
data/
├── types.ts                              ← 타입 정의 (수정 금지)
├── cruise-data.ts                        ← barrel file (수정 금지, import/re-export만)
└── sections/
    ├── hero-data.ts                      ← 🔄 교체
    ├── trip-info-data.ts                 ← 🔄 교체
    ├── intro-data.ts                     ← 🔬 선박 변경 시만
    ├── features-data.ts                  ← 🔬 선박 변경 시만
    ├── details-data.ts                   ← 🔬 선박 변경 시만
    ├── schedule-labels-data.ts           ← 🔄 일부 교체 (선박명, dateRange, durationLabel)
    ├── schedule-days-data.ts             ← 🔧 구조 조정 (가장 큰 변경)
    ├── schedule-modals-data.ts           ← 🔧 구조 조정 (모달 교체)
    ├── pricing-data.ts                   ← ❓ 사용자 확인 필요
    ├── product-info-data.ts              ← ❓ 사용자 확인 필요
    ├── trip-summary-data.ts              ← ❓ 사용자 확인 필요
    └── static-data.ts                    ← 🔒 보존 (체크리스트, 헤더, 푸터, 모바일바)
```

## 실행 워크플로우

### Phase 1: 파싱 — 새 일정에서 핵심 정보 추출

사용자가 제공한 일정표(텍스트/이미지)에서 다음 정보를 추출한다:

- **기본 정보**: 출발일, 크루즈사, 선박명, 일수(N박 M일)
- **항공편**: 항공사, 편명, 출발/도착 시간, 경유지 유무, 소요시간
- **기항지 목록**: 전체 루트 (예: 함부르크 → 코펜하겐 → 해상 → ...)
- **일자별 일정**: 각 날짜별 방문지, 주요 활동, 출항/입항 시간

추출 후 사용자에게 파싱 결과를 요약 보여주고 확인받는다. 빠진 정보가 있으면 질문한다.

### Phase 2: 기존 데이터 확인

변경이 필요한 파일만 선택적으로 읽는다:

1. `data/types.ts`를 읽어 타입 구조를 확인한다
2. 변경 대상 파일만 읽는다:
   - 항상 읽는 파일: `hero-data.ts`, `trip-info-data.ts`, `schedule-labels-data.ts`
   - 일정 변경 시: `schedule-days-data.ts`, `schedule-modals-data.ts`
   - 선박 변경 시: `intro-data.ts`, `features-data.ts`, `details-data.ts`
   - 가격 변경 시: `pricing-data.ts`
3. 현재 데이터와 새 일정의 차이점을 파악한다:
   - 선박이 바뀌었는가?
   - 일수가 변경되었는가?
   - 기항지가 완전히 달라졌는가?
   - 경유지가 추가/삭제되었는가?

**중요: `data/cruise-data.ts`(barrel file)과 `static-data.ts`는 읽을 필요 없다.**

### Phase 3: 조사 — 서브에이전트 병렬 활용

새 일정에서 변경된 부분에 대해 서브에이전트(Task tool, subagent_type: "general-purpose")를 **병렬로** 생성하여 조사한다. 한 번에 모든 서브에이전트를 동시 실행해야 효율적이다.

#### 조사가 필요한 경우와 서브에이전트 프롬프트

**기항지 관광정보** (도시가 바뀐 경우에만):
```
[도시명]에 대한 크루즈 기항지 관광정보를 한국어로 조사해줘.

1. 도시 개요 설명 (2-3문장)
2. 주요 관광명소 3-5개 (각각: 한국어 이름, 설명 2-3문장)
3. 기본 정보 테이블:
   - 도시: "[대륙] [나라] [도시명]"
   - 인구: "약 X명"
   - 주요 관광지: "명소1, 명소2, 명소3"
   - 기후: "[여행 월] 평균 X°C (특징)"
4. Google Maps 검색 쿼리 (영문, + 구분)
5. Google Maps Embed URL

각 관광명소에 대해서도 개별적으로:
- 한국어 제목 (형식: "도시의 특징, 명소명")
- 설명 (3-4문장, 한국어, 역사적/문화적 맥락 포함)
- infoTable 데이터 (위치, 입장료, 오픈시간 등)
- Google Maps 검색 쿼리와 Embed URL
```

**선박 제원** (선박이 바뀐 경우에만):
```
[크루즈사] [선박명] 크루즈 선박의 상세 제원을 한국어로 조사해줘.

1. 선박 개요 설명 (3-4문장)
2. 제원 테이블: 톤수, 길이, 승무원수, 높이, 승객정원, 규모(층수), 첫항해일, 객실수
3. 주요 시설 목록 (레스토랑, 바, 카지노, 스파, 수영장, 극장 등)
4. 객실 타입별 정보:
   - 인사이드: 크기(m²), 주요 어메니티
   - 오션뷰: 크기(m²), 주요 어메니티
   - 발코니: 크기(m²), 주요 어메니티
5. YouTube 선박 소개 영상 videoId (있으면)
6. 시설 카테고리별 설명 (엔터테인먼트, 아웃도어&레저, 힐링&웰니스)
```

**기항지 선택관광** (새 일정에 기항지 투어 정보가 있는 경우에만):
```
[크루즈사]에서 운영하는 [기항지명] 기항지 선택 관광(Shore Excursion) 프로그램을 조사해줘.

각 투어별로:
- name: 투어 이름 (한국어)
- tourCode: 투어 코드
- duration: 예상 소요시간
- price: 예상 비용 (성인 기준)
- highlight: 핵심 설명 (2-3문장, 한국어)
- note: 참고사항 (있으면)
```

### Phase 4: 데이터 업데이트

각 섹션 파일을 **개별적으로** 업데이트한다. 아래 규칙을 **반드시** 따른다.

#### 🔄 교체 파일 (새 일정에서 추출하여 교체)

| 파일 | 업데이트 대상 |
|------|-------------|
| `sections/hero-data.ts` | `cruiseLine`, `departureDate`, `duration`, `nights`, `description`, `mobileDescription` |
| `sections/trip-info-data.ts` | `subtitle`, `flights.outbound`, `flights.inbound`, `routeCities`, `reservationStatus`, `reservationCount`, `escortInfo`, `meetingPlace` |
| `sections/schedule-labels-data.ts` | `defaultSeaSublabel` (선박명 반영), `scheduleMeta.dateRange`, `scheduleMeta.durationLabel` |

**tripInfo.flights 경유지 처리**:
- 직항인 경우: `outbound` 배열에 FlightLeg 1개
- 경유가 있는 경우: `outbound` 배열에 FlightLeg 2개 (1구간 + 2구간)
- `inbound`도 동일 규칙 적용

#### 🔧 구조 조정 파일

**`sections/schedule-days-data.ts`** — 일수에 맞게 유동 대응:
- 새 일정이 8박 11일이면 DayScheduleData 11개 생성
- 각 day의 구조는 기존 패턴을 따른다:
  - **1일차 (출국일)**: location-marker → text(출발) → location-marker(도착) → text(입국) → tourist-spot 카드들 → hotel
  - **승선일**: location-marker → text → info-card(승선안내) → text → meal → tourist-spot(선박정보) → meal → hotel
  - **해상일**: location-marker("전일 해상") → text(해상 설명) → cruise-at-sea → meal×3 → hotel
  - **기항지일**: location-marker → meal → text(도착) → tourist-spot(도시정보) → text → shore-excursion(있으면) → meal → departure-notice → hotel
  - **하선일**: location-marker → meal → text(하선) → info-card(하선안내) → text → departure-notice
  - **귀국일**: meal → location-marker → text(도착) → closing-message

**`sections/schedule-modals-data.ts`** — 새 기항지에 맞게 모달 교체:
- 기존 tourist-spot 모달을 제거하고 새 기항지 모달로 교체
- ship-info 모달: 선박이 바뀌면 새 선박 정보로 교체
- cruise-at-sea 모달: 선박명 반영하여 업데이트
- **info 모달 (boarding, disembarkation)**: 절대 수정 금지 — 단, 승선안내 모달의 title에서 선박명만 교체

**shore-excursion 처리**:
- 새 일정에 기항지 선택관광이 없는 경우: 해당 모달과 timeline item을 **주석처리** (완전 삭제 금지)
- 주석 형식: `/* COMMENTED_OUT: shore-excursion for [기항지명] - 현재 일정에 포함되지 않음 */`
- 나중에 다시 추가할 수 있도록 주석으로 보존한다

#### 🔬 조사 후 업데이트 파일 (선박이 바뀐 경우에만)

| 파일 | 업데이트 내용 |
|------|-------------|
| `sections/intro-data.ts` | `title`, `description`은 유지. `facilities` 배열을 새 선박 시설로 교체 |
| `sections/features-data.ts` | `rooms` 배열을 새 선박 객실 타입으로 교체. amenities 포함 |
| `sections/details-data.ts` | `specs` 배열을 새 선박 제원으로 교체. `youtube` 영상도 교체 |

선박이 바뀌지 않았으면 이 파일들은 읽지도 않고 그대로 보존한다.

#### 🔒 보존 파일 (절대 수정 금지)

| 파일 | 이유 |
|------|------|
| `data/cruise-data.ts` | barrel file, import/re-export만 담당 |
| `data/types.ts` | 타입 정의 |
| `sections/static-data.ts` | 체크리스트, 헤더, 푸터, 모바일바 — 일정과 무관 |

**`sections/schedule-modals-data.ts` 내 info 모달** (boarding, disembarkation)도 보존 대상이다. 단 title의 선박명만 교체.

#### ❓ 사용자 확인 필요 파일

| 파일 | 조건 |
|------|------|
| `sections/pricing-data.ts` | 새 일정에 가격 데이터 포함 시 교체. 없으면 AskUserQuestion으로 질문 |
| `sections/trip-summary-data.ts` | 크루즈사가 바뀌면 취소 규정 확인 필요 |
| `sections/product-info-data.ts` | 포함/불포함 사항이 달라질 수 있으므로 확인 필요 |

### Phase 5: 검증

1. TypeScript 타입 체크: `npx tsc --noEmit`
2. 빌드 테스트: `npm run build`
3. 에러 발생 시 즉시 수정
4. 변경 사항 요약을 사용자에게 보고:
   - 변경된 파일 목록
   - 새로 추가된 기항지/모달
   - 주석처리된 항목
   - 이미지 경로 중 실제 파일이 없는 것 (사용자가 별도 준비 필요)

## 이미지 경로 규칙

이미지 파일 자체는 이 스킬에서 생성하지 않는다. 경로 패턴만 지정한다.

- 기존 패턴: `/sectrion6/dayN/[폴더명]/[파일명].webp` (주의: sectrion6는 오타가 아닌 기존 폴더명)
- 새 일정 이미지가 아직 없는 경우: 기존 placeholder 이미지를 임시 사용하고 사용자에게 알린다
- tourist-spot 카드의 images 배열: 최소 3개 경로 지정

## 데이터 작성 스타일 가이드

기존 sections 파일들의 스타일을 정확히 따른다:

- 모든 텍스트는 한국어로 작성
- tourist-spot의 description: "\n"으로 단락 구분
- 모달의 descriptions: 문자열 배열, 각 항목이 한 단락
- infoTable: 빈 값은 빈 문자열 `""`로 남긴다
- departure-notice의 details: 문자열 배열
- 선박명이 들어가는 모든 곳에 새 선박명을 일관되게 반영
- modalId는 영문 소문자, 공백 없이 (예: "hamburg", "copenhagen", "bergen")
- shore-excursion의 modalId: "shoreexcursion_[기항지영문]" 형식
- 각 파일은 `import type { ... } from '../types';`로 시작하고 named export를 사용한다

## day 구조 패턴 레퍼런스

각 일차의 items 배열 구성 패턴을 기존 데이터에서 정확히 따른다. 아래는 대표 패턴이다:

### 출국일 (1일차)
```
location-marker("인천") → text(출발) → location-marker(도착도시) → text(입국)
→ tourist-spot 카드들(도시, 명소1, 명소2, ...) → hotel
```

### 승선일
```
location-marker(출발항) → text(체크인) → info-card(승선안내) → text(안전훈련)
→ meal(중식) → location-marker("해상") → text(출항)
→ tourist-spot(선박정보) → meal(석식) → hotel(선박명)
```

### 전일 해상
```
location-marker("전일 해상") → text(해상 설명) → cruise-at-sea(선내활동)
→ meal(조식) → meal(중식) → meal(석식) → hotel(선박명)
```

### 기항지일 (하선 관광)
```
location-marker(기항지) → meal(조식) → text(도착/하선)
→ tourist-spot(기항지 정보) → text(자유시간) → shore-excursion(선택관광)
→ meal(중식 또는 석식) → departure-notice(출항) → hotel(선박명)
```

### 하선일
```
location-marker(도착항) → meal(조식) → text(하선) → info-card(하선안내)
→ text(공항 이동) → departure-notice(귀국편)
```

### 귀국일
```
meal(조식/기내식) → location-marker("인천") → text(도착) → closing-message
```

## 경유지 항공편 처리

경유가 있는 경우 FlightLeg를 2개로 분리한다 (`sections/trip-info-data.ts`):

```typescript
flights: {
  outbound: [
    {
      airline: "에미레이트 항공",
      flightCode: "EK323",
      departureTime: "23:55",
      departureDate: "07/29 (수)",
      arrivalTime: "04:25",
      arrivalDate: "07/30 (목)",
      duration: "총 9시간 30분 소요",
    },
    {
      airline: "에미레이트 항공",
      flightCode: "EK323",
      departureTime: "08:45",
      departureDate: "07/30 (목)",
      arrivalTime: "13:35",
      arrivalDate: "07/30 (목)",
      duration: "총 6시간 50분 소요",
    },
  ],
  // ...
}
```

TripInfo 컴포넌트는 FlightLeg 배열의 길이에 따라 자동으로 경유지 표시를 처리한다.

## 주의사항

- `data/types.ts`는 절대 수정하지 않는다
- `data/cruise-data.ts` (barrel file)는 절대 수정하지 않는다
- `app/components/` 내 파일은 절대 수정하지 않는다
- `sections/static-data.ts`는 절대 수정하지 않는다
- 변경이 필요 없는 파일은 읽지도 않는다 — 필요한 파일만 읽고 수정한다
- 모든 modalId는 고유해야 한다 — 중복 금지
- tourist-spot timeline item의 modalId와 modals 배열의 id가 반드시 일치해야 한다
- `schedule-days-data.ts`의 shore-excursion item과 `schedule-modals-data.ts`의 shore-excursion modal을 함께 주석처리한다
- 빌드 에러가 나면 반드시 수정 후 다시 검증한다
