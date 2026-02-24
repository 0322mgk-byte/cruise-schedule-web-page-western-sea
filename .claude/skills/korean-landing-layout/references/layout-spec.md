# 웹페이지 레이아웃 규격 (Layout Spec)

> Next.js + Tailwind CSS 기반 한글 웹페이지 제작용 레이아웃 규격
> 헤더, 히어로, 바디, 푸터 각 섹션의 높이, 여백, 간격 규칙을 정의한다.

---

## 1. 헤더 (Navigation Bar)

상단 고정 네비게이션 바. 좌측 로고, 중앙 네비게이션, 우측 CTA 버튼의 3단 구조.
글래스모피즘 적용. 최상단에서는 투명, 스크롤 시 반투명 배경 + 블러로 전환.

### 1-1. 높이

| 디바이스 | 높이 | Tailwind |
|---------|------|---------|
| 모바일 | 56px | `h-14` |
| 태블릿/데스크톱 | 64px | `md:h-16` |

### 1-2. 레이아웃 (3단 구조)

좌측 로고 — 중앙 네비게이션 — 우측 CTA 버튼.
Flexbox로 3단 배치하고, 네비게이션을 정중앙에 정렬한다.

| 영역 | 정렬 | 비고 |
|------|------|------|
| 좌측 (로고) | `flex-shrink-0` | 로고 이미지 또는 텍스트 |
| 중앙 (네비게이션) | `absolute left-1/2 -translate-x-1/2` | 뷰포트 기준 정중앙 |
| 우측 (CTA 버튼) | `ml-auto flex-shrink-0` | 주요 행동 유도 버튼 |

> **중앙 정렬 방식**: 좌·우 영역의 너비가 다르더라도 네비게이션이 항상 화면 정중앙에 오도록 `absolute` 센터링을 사용한다. Flexbox `justify-between`만으로는 좌우 비대칭 시 중앙이 밀린다.

### 1-3. 글래스모피즘 (Glassmorphism)

스크롤 전후 두 가지 상태를 가진다. JavaScript로 스크롤 위치를 감지하여 클래스를 토글한다.

**기본 상태 (최상단, 스크롤 Y = 0)**

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 배경 | 투명 | `bg-transparent` |
| 블러 | 없음 | — |
| 테두리 | 없음 | — |

**스크롤 상태 (스크롤 Y > 0)**

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 배경 | `rgba(255,255,255,0.8)` | `bg-white/80` |
| 블러 | 12px | `backdrop-blur-md` |
| 하단 테두리 | 1px 반투명 | `border-b border-white/20` |

**공통 속성**

| 속성 | Tailwind |
|------|---------|
| 위치 | `fixed top-0 w-full z-50` |
| 전환 애니메이션 | `transition-all duration-300` |

> **다크 배경 대응**: 히어로가 어두운 배경일 경우, 스크롤 상태 배경을 `bg-gray-900/80`으로 교체한다. 텍스트 색상도 함께 전환.

### 1-4. 네비게이션 링크 (Navigation Links)

중앙 네비게이션 메뉴의 타이포그래피와 간격 규칙.

**폰트**

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 사이즈 | 14px | `text-sm` |
| 굵기 | 500 | `font-medium` |
| 행간 | 1 (단일 행) | `leading-none` |
| 자간 | 0em | `tracking-normal` |

> **14px 선택 이유**: 네비게이션은 짧은 레이블을 빠르게 스캔하는 인터랙션 요소. 본문(16px)보다 한 단계 작되, 가독성을 위해 `font-medium`(500)으로 보정.

**항목 간 간격**

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 항목 간 간격 | 32px | `gap-8` |

> nav 항목은 `flex gap-8`로 배치. 8px 그리드의 4배수(32px)로 충분한 여백 확보.

**호버/활성 상태**

| 상태 | 스타일 | Tailwind |
|------|--------|---------|
| 기본 | 중간 밝기 | `text-gray-600` |
| 호버 | 진한 색 | `hover:text-gray-900` |
| 활성(현재 페이지) | 진한 색 + 굵게 | `text-gray-900 font-semibold` |
| 전환 | 150ms | `transition-colors duration-150` |

### 1-5. CTA 버튼 (Header CTA)

헤더 우측의 주요 행동 유도 버튼. 네비게이션보다 시각적으로 강조.

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 폰트 사이즈 | 14px | `text-sm` |
| 폰트 굵기 | 500 | `font-medium` |
| 높이 | 40px | `h-10` |
| 수평 패딩 | 16px | `px-4` |
| 모서리 | 캡슐형 | `rounded-full` |
| 최소 터치 영역 | 44×44px | 높이 40px + 상하 여백으로 확보 (WCAG 2.5.5) |

