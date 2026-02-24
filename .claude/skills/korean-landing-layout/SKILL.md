---
name: korean-landing-layout
description: "한글 랜딩페이지, 웹페이지, 홈페이지의 레이아웃과 타이포그래피 규격. Next.js + Tailwind CSS 기반. 사용자가 '랜딩페이지', '웹페이지', '홈페이지', '원페이지', 'landing page', 'web page', 'homepage' 제작을 요청하거나, 한글 웹사이트의 헤더·히어로·섹션 레이아웃·타이포그래피·카드 컴포넌트·CTA 버튼·색상·배경 패턴 등을 설정할 때 반드시 이 스킬을 사용한다. 바이브 코딩으로 한글 웹페이지를 만들 때, 사용자가 구체적 디자인 규격을 언급하지 않더라도 이 스킬의 규격을 기본값으로 적용한다."
---

# 한글 랜딩페이지 레이아웃 규격

Next.js + Tailwind CSS 기반 한글 웹페이지 제작용 레이아웃·타이포그래피·색상 규격.

> **상세 규격은 `references/layout-spec.md`에 있다.** 이 문서는 핵심 원칙과 빠른 레퍼런스를 제공하고, 구현 시 상세 테이블과 코드 예시는 반드시 references를 참조한다.

## 언제 references/layout-spec.md를 읽어야 하는가

- 새 랜딩페이지/웹페이지를 처음 만들 때 → **전체를 읽는다**
- 특정 섹션(헤더, 히어로 등)만 수정할 때 → **해당 챕터만 읽는다**
- 타이포그래피·색상·CTA 버튼 규격이 필요할 때 → **해당 챕터만 읽는다**

---

## 핵심 원칙

### 1. 4-섹션 구조

모든 페이지는 헤더 → 히어로 → 바디(N개) → 푸터 순서로 구성한다.

- 헤더: 글래스모피즘 고정 네비게이션 (3단: 로고 / 네비 / CTA)
- 히어로: 풀스크린(`min-h-svh`), 헤더는 투명하게 겹침
- 바디: `py-12 md:py-20`, 컨테이너로 콘텐츠 너비 제한
- 푸터: `py-12 md:py-16`, 바디보다 패딩 줄여 보조 영역 구분

### 2. 2단계 반응형

모바일(0~767px, 프리픽스 없음)과 데스크톱(768px~, `md:`)만 사용한다. `sm:`, `lg:`, `xl:`, `2xl:` 프리픽스는 사용하지 않는다. 21st.dev 등 외부 컴포넌트 내부에서만 예외 허용.

### 3. 컨테이너

| 타입 | Tailwind | 용도 |
|------|---------|------|
| 기본 | `max-w-6xl mx-auto px-4 md:px-6` | 카드 그리드, 기능 소개 등 |
| 좁은 | `max-w-3xl mx-auto px-4 md:px-6` | 텍스트 중심, CTA 섹션 |

- 섹션 배경색은 `<section>`에, 콘텐츠 제한은 내부 `<div>`에 적용
- 컨테이너 너비는 `max-w-6xl` 또는 `max-w-3xl` 둘 중 하나만 사용

### 4. 타이포그래피 스케일

| 역할 | Tailwind | 굵기 |
|------|---------|------|
| H1 (히어로) | `text-4xl md:text-6xl` | `font-extrabold` |
| H2 (섹션 제목) | `text-3xl md:text-5xl` | `font-bold` |
| 히어로 리드 | `text-2xl md:text-3xl` | `font-normal` |
| H3 (소제목) | `text-xl md:text-2xl` | `font-semibold` |
| 바디 리드 | `text-xl md:text-2xl` | `font-normal` |
| 본문 | `text-base md:text-lg` | `font-normal` |
| 캡션/보조 | `text-sm` | `font-normal` |

- 한글 본문 행간은 `leading-[1.7]` (커스텀)
- 큰 글씨(H1, H2)만 `tracking-tight`, 나머지는 `tracking-normal`
- 섹션당 폰트 사이즈 최대 4개, 굵기 최대 3개

### 5. 섹션 타이포 위계 (5가지 역할)

섹션 내 모든 텍스트는 아래 5가지 역할 중 하나에 해당한다:

| 순서 | 역할 | 사이즈 | 굵기 | 비고 |
|------|------|--------|------|------|
| ① | 아이브라우 (선택) | 캡션급 14px | `font-medium` | 제목 **위** 카테고리 라벨 |
| ② | 제목 H2 | 30→48px | `font-bold` | 섹션 주제 |
| ③ | 히어로 리드 (선택) | 24→30px | `font-normal` | 히어로 전용, H1 대비 50% |
| ③ | 바디 리드 (선택) | 20→24px | `font-normal` | 바디 섹션, H2 대비 50% |
| ④ | 본문 | 16→18px | `font-normal` | 일반 텍스트 |
| ⑤ | 소제목 H3 | 20→24px | `font-semibold` | 하위 콘텐츠 영역 라벨 |