> 12장 CTA 버튼 규격의 Default 높이(`h-10`)를 차용. 수평 패딩은 헤더 맥락에 맞춰 `px-4`로 축소하여 네비게이션과 조화를 유지한다.

### 1-6. 모바일 대응

데스크톱에서는 3단 레이아웃. 모바일(`md` 미만)에서는 중앙 네비게이션을 숨기고 햄버거 메뉴로 전환.

| 영역 | 모바일 | 데스크톱 |
|------|--------|---------|
| 로고 | 표시 | 표시 |
| 네비게이션 | `hidden md:flex` | 표시 |
| CTA 버튼 | `hidden md:block` | 표시 |
| 햄버거 아이콘 | `md:hidden` | 숨김 |

### 통합 적용 예시

```html
<header className="fixed top-0 w-full h-14 md:h-16 z-50 transition-all duration-300 bg-transparent data-[scrolled=true]:bg-white/80 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:border-b data-[scrolled=true]:border-white/20">
  <div className="relative h-full max-w-6xl mx-auto px-4 md:px-6 flex items-center">

    {/* 좌측: 로고 */}
    <a href="/" className="flex-shrink-0">
      <img src="/logo.svg" alt="로고" className="h-8" />
    </a>

    {/* 중앙: 네비게이션 (뷰포트 정중앙) */}
    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
      <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150">특징</a>
      <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150">가격</a>
      <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150">FAQ</a>
    </nav>

    {/* 우측: CTA 버튼 */}
    <a href="#contact" className="hidden md:block ml-auto text-sm font-medium h-10 px-4 inline-flex items-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-150">
      상담 신청
    </a>

    {/* 모바일: 햄버거 */}
    <button className="md:hidden ml-auto p-2" aria-label="메뉴 열기">
      <svg className="w-6 h-6" />
    </button>
  </div>
</header>
```

---

## 2. 히어로 (Hero Section)

배경 영상/이미지가 화면 전체를 채우는 풀스크린 히어로. 헤더는 투명 배경으로 히어로 위에 겹쳐진다.

### 높이

풀스크린 (헤더 포함하여 화면 한 장에 맞춤)

| 속성 | Tailwind |
|------|---------|
| 최소 높이 | `min-h-svh` |

### 상하 패딩

| 디바이스 | 패딩 | Tailwind |
|---------|------|---------|
| 모바일 | 48px | `py-12` |
| 태블릿/데스크톱 | 80px | `md:py-20` |

### 헤더와의 관계

헤더는 `fixed` + `bg-transparent`로 히어로 위에 겹침. 별도 높이 계산(calc) 불필요.

```html
<!-- 헤더: 히어로 위에 떠 있음 (글래스모피즘, 상세는 1장 참조) -->
<header className="fixed top-0 w-full h-14 md:h-16 z-50 transition-all duration-300 bg-transparent">

<!-- 히어로: 화면 전체 -->
<section className="min-h-svh flex items-center py-12 md:py-20">
  <video className="absolute inset-0 w-full h-full object-cover" />
```

---

## 3. 바디 (Body Sections)

히어로 아래 일반 콘텐츠 섹션. 섹션 간 경계에서 패딩이 합산되어 자연스러운 간격이 생긴다.

### 상하 패딩

| 디바이스 | 패딩 | Tailwind |
|---------|------|---------|
| 모바일 | 48px | `py-12` |
| 태블릿/데스크톱 | 80px | `md:py-20` |

```html
<section className="py-12 md:py-20">
```

---

## 4. 푸터 (Footer)

페이지 최하단 보조 영역. 바디 섹션보다 패딩을 줄여 보조 영역임을 시각적으로 구분한다. 배경은 `bg-gray-900` 고정으로, 히어로와 호응하며 페이지를 감싸는 북엔드(bookend) 효과를 만든다.

### 상하 패딩

| 디바이스 | 패딩 | Tailwind |
|---------|------|---------|
| 모바일 | 48px | `py-12` |
| 태블릿/데스크톱 | 64px | `md:py-16` |

### 배경색

`bg-gray-900 text-white` 고정.

```html
<footer className="py-12 md:py-16 bg-gray-900 text-white">
```

---

## 5. 타이포그래피 (Typography)

한글 웹페이지 기준. 8px 그리드 정합, Tailwind 기본 스케일 우선 사용.

### 폰트 사이즈

| 역할 | 모바일 | 데스크톱 | Tailwind |
|------|-------|---------|---------|
| 히어로 H1 | 36px | 60px | `text-4xl md:text-6xl` |
| 섹션 제목 H2 | 30px | 48px | `text-3xl md:text-5xl` |
| 히어로 리드 | 24px | 30px | `text-2xl md:text-3xl` |
| 소제목 H3 | 20px | 24px | `text-xl md:text-2xl` |
| 바디 리드 | 20px | 24px | `text-xl md:text-2xl` |
| 본문 (body) | 16px | 18px | `text-base md:text-lg` |
| 캡션/보조 | 14px | 14px | `text-sm` |

### 폰트 굵기

| 역할 | 굵기 | Tailwind |
|------|------|---------|
| 히어로 H1 | 800 | `font-extrabold` |
| 섹션 제목 H2 | 700 | `font-bold` |
| 소제목 H3 | 600 | `font-semibold` |
| 본문 (body) | 400 | `font-normal` |
| 캡션/보조 | 400 | `font-normal` |

### 행간 (Line Height)

한글은 글자 밀도가 높아 라틴보다 넓은 행간이 필요. 본문은 1.7 커스텀.

| 역할 | 행간 | Tailwind |
|------|------|---------|
| 히어로 H1 | 1.25 | `leading-tight` |
| 섹션 제목 H2 | 1.25 | `leading-tight` |
| 소제목 H3 | 1.375 | `leading-snug` |
| 본문 (body) | 1.7 | `leading-[1.7]` |
| 캡션/보조 | 1.625 | `leading-relaxed` |

### 자간 (Letter Spacing)

큰 글씨(H1, H2)만 좁혀서 응축감. 나머지는 기본값.

| 역할 | 자간 | Tailwind |
|------|------|---------|
| 히어로 H1 | -0.025em | `tracking-tight` |
| 섹션 제목 H2 | -0.025em | `tracking-tight` |
| 소제목 H3 | 0em | `tracking-normal` |
| 본문 (body) | 0em | `tracking-normal` |
| 캡션/보조 | 0em | `tracking-normal` |

### 통합 적용 예시

```html
<h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
<h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-normal">
<p className="text-base md:text-lg font-normal leading-[1.7] tracking-normal">
<span className="text-sm font-normal leading-relaxed tracking-normal">
```

---

## 6. 카피 간 Gap

제목↔본문, 본문↔본문, 본문↔CTA 사이 수직 간격. 8px 그리드 기반.

| 관계 | 모바일 | 데스크톱 | Tailwind |
|------|-------|---------|---------|
| 아이브라우 → 제목(H2) | 12px | 16px | `mt-3 md:mt-4` |
| 제목(H2) → 리드 텍스트 | 12px | 16px | `mt-3 md:mt-4` |
| 제목(H2) → 본문 | 16px | 24px | `mt-4 md:mt-6` |
| 리드 텍스트 → 본문/카드 그리드 | 32px | 48px | `mt-8 md:mt-12` |
| **제목(H2) → 콘텐츠 블록 (리드 없을 때)** | **48px** | **48px** | **`mt-12`** |
| 제목(H3) → 본문 | 12px | 16px | `mt-3 md:mt-4` |
| 본문 → 본문 (문단 간격) | 16px | 16px | `mt-4` |
| 본문 → CTA 버튼 | 24px | 32px | `mt-6 md:mt-8` |

```html
<!-- 아이브라우 (선택) -->
<span className="text-sm font-medium tracking-widest uppercase text-gray-500">
  프리미엄 크루즈
</span>

<h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
  섹션 제목
</h2>

<!-- 리드 텍스트 (선택): 바디 리드 사이즈 + font-normal -->
<p className="mt-3 md:mt-4 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
  제목을 부연하는 설명문
</p>

<p className="mt-8 md:mt-12 text-base md:text-lg font-normal leading-[1.7]">
  본문 텍스트
</p>
<p className="mt-4 text-base md:text-lg font-normal leading-[1.7]">
  두 번째 문단
</p>
<a className="mt-6 md:mt-8 inline-block">CTA 버튼</a>
```

---

## 7. 섹션당 타이포 위계 (Section Typography Hierarchy)

하나의 섹션에서 사용하는 폰트 사이즈와 굵기 수를 제한하여 시각적 혼란을 방지한다. 새로운 사이즈를 만들지 않고, 5장에서 정의한 전체 타입 스케일에서 골라 쓴다.

### 규칙

- 하나의 섹션에 **폰트 사이즈 최대 4개** (제목 / 소제목 / 본문 / 캡션)
- 아이브라우는 캡션과 같은 사이즈(14px)를 빌려 쓰므로 사이즈 수에 추가되지 않는다
- 바디 리드(20→24px)는 전용 사이즈이며 섹션 사이즈 카운트에 포함된다. 히어로 리드(24→30px)는 H3와 같은 사이즈를 빌려 쓴다
- 하나의 섹션에 **폰트 굵기 최대 3개** (Bold 계열 / Semibold / Normal)
- 인접한 위계 간 **사이즈 차이 최소 1.5배** 확보 (예: H2 48px vs 본문 18px = 2.7배 ✓)
- 새로운 사이즈를 임의로 만들지 않는다. 반드시 5장의 타입 스케일 내에서 선택