**핵심 구분**: 리드 텍스트는 히어로와 바디에서 **사이즈가 다르다**.
- 히어로 리드: `text-2xl md:text-3xl` (24→30px) — H1(60px) 대비 50%
- 바디 리드: `text-xl md:text-2xl` (20→24px) — H2(48px) 대비 50%

**리드 텍스트 배치 규칙**: 기본값은 제목 아래. 상단 배치는 사용자 명시 요청 시에만.
### 6. 카피 간 Gap (8px 그리드)

| 관계 | Tailwind |
|------|---------|
| 아이브라우 → H2 | `mt-3 md:mt-4` |
| H2 → 리드 텍스트 | `mt-3 md:mt-4` |
| H2 → 본문 | `mt-4 md:mt-6` |
| 리드 텍스트 → 본문/카드 | `mt-8 md:mt-12` |
| **H2 → 콘텐츠 블록 (리드 없을 때)** | **`mt-12`** |
| H3 → 본문 | `mt-3 md:mt-4` |
| 본문 → 본문 | `mt-4` |
| 본문 → CTA 버튼 | `mt-6 md:mt-8` |

### 7. CTA 버튼

| 사이즈 | Tailwind | 용도 |
|-------|---------|------|
| Large | `h-12 md:h-14 px-8 text-base font-semibold` | 히어로, CTA 섹션 |
| Default | `h-10 md:h-12 px-6 text-sm md:text-base font-medium` | 섹션 내부 |
| Small | `h-9 px-4 text-sm font-medium` | 카드, 보조 |
| 헤더 | `h-10 px-4 text-sm font-medium` | 헤더 CTA (Default 높이 차용) |

| 스타일 | Tailwind |
|--------|---------|
| Primary | `bg-gray-900 text-white rounded-full hover:bg-gray-800` |
| Secondary | `border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50` |
| Ghost | `text-gray-700 underline-offset-4 hover:underline font-medium` |

- 모든 CTA 버튼은 `rounded-full` (캡슐형) 기본
- 섹션당 Primary 버튼 최대 1개
- 모바일 터치 타겟 최소 44px

### 8. 텍스트 색상

**밝은 배경 (`bg-white`, `bg-gray-100`)**

| 역할 | Tailwind |
|------|---------|
| 제목 (H1, H2, H3) | `text-gray-900` |
| 리드 텍스트 | `text-gray-600` |
| 본문 | `text-gray-700` |
| 아이브라우 | `text-gray-500` (MVP) |
| 캡션/보조 | `text-gray-500` |

**어두운 배경 (`bg-gray-900`)**

| 역할 | Tailwind |
|------|---------|
| 제목 | `text-white` |
| 리드 텍스트/본문 | `text-gray-300` |
| 아이브라우/캡션 | `text-gray-400` |

- MVP는 `gray` 스케일만 사용
- 브랜드 컬러는 아이브라우 + CTA 버튼에만 적용 (프로젝트별 1색)

### 9. 섹션 배경 패턴

| 타입 | Tailwind | 사용처 |
|------|---------|--------|
| 기본 | `bg-white` | 바디 섹션 시작점 |
| 교차 | `bg-gray-100` | 바디 섹션 번갈아 |

- `bg-white` ↔ `bg-gray-100` 교차 배치 (첫 바디는 `bg-white`로 시작)
- `bg-gray-100` 이상 사용 금지
- 히어로: 배경 영상/이미지 또는 `bg-gray-900`
- 푸터: `bg-gray-900` 고정 (히어로와 호응하며 페이지를 감싸는 북엔드 효과)

### 10. 섹션 네이밍

- 모든 `<section>`에 `{/* Section N */}` 주석 + 시맨틱 `id` 병기
- 헤더/푸터는 순번에서 제외

### 11. 텍스트 정렬

모든 텍스트는 기본적으로 **중앙 정렬**한다.

| 영역 | 정렬 |
|------|------|
| 히어로 (아이브라우 + H1 + 리드 + CTA) | `text-center` |
| 바디 섹션 헤딩 블록 (아이브라우 + H2 + 리드) | `text-center` |
| 카드 내부 (아이콘 + 제목 + 본문 + 캡션) | `text-center` |
| CTA 섹션 | `text-center` |

- `text-center`는 컨테이너 `<div>`에 한 번 선언하여 하위 요소에 상속
- 좌측 정렬(`text-left`)은 사용자 명시 요청 시에만 적용
- 카드 내부 아이콘은 `inline-flex items-center justify-center`로 중앙 배치