### 전체 타입 스케일 (사이트 공통, 재게시)

| 레벨 | 모바일 → 데스크톱 | 굵기 | Tailwind |
|------|------------------|------|---------|
| H1 (히어로) | 36px → 60px | 800 | `text-4xl md:text-6xl font-extrabold` |
| H2 (섹션 제목) | 30px → 48px | 700 | `text-3xl md:text-5xl font-bold` |
| 히어로 리드 | 24px → 30px | 400 | `text-2xl md:text-3xl font-normal` |
| H3 (소제목/카드 제목) | 20px → 24px | 600 | `text-xl md:text-2xl font-semibold` |
| 바디 리드 | 20px → 24px | 400 | `text-xl md:text-2xl font-normal` |
| 본문 | 16px → 18px | 400 | `text-base md:text-lg font-normal` |
| 캡션/보조 | 14px | 400 | `text-sm font-normal` |

### 적용 예시 (크루즈 랜딩페이지 섹션)

```
"바다 위의 특별한 여름"              → H2 (30→48px, font-bold)
"오션블루 크루즈는 2005년..."        → 본문 (16→18px, font-normal)
 ┌─ 카드 ─────────────────┐
 │ "지중해 크루즈"          │  → H3 (20→24px, font-semibold)
 │ "이탈리아, 그리스..."    │  → 본문 (16→18px, font-normal) ← 섹션 본문과 동일
 │ "7박 8일 · 자세히 보기 →"│  → 캡션 (14px, font-normal)
 └─────────────────────────┘

→ 고유 사이즈 4개: H2, H3, 본문, 캡션 (모두 기존 타입 스케일 내)
→ 고유 굵기 3개: Bold(700), Semibold(600), Normal(400)
```

### 섹션 텍스트 역할 분류

섹션 안의 모든 텍스트는 아래 5가지 역할 중 하나에 해당한다. 각 역할은 기존 타입 스케일에서 사이즈를 빌려 쓰되, **굵기로 역할을 구분**한다.

| 순서 | 역할 | 사이즈 | 굵기 | Tailwind | HTML 태그 |
|------|------|--------|------|---------|-----------|
| ① | 아이브라우 (선택) | 14px | 500 | `text-sm font-medium tracking-widest uppercase` | `<span>` 또는 `<p>` |
| ② | 제목 | H2 (30→48px) | 700 | `text-3xl md:text-5xl font-bold` | `<h2>` |
| ③ | 히어로 리드 (선택) | 24→30px | 400 | `text-2xl md:text-3xl font-normal leading-snug` | `<p>` |
| ③ | 바디 리드 (선택) | 20→24px | 400 | `text-xl md:text-2xl font-normal leading-relaxed` | `<p>` |
| ④ | 본문 | 16→18px | 400 | `text-base md:text-lg font-normal` | `<p>` |
| ⑤ | 소제목 (H3) | 20→24px | 600 | `text-xl md:text-2xl font-semibold` | `<h3>` |

**핵심 구분**: 리드 텍스트는 히어로와 바디에서 **사이즈가 다르다**.
- 히어로 리드: `text-2xl md:text-3xl` (24→30px) → H3급 사이즈, 히어로 H1(60px) 대비 50%
- 바디 리드: `text-xl md:text-2xl` (20→24px) → H2(48px) 대비 50%, 본문과 확실히 구분
- 소제목 H3: `font-semibold` (600) → 아래에 독립적인 콘텐츠 덩어리를 여는 라벨

### 역할별 정의와 판단 기준

**아이브라우 (Eyebrow)**
- 제목 **위**에 오는 짧은 카테고리 라벨 (1~5단어)
- 기능: 섹션 주제를 미리 분류하여 맥락 설정
- 사용 시점: 제목이 감정적/추상적이라서 혼자서는 무슨 주제인지 파악이 어려울 때
- 미사용: 제목이 이미 구체적이면 불필요 (예: "7박 8일 지중해 크루즈 일정")

**리드 텍스트 (Lead Text / Deck)**
- 제목을 부연하는 1~2문장의 설명문
- 기능: 큰 제목(H2)과 본문(16px) 사이의 시각적 사이즈 점프를 완화하는 다리 역할 + 제목의 의미를 구체적으로 풀이
- **히어로 리드 vs 바디 리드**:
  - 히어로 리드: `text-2xl md:text-3xl` (24→30px) — H1(60px)이 크므로 리드도 큰 사이즈 유지
  - 바디 리드: `text-xl md:text-2xl` (20→24px) — H2(48px) 대비 50% 수준으로 확실한 위계 차이
- 사용 조건:
  - ✅ 제목이 크고(H2, 48px급) 바로 아래 본문(16~18px)이 오면 → 사이즈 점프 완화 필요
  - ✅ 제목만으로는 "왜?" 또는 "어떻게?"가 전달되지 않을 때
  - ✅ 제목 아래에 바로 카드/이미지 그리드가 오는 섹션 → 그리드 전에 섹션 설명 필요
  - ❌ 제목이 충분히 설명적이면 불필요
  - ❌ 섹션이 짧고 단순하면 불필요 (CTA, 연락처 등)
  - ❌ 제목 아래 본문 문단이 자연스럽게 이어지면 불필요

**소제목 H3 — 정확한 사용 시점**
- "이 텍스트 아래에 독립적인 콘텐츠 덩어리가 시작되는가?" → **예**일 때만 H3
- 사용하는 곳:
  - 섹션 안에서 하위 영역을 나눌 때 ("노선 안내" / "출발 일정" / "탑승 혜택")
  - 카드 내부의 제목
- 사용하지 않는 곳:
  - 제목을 부연하는 설명문 → 리드 텍스트 (`<p>`, font-normal)
  - 제목 위의 맥락 라벨 → 아이브라우 (`<span>`)

### 리드 텍스트 배치 규칙

**기본값: 제목 아래에 배치한다.**

```
① 아이브라우 (선택)       ← 제목 위, 캡션급 라벨
② 제목 (H2)
③ 리드 텍스트 (선택)      ← 제목 아래, 히어로는 24→30px / 바디는 20→24px
④ 본문 또는 카드 그리드
```

리드 텍스트를 제목 위에 배치하는 것은 사용자가 명시적으로 요청한 경우에만 적용한다.

### 리드 텍스트 포함 Gap

| 관계 | 모바일 | 데스크톱 | Tailwind |
|------|-------|---------|---------|
| 아이브라우 → 제목(H2) | 12px | 16px | `mt-3 md:mt-4` |
| 제목(H2) → 리드 텍스트 | 12px | 16px | `mt-3 md:mt-4` |
| 리드 텍스트 → 본문/카드 그리드 | 32px | 48px | `mt-8 md:mt-12` |
| **제목(H2) → 콘텐츠 블록 (리드 없을 때)** | **48px** | **48px** | **`mt-12`** |

> **리드 텍스트 생략 시**: 리드 텍스트가 제공하던 시각적 완충(사이즈 전환 + 여백)이 사라지므로, H2에서 바로 콘텐츠 블록(카드 그리드, 이미지 갤러리, UI 컴포넌트 등)으로 이어질 때는 간격을 더 크게 잡는다. 리드가 있을 때의 `mt-8 md:mt-12`(32→48px)보다 한 단계 위인 `mt-12`(48px)을 적용한다.

### 적용 예시 (전체 구조)

```html
<!-- 아이브라우 -->
<span className="text-sm font-medium tracking-widest uppercase text-gray-500">
  프리미엄 크루즈
</span>

<!-- 제목 -->
<h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
  인기 크루즈 노선
</h2>

<!-- 리드 텍스트: 바디 리드 사이즈(20→24px) + font-normal → 소제목이 아닌 설명문 -->
<p className="mt-3 md:mt-4 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
  세계에서 가장 아름다운 바다를 항해하는 오션블루의 대표 노선을 소개합니다.
</p>

<!-- 카드 그리드 -->
<div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  ...
</div>
```

### 적용 예시 (리드 텍스트 없이 제목 → 콘텐츠 블록 직행)

```html
<!-- 아이브라우 -->
<span className="text-sm font-medium tracking-widest uppercase text-gray-500">
  ONBOARD FACILITIES
</span>

<!-- 제목 -->
<h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
  숙박 시설 안내
</h2>

<!-- 리드 텍스트 없이 바로 콘텐츠 블록: mt-12 (48px) -->
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  ...
</div>
```

---

## 8. 카드 컴포넌트 타이포 (Card Component Typography)

카드는 독립적인 콘텐츠 단위지만, 새로운 타입 스케일을 만들지 않는다. 전체 타입 스케일에서 H3 이하를 사용하며, 카드 본문은 섹션 본문과 동일한 사이즈를 공유한다.

### 카드 내부 타이포