---

## 빠른 섹션 템플릿

```html
{/* Section 1 - 히어로 */}
<section id="hero" className="min-h-svh bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
    <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
      아이브라우
    </span>
    <h1 className="mt-3 md:mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
      히어로 제목
    </h1>
    <p className="mt-3 md:mt-4 text-2xl md:text-3xl font-normal leading-snug text-gray-300">
      리드 텍스트
    </p>
    <a className="mt-6 md:mt-8 inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
      CTA 버튼
    </a>
  </div>
</section>

{/* Section 2 - 기능 소개 */}
<section id="features" className="py-12 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
      아이브라우
    </span>
    <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
      섹션 제목
    </h2>
    <p className="mt-3 md:mt-4 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
      리드 텍스트
    </p>
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 카드 그리드 -->
    </div>
  </div>
</section>

{/* Section 3 - 상세 (교차 배경) */}
<section id="details" className="py-12 md:py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
    ...
  </div>
</section>

{/* Section - 리드 텍스트 없이 제목 → 콘텐츠 블록 직행 */}
<section id="rooms" className="py-12 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
      ONBOARD FACILITIES
    </span>
    <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
      숙박 시설 안내
    </h2>
    <!-- 리드 없을 때 콘텐츠 블록: mt-12 (48px) -->
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 카드 그리드 -->
    </div>
  </div>
</section>

{/* Section N - 최종 CTA */}
<section id="cta" className="py-12 md:py-20 bg-gray-100">
  <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
    <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
      행동 유도 제목
    </h2>
    <p className="mt-3 md:mt-4 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
      리드 텍스트
    </p>
    <a className="mt-6 md:mt-8 inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
      CTA 버튼
    </a>
  </div>
</section>
```

---

## 카드 컴포넌트

```html
<div className="p-6 rounded-xl border border-gray-200 text-center">
  <h3 className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">
    카드 제목
  </h3>
  <p className="mt-3 text-base md:text-lg font-normal leading-[1.7] text-gray-700">
    카드 본문
  </p>
  <span className="mt-4 inline-block text-sm font-normal text-gray-500">
    캡션
  </span>
</div>
```

카드 내부 Gap: 제목→본문 `mt-3`, 본문→캡션/링크 `mt-4`, 내부 패딩 `p-6`

---

## 헤더 구조

```html
<header className="fixed top-0 w-full h-14 md:h-16 z-50 transition-all duration-300
  bg-transparent
  data-[scrolled=true]:bg-white/80
  data-[scrolled=true]:backdrop-blur-md
  data-[scrolled=true]:border-b
  data-[scrolled=true]:border-white/20">
  <div className="relative h-full max-w-6xl mx-auto px-4 md:px-6 flex items-center">
    <!-- 좌측: 로고 -->
    <a href="/" className="flex-shrink-0">
      <img src="/logo.svg" alt="로고" className="h-8" />
    </a>
    <!-- 중앙: 네비게이션 (absolute 센터링) -->
    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
      <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150">특징</a>
    </nav>
    <!-- 우측: CTA -->
    <a href="#contact" className="hidden md:block ml-auto text-sm font-medium h-10 px-4 inline-flex items-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-150">
      상담 신청
    </a>
    <!-- 모바일: 햄버거 -->
    <button className="md:hidden ml-auto p-2" aria-label="메뉴 열기">
      <svg className="w-6 h-6" />
    </button>
  </div>
</header>
```

- 글래스모피즘: 스크롤 전 투명, 스크롤 시 `bg-white/80 backdrop-blur-md`
- 중앙 네비게이션은 `absolute left-1/2 -translate-x-1/2`로 뷰포트 정중앙
- 다크 히어로 배경일 때 스크롤 상태는 `bg-gray-900/80`으로 교체

---

## 체크리스트

새 페이지를 만들 때 아래를 확인한다:

- [ ] 모든 섹션에 컨테이너(`max-w-6xl` 또는 `max-w-3xl`) 적용했는가
- [ ] 배경색 교차 패턴 적용했는가 (`bg-white` ↔ `bg-gray-100`)
- [ ] 반응형이 `md:` 프리픽스만 사용하는가
- [ ] 타이포그래피가 5장 스케일 내에서만 사용하는가
- [ ] 섹션당 Primary CTA 버튼이 1개 이하인가
- [ ] 모든 CTA 버튼이 `rounded-full`인가
- [ ] 섹션 네이밍(`{/* Section N */}` + 시맨틱 `id`) 적용했는가
- [ ] 카피 간 Gap이 8px 그리드 기반인가
- [ ] MVP 색상이 `gray` 스케일만 사용하는가