| 요소 | 타입 스케일 매핑 | Tailwind |
|------|----------------|---------|
| 카드 제목 | H3 | `text-xl md:text-2xl font-semibold leading-snug` |
| 카드 본문 | 본문 (섹션 본문과 동일) | `text-base md:text-lg font-normal leading-[1.7]` |
| 카드 캡션/태그 | 캡션 | `text-sm font-normal leading-relaxed` |
| 카드 링크/CTA | 캡션 + 굵기 강조 | `text-sm font-semibold` |

### 카드 내부 Gap

| 관계 | 간격 | Tailwind |
|------|------|---------|
| 카드 제목 → 카드 본문 | 12px | `mt-3` |
| 카드 본문 → 카드 캡션/링크 | 16px | `mt-4` |

### 카드 내부 패딩

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 내부 패딩 | 24px | `p-6` |

### 적용 예시

```html
<div className="p-6 rounded-xl border border-gray-200">
  <h3 className="text-xl md:text-2xl font-semibold leading-snug">
    지중해 크루즈
  </h3>
  <p className="mt-3 text-base md:text-lg font-normal leading-[1.7]">
    이탈리아, 그리스, 크로아티아의 숨겨진 보석 같은 항구를 따라 지중해의 매력을 만끽하세요.
  </p>
  <span className="mt-4 inline-block text-sm font-normal text-gray-500">
    7박 8일
  </span>
  <a className="mt-4 inline-flex text-sm font-semibold">
    자세히 보기 →
  </a>
</div>
```

---

## 9. 섹션 네이밍 (Section Naming)

Claude Code CLI 바이브 코딩 시 사용자가 "section 3 수정해줘"로 빠르게 참조할 수 있도록, 주석 순번 + 시맨틱 id를 병기한다.

### 규칙

- 모든 `<section>`에 `{/* Section N */}` 주석을 붙인다
- `id`는 역할 기반 시맨틱 이름을 사용한다
- 헤더와 푸터는 순번에서 제외한다 (섹션만 카운트)

### 적용 예시

```html
<header className="fixed top-0 w-full h-14 md:h-16 z-50">

{/* Section 1 */}
<section id="hero" className="min-h-svh bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6">

{/* Section 2 */}
<section id="features" className="py-12 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6">

{/* Section 3 */}
<section id="testimonials" className="py-12 md:py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 md:px-6">

{/* Section 4 */}
<section id="pricing" className="py-12 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6">

{/* Section 5 */}
<section id="cta" className="py-12 md:py-20 bg-gray-100">
  <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">

<footer className="py-12 md:py-16 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
```

## 10. 컨테이너 (Container)

섹션 내부에서 콘텐츠 너비를 제한하고 중앙 정렬하는 래퍼. 모든 바디 섹션에 동일한 컨테이너를 사용하여 좌우 정렬선을 일관되게 유지한다.

### 기본 컨테이너

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 최대 너비 | 1152px (72rem) | `max-w-6xl` |
| 중앙 정렬 | auto | `mx-auto` |
| 좌우 패딩 (모바일) | 16px | `px-4` |
| 좌우 패딩 (데스크톱) | 24px | `md:px-6` |

### 좁은 컨테이너 (텍스트 중심 섹션용)

제목 + 본문만 있는 섹션(소개, CTA 등)에서 줄 길이를 줄여 가독성을 높일 때 사용한다.

| 속성 | 값 | Tailwind |
|------|-----|---------|
| 최대 너비 | 768px (48rem) | `max-w-3xl` |
| 중앙 정렬 | auto | `mx-auto` |
| 좌우 패딩 | 기본 컨테이너와 동일 | `px-4 md:px-6` |

### 적용 패턴

```html
<!-- 기본 컨테이너: 카드 그리드, 기능 소개 등 -->
<section className="py-12 md:py-20">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    ...
  </div>
</section>

<!-- 좁은 컨테이너: 텍스트 중심 섹션, CTA -->
<section className="py-12 md:py-20">
  <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
    ...
  </div>
</section>
```

### 규칙

- 섹션 배경색은 `<section>`에, 콘텐츠 제한은 내부 `<div>`에 적용한다
- 히어로 섹션도 텍스트 콘텐츠는 컨테이너로 감싼다 (배경 영상/이미지는 컨테이너 밖)
- 컨테이너 너비를 임의로 변경하지 않는다. `max-w-6xl` 또는 `max-w-3xl` 둘 중 하나만 사용

---

## 11. 반응형 브레이크포인트 (Responsive Breakpoints)

본 스펙은 **2단계 반응형 전략**을 사용한다. Tailwind 기본 브레이크포인트를 커스텀하지 않는다.

### 브레이크포인트

| 단계 | 범위 | Tailwind 프리픽스 |
|------|------|-----------------|
| 모바일 | 0 ~ 767px | 없음 (기본값) |
| 데스크톱 | 768px ~ | `md:` |

### 원칙

- 모바일 퍼스트: 프리픽스 없는 클래스가 모바일 기본값, `md:`로 데스크톱을 덮어쓴다
- `sm:`, `lg:`, `xl:`, `2xl:` 프리픽스는 원칙적으로 사용하지 않는다
- 21st.dev 등 외부 컴포넌트가 다른 브레이크포인트를 사용하는 경우, 해당 컴포넌트 내부에서만 허용한다

```html
<!-- 올바른 예: 2단계만 사용 -->
<h2 className="text-3xl md:text-5xl font-bold">

<!-- 피해야 할 예: 3단계 이상 -->
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
```

---

## 12. CTA 버튼 규격 (Call-to-Action Buttons)

랜딩페이지 전환의 핵심 요소. 사이즈와 스타일을 통일하여 페이지 전체에서 일관된 행동 유도를 만든다.

### 버튼 사이즈

| 사이즈 | 높이 | 좌우 패딩 | 폰트 | Tailwind |
|-------|------|---------|------|---------|
| Large (히어로, CTA 섹션) | 48~56px | 32px | 16px, semibold | `h-12 md:h-14 px-8 text-base font-semibold` |
| Default (섹션 내부) | 40~48px | 24px | 14~16px, medium | `h-10 md:h-12 px-6 text-sm md:text-base font-medium` |
| Small (카드, 보조) | 36px | 16px | 14px, medium | `h-9 px-4 text-sm font-medium` |

### 버튼 스타일

| 타입 | 용도 | Tailwind |
|------|------|---------|
| Primary (채움) | 주요 행동 유도 (1개/섹션) | `bg-gray-900 text-white rounded-full hover:bg-gray-800` |
| Secondary (테두리) | 보조 행동 | `border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50` |
| Ghost (텍스트) | 링크형 보조 행동 | `text-gray-700 underline-offset-4 hover:underline font-medium` |

### 규칙

- 모바일 터치 타겟 최소 44px 이상 확보 (Large, Default는 이미 충족)
- 하나의 섹션에 Primary 버튼은 **최대 1개**. 나머지는 Secondary 또는 Ghost
- `rounded-full`을 기본으로 사용. 프로젝트 브랜드에 맞게 `rounded-xl`로 변경 가능
- 버튼 텍스트는 행동 동사 중심 (예: "무료 체험 시작하기", "자세히 보기")

### 적용 예시

```html
<!-- 히어로 CTA: Large Primary -->
<a className="inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
  무료 체험 시작하기
</a>

<!-- 히어로 보조 CTA: Large Secondary -->
<a className="inline-flex items-center justify-center h-12 md:h-14 px-8 text-base font-semibold border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
  자세히 알아보기
</a>

<!-- 카드 내부: Small -->
<a className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-gray-700 underline-offset-4 hover:underline">
  자세히 보기 →
</a>
```

---

## 13. 텍스트 색상 가이드라인 (Text Color)

밝은 배경(`bg-white`, `bg-gray-100`) 기준 기본 텍스트 색상. 브랜드 컬러는 프로젝트별로 결정하되, 아래 무채색 톤은 공통으로 사용한다.

### 밝은 배경 (Light)

| 역할 | 색상 | Tailwind |
|------|------|---------|
| 제목 (H1, H2) | 거의 검정 | `text-gray-900` |
| 소제목 (H3) | 거의 검정 | `text-gray-900` |
| 리드 텍스트 | 짙은 회색 | `text-gray-600` |
| 본문 | 짙은 회색 | `text-gray-700` |
| 아이브라우 | 중간 회색 (기본) 또는 브랜드 컬러 | `text-gray-500` (MVP 기본) / `text-blue-600` (브랜드 적용 시) |
| 캡션/보조 | 연한 회색 | `text-gray-500` |

### 어두운 배경 (Dark, 히어로/푸터)

| 역할 | 색상 | Tailwind |
|------|------|---------|
| 제목 | 흰색 | `text-white` |
| 리드 텍스트 | 밝은 회색 | `text-gray-300` |
| 본문 | 밝은 회색 | `text-gray-300` |
| 아이브라우 | 밝은 회색 (기본) 또는 브랜드 컬러 | `text-gray-400` (MVP 기본) / `text-blue-400` (브랜드 적용 시) |
| 캡션/보조 | 중간 회색 | `text-gray-400` |

### 규칙

- 제목과 본문의 명도 차이를 유지한다 (제목은 `900`, 본문은 `700`으로 위계 표현)
- 아이브라우의 브랜드 컬러(`text-blue-600` 등)는 프로젝트별로 1색만 지정한다
- 어두운 배경에서는 `text-white` + `text-gray-300` + `text-gray-400` 3단계로 충분하다
- MVP 단계에서는 `gray` 스케일만 사용. 브랜드 컬러는 아이브라우와 CTA 버튼에만 적용한다

---

## 14. 섹션 배경 패턴 (Section Background)

섹션이 5개 이상 이어질 때, 같은 배경색이 반복되면 섹션 경계가 모호해진다. 무채색 교차 패턴으로 시각적 구분을 만든다.

### 배경색 팔레트

| 타입 | 색상 | Tailwind |
|------|------|---------|
| 기본 (밝음) | 흰색 | `bg-white` |
| 교차 (약간 어두움) | 연한 회색 | `bg-gray-100` |

### 적용 규칙

- 히어로: 배경 영상/이미지 또는 `bg-gray-900` (풀스크린)
- 바디 섹션: `bg-white`와 `bg-gray-100`을 교차 배치
- 푸터: `bg-gray-900` 고정 (히어로와 호응하며 페이지를 감싸는 북엔드 효과)

### 적용 예시

```html
{/* Section 1 - 히어로 */}
<section id="hero" className="min-h-svh bg-gray-900 text-white">

{/* Section 2 - 기능 소개 */}
<section id="features" className="py-12 md:py-20 bg-white">

{/* Section 3 - 상세 설명 */}
<section id="details" className="py-12 md:py-20 bg-gray-100">

{/* Section 4 - 고객 후기 */}
<section id="testimonials" className="py-12 md:py-20 bg-white">

{/* Section 5 - 가격/혜택 */}
<section id="pricing" className="py-12 md:py-20 bg-gray-100">

{/* Section 6 - 최종 CTA */}
<section id="cta" className="py-12 md:py-20 bg-white">

<footer className="py-12 md:py-16 bg-gray-900 text-white">
```

### 규칙

- MVP 단계에서는 `bg-white`와 `bg-gray-100` 두 색상만 사용한다. 브랜드 컬러가 정해지지 않은 상태에서 무채색 교차 패턴으로 섹션을 구분한다
- 나중에 브랜드 컬러가 정해지면 특정 섹션에 브랜드 컬러 배경을 적용할 수 있다
- 교차 순서: 첫 바디 섹션은 `bg-white`로 시작, 이후 `bg-gray-100` → `bg-white` 반복

---

## 15. 텍스트 정렬 (Text Alignment)

섹션 헤딩 블록(아이브라우, 제목, 리드 텍스트)과 카드 내부 텍스트의 정렬 규칙.

### 기본 정렬

| 영역 | 정렬 | Tailwind |
|------|------|---------|
| 히어로 (아이브라우 + H1 + 리드 + CTA) | 중앙 | `text-center` |
| 바디 섹션 헤딩 블록 (아이브라우 + H2 + 리드) | 중앙 | `text-center` |
| 바디 섹션 본문 (제목 아래 문단) | 중앙 | `text-center` |
| 카드 내부 (아이콘 + 제목 + 본문 + 캡션) | 중앙 | `text-center` |
| CTA 섹션 | 중앙 | `text-center` |

### 적용 방법

`text-center`는 컨테이너 `<div>`에 한 번 선언하여 하위 요소에 상속시킨다.

```html
{/* 바디 섹션: 컨테이너에 text-center 선언 */}
<section id="features" className="py-12 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
    <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
      아이브라우
    </span>
    <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
      섹션 제목
    </h2>
    <p className="mt-4 md:mt-6 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
      리드 텍스트
    </p>
    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 카드 (각 카드 내부도 text-center) -->
    </div>
  </div>
</section>

{/* 카드: text-center로 내부 정렬 */}
<div className="p-6 rounded-xl border border-gray-200 text-center">
  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-4">
    <svg className="w-6 h-6 text-gray-600" />
  </div>
  <h3 className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">
    카드 제목
  </h3>
  <p className="mt-3 text-base md:text-lg font-normal leading-[1.7] text-gray-700">
    카드 본문
  </p>
</div>
```

### 규칙

- 히어로, 바디 섹션 헤딩, 카드, CTA 섹션 모두 `text-center`를 기본값으로 적용한다
- 좌측 정렬(`text-left`)은 사용자가 명시적으로 요청한 경우에만 적용한다
- 카드 내부의 아이콘은 `inline-flex items-center justify-center`로 중앙 배치한다
- 좁은 컨테이너(`max-w-3xl`)와 중앙 정렬을 함께 사용하면 본문 줄 길이가 적절하게 유지된다

