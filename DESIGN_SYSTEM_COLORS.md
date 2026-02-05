# comma - 디자인 시스템: 컬러

**프로젝트**: comma (웹소설 AI 시각화 플랫폼)
**문서 버전**: v1.0
**최종 수정일**: 2026-02-04
**기반**: Figma 프레임 분석 (seBGQExO5HPFzeIEOBBT9w)

---

## 📋 목차

1. [컬러 시스템 개요](#컬러-시스템-개요)
2. [Primitive Colors (원시 색상)](#primitive-colors-원시-색상)
3. [Semantic Colors (의미론적 색상)](#semantic-colors-의미론적-색상)
4. [Component Colors (컴포넌트 색상)](#component-colors-컴포넌트-색상)
5. [Usage Guidelines](#usage-guidelines)
6. [디자인 토큰 JSON](#디자인-토큰-json)

---

## 컬러 시스템 개요

### 디자인 원칙
- **가독성 우선**: 웹소설 읽기 환경에 최적화된 색상 대비
- **최소주의**: 불필요한 색상 사용 지양, 텍스트 중심
- **계층 구조**: 명확한 시각적 계층을 위한 중성 색상 팔레트

### 컬러 네이밍 컨벤션
```
color.{semantic-category}.{variant}.{state}

예시:
- color.text.primary
- color.background.surface
- color.border.default
```

---

## Primitive Colors (원시 색상)

### Neutral (중성 색상)

기본적인 회색조 팔레트로, 대부분의 UI 요소에 사용됩니다.

```css
/* Neutral Scale */
--color-neutral-0:     #FFFFFF;  /* Pure White */
--color-neutral-50:    #FEFEFE;  /* Off White */
--color-neutral-100:   #F5F5F5;  /* Light Gray */
--color-neutral-200:   #EBEBEB;  /* Very Light Gray */
--color-neutral-300:   #D3D3D3;  /* Light Gray Border */
--color-neutral-400:   #BEBEBE;  /* Medium Light Gray */
--color-neutral-500:   #939393;  /* Medium Gray */
--color-neutral-600:   #646464;  /* Dark Gray */
--color-neutral-700:   #515151;  /* Very Dark Gray */
--color-neutral-800:   #484848;  /* Almost Black */
--color-neutral-900:   #333333;  /* Near Black */
--color-neutral-950:   #1D1D1D;  /* Primary Black */
```

### Accent (강조 색상)

텍스트 선택 및 하이라이트에 사용되는 색상입니다.

```css
/* Accent Colors */
--color-accent-highlight: #FFF6E6;  /* Text Selection Highlight */
```

### Alpha (투명도)

오버레이 및 그림자에 사용되는 투명 색상입니다.

```css
/* Alpha Colors */
--color-alpha-overlay:     rgba(0, 0, 0, 0.4);   /* Dimmed Background */
--color-alpha-shadow-sm:   rgba(0, 0, 0, 0.05);  /* Light Shadow */
--color-alpha-shadow-md:   rgba(0, 0, 0, 0.15);  /* Medium Shadow */
```

---

## Semantic Colors (의미론적 색상)

### Text (텍스트)

```css
/* Text Colors */
--color-text-primary:      #1D1D1D;  /* 주요 텍스트 (네비게이션, 제목) */
--color-text-secondary:    #484848;  /* 본문 텍스트 (소설 내용) */
--color-text-tertiary:     #646464;  /* 보조 텍스트 (설명, 캡션) */
--color-text-disabled:     #939393;  /* 비활성 텍스트 */
--color-text-placeholder:  #BEBEBE;  /* 플레이스홀더, 페이지 번호 */
--color-text-inverse:      #FFFFFF;  /* 반전 텍스트 (다크 배경 위) */
```

**사용 예시**:
- **Primary**: 네비게이션 제목, 버튼 레이블, 모달 제목
- **Secondary**: 소설 본문, 긴 텍스트 콘텐츠
- **Tertiary**: 카운터, 작은 라벨, 메타 정보
- **Disabled**: 비활성 상태의 레이블
- **Placeholder**: 입력 필드 힌트, 페이지 번호

### Background (배경)

```css
/* Background Colors */
--color-bg-primary:        #FFFFFF;  /* 주요 배경 (카드, 모달) */
--color-bg-secondary:      #FEFEFE;  /* 페이지 배경 */
--color-bg-tertiary:       #F5F5F5;  /* 비활성 요소, 체크박스 배경 */
--color-bg-overlay:        rgba(0, 0, 0, 0.4);  /* 딤드 오버레이 */
--color-bg-highlight:      #FFF6E6;  /* 텍스트 선택 하이라이트 */
```

**사용 예시**:
- **Primary**: 모달, 바텀시트, 카드 배경
- **Secondary**: 전체 페이지 배경
- **Tertiary**: 비활성 버튼, 체크박스 배경, 입력 필드
- **Overlay**: 모달 뒤 딤드 레이어
- **Highlight**: 선택된 텍스트 영역

### Border (테두리)

```css
/* Border Colors */
--color-border-default:    #D3D3D3;  /* 기본 테두리 */
--color-border-light:      #EEEEEE;  /* 연한 테두리 (구분선) */
--color-border-medium:     #A3A3A3;  /* 중간 테두리 (강조) */
--color-border-subtle:     #EBEBEB;  /* 미세한 구분선 */
```

**사용 예시**:
- **Default**: 버튼, 카드, 입력 필드 테두리
- **Light**: 섹션 구분선, AppBar 하단 보더
- **Medium**: 프레임 외곽선, 강조 필요한 영역
- **Subtle**: 내부 구분선, 섹션 경계

### Surface (표면)

컴포넌트 및 카드의 배경색입니다.

```css
/* Surface Colors */
--color-surface-default:   #FFFFFF;  /* 기본 표면 */
--color-surface-elevated:  #FFFFFF;  /* 올라간 표면 (모달, 바텀시트) */
--color-surface-sunken:    #F5F5F5;  /* 들어간 표면 (입력 필드) */
```

### Interactive (인터랙션)

```css
/* Interactive Colors */
--color-interactive-default:   #1D1D1D;  /* 기본 상태 */
--color-interactive-hover:     #333333;  /* 호버 상태 */
--color-interactive-pressed:   #484848;  /* 눌림 상태 */
--color-interactive-disabled:  #939393;  /* 비활성 상태 */
```

---

## Component Colors (컴포넌트 색상)

### Navigation.AppBar

```css
/* AppBar */
--color-appbar-bg:             #FFFFFF;
--color-appbar-border:         #EEEEEE;
--color-appbar-title:          #1D1D1D;
--color-appbar-icon:           #1D1D1D;
```

### Navigation.BottomTab

```css
/* BottomTab */
--color-tab-bg:                #FFFFFF;
--color-tab-border:            #EEEEEE;
--color-tab-label-active:      #1D1D1D;
--color-tab-label-inactive:    #1D1D1D;
--color-tab-icon-active:       #1D1D1D;
--color-tab-icon-inactive:     #1D1D1D;
```

### Button

```css
/* Button Primary */
--color-button-primary-bg:     #FFFFFF;
--color-button-primary-border: #EEEEEE;
--color-button-primary-text:   #1D1D1D;

/* Button Secondary */
--color-button-secondary-bg:     #F5F5F5;
--color-button-secondary-border: #D3D3D3;
--color-button-secondary-text:   #646464;

/* Button Disabled */
--color-button-disabled-bg:      #F5F5F5;
--color-button-disabled-border:  #D3D3D3;
--color-button-disabled-text:    #939393;
```

### Modal

```css
/* Modal */
--color-modal-bg:              #FFFFFF;
--color-modal-overlay:         rgba(0, 0, 0, 0.4);
--color-modal-border:          #EEEEEE;
--color-modal-title:           #1D1D1D;
--color-modal-close:           rgba(29, 29, 29, 0.5);  /* 50% opacity */
--color-modal-grabber:         #515151;
```

### Indicator

```css
/* Progress Bar */
--color-progress-track:        #EBEBEB;  /* 진행바 배경 */
--color-progress-fill:         #1D1D1D;  /* 진행바 채움 */
--color-progress-indicator:    #1D1D1D;  /* 현재 위치 인디케이터 */
--color-progress-text:         #BEBEBE;  /* 페이지 번호 */
--color-progress-percentage:   #1D1D1D;  /* 퍼센트 */

/* Marker (로그 마커) */
--color-marker-bg:             #FFFFFF;
--color-marker-border:         #D3D3D3;
--color-marker-shadow:         rgba(0, 0, 0, 0.15);
```

### Card

```css
/* Card */
--color-card-bg:               #F5F5F5;
--color-card-border:           #D3D3D3;
--color-card-text:             #1D1D1D;
```

### Input

```css
/* Text Input / TextPreview */
--color-input-bg:              #FFFFFF;
--color-input-border:          #D3D3D3;
--color-input-text:            #484848;
--color-input-placeholder:     #BEBEBE;
```

### Checkbox

```css
/* Checkbox */
--color-checkbox-bg-unchecked: #F5F5F5;
--color-checkbox-bg-checked:   #F5F5F5;
--color-checkbox-border:       transparent;
--color-checkbox-check:        #1D1D1D;
--color-checkbox-label:        #939393;  /* unchecked */
--color-checkbox-label-active: #1D1D1D;  /* checked */
```

---

## Usage Guidelines

### 텍스트 가독성

#### 최소 대비율
- **일반 텍스트**: 4.5:1 (WCAG AA 기준)
- **큰 텍스트 (18px+)**: 3:1 (WCAG AA 기준)

#### 권장 조합
```css
/* 높은 대비 (본문 텍스트) */
color: var(--color-text-secondary);      /* #484848 */
background: var(--color-bg-primary);     /* #FFFFFF */
/* 대비율: 9.52:1 ✅ */

/* 중간 대비 (보조 텍스트) */
color: var(--color-text-tertiary);       /* #646464 */
background: var(--color-bg-primary);     /* #FFFFFF */
/* 대비율: 5.74:1 ✅ */

/* 낮은 대비 (비활성 텍스트) */
color: var(--color-text-disabled);       /* #939393 */
background: var(--color-bg-primary);     /* #FFFFFF */
/* 대비율: 2.84:1 ⚠️ 큰 텍스트만 사용 */
```

### 다크모드 고려사항

현재 디자인은 **라이트 모드**를 기준으로 하고 있습니다.

향후 다크모드 지원 시 고려사항:
- Neutral Scale 반전 필요
- Alpha 값은 동일하게 유지
- 텍스트 대비율 재검증 필요

---

## 디자인 토큰 JSON

### Figma Variables 포맷

```json
{
  "color": {
    "neutral": {
      "0": { "value": "#FFFFFF", "type": "color" },
      "50": { "value": "#FEFEFE", "type": "color" },
      "100": { "value": "#F5F5F5", "type": "color" },
      "200": { "value": "#EBEBEB", "type": "color" },
      "300": { "value": "#D3D3D3", "type": "color" },
      "400": { "value": "#BEBEBE", "type": "color" },
      "500": { "value": "#939393", "type": "color" },
      "600": { "value": "#646464", "type": "color" },
      "700": { "value": "#515151", "type": "color" },
      "800": { "value": "#484848", "type": "color" },
      "900": { "value": "#333333", "type": "color" },
      "950": { "value": "#1D1D1D", "type": "color" }
    },
    "accent": {
      "highlight": { "value": "#FFF6E6", "type": "color" }
    },
    "alpha": {
      "overlay": { "value": "rgba(0, 0, 0, 0.4)", "type": "color" },
      "shadow-sm": { "value": "rgba(0, 0, 0, 0.05)", "type": "color" },
      "shadow-md": { "value": "rgba(0, 0, 0, 0.15)", "type": "color" }
    },
    "text": {
      "primary": { "value": "{color.neutral.950}", "type": "color" },
      "secondary": { "value": "{color.neutral.800}", "type": "color" },
      "tertiary": { "value": "{color.neutral.600}", "type": "color" },
      "disabled": { "value": "{color.neutral.500}", "type": "color" },
      "placeholder": { "value": "{color.neutral.400}", "type": "color" },
      "inverse": { "value": "{color.neutral.0}", "type": "color" }
    },
    "background": {
      "primary": { "value": "{color.neutral.0}", "type": "color" },
      "secondary": { "value": "{color.neutral.50}", "type": "color" },
      "tertiary": { "value": "{color.neutral.100}", "type": "color" },
      "overlay": { "value": "{color.alpha.overlay}", "type": "color" },
      "highlight": { "value": "{color.accent.highlight}", "type": "color" }
    },
    "border": {
      "default": { "value": "{color.neutral.300}", "type": "color" },
      "light": { "value": "#EEEEEE", "type": "color" },
      "medium": { "value": "#A3A3A3", "type": "color" },
      "subtle": { "value": "{color.neutral.200}", "type": "color" }
    },
    "surface": {
      "default": { "value": "{color.neutral.0}", "type": "color" },
      "elevated": { "value": "{color.neutral.0}", "type": "color" },
      "sunken": { "value": "{color.neutral.100}", "type": "color" }
    }
  }
}
```

### CSS Custom Properties

```css
:root {
  /* Primitive Colors */
  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #FEFEFE;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #EBEBEB;
  --color-neutral-300: #D3D3D3;
  --color-neutral-400: #BEBEBE;
  --color-neutral-500: #939393;
  --color-neutral-600: #646464;
  --color-neutral-700: #515151;
  --color-neutral-800: #484848;
  --color-neutral-900: #333333;
  --color-neutral-950: #1D1D1D;

  --color-accent-highlight: #FFF6E6;

  --color-alpha-overlay: rgba(0, 0, 0, 0.4);
  --color-alpha-shadow-sm: rgba(0, 0, 0, 0.05);
  --color-alpha-shadow-md: rgba(0, 0, 0, 0.15);

  /* Semantic Colors */
  --color-text-primary: var(--color-neutral-950);
  --color-text-secondary: var(--color-neutral-800);
  --color-text-tertiary: var(--color-neutral-600);
  --color-text-disabled: var(--color-neutral-500);
  --color-text-placeholder: var(--color-neutral-400);
  --color-text-inverse: var(--color-neutral-0);

  --color-bg-primary: var(--color-neutral-0);
  --color-bg-secondary: var(--color-neutral-50);
  --color-bg-tertiary: var(--color-neutral-100);
  --color-bg-overlay: var(--color-alpha-overlay);
  --color-bg-highlight: var(--color-accent-highlight);

  --color-border-default: var(--color-neutral-300);
  --color-border-light: #EEEEEE;
  --color-border-medium: #A3A3A3;
  --color-border-subtle: var(--color-neutral-200);

  --color-surface-default: var(--color-neutral-0);
  --color-surface-elevated: var(--color-neutral-0);
  --color-surface-sunken: var(--color-neutral-100);

  /* Component Colors */
  --color-appbar-bg: var(--color-bg-primary);
  --color-appbar-border: var(--color-border-light);
  --color-appbar-title: var(--color-text-primary);

  --color-tab-bg: var(--color-bg-primary);
  --color-tab-border: var(--color-border-light);
  --color-tab-label: var(--color-text-primary);

  --color-button-primary-bg: var(--color-bg-primary);
  --color-button-primary-border: var(--color-border-light);
  --color-button-primary-text: var(--color-text-primary);

  --color-modal-bg: var(--color-bg-primary);
  --color-modal-overlay: var(--color-bg-overlay);
  --color-modal-border: var(--color-border-light);
  --color-modal-grabber: var(--color-neutral-700);

  --color-progress-track: var(--color-neutral-200);
  --color-progress-fill: var(--color-neutral-950);
  --color-progress-text: var(--color-text-placeholder);

  --color-marker-shadow: var(--color-alpha-shadow-md);

  --color-card-bg: var(--color-neutral-100);
  --color-card-border: var(--color-neutral-300);

  --color-input-bg: var(--color-bg-primary);
  --color-input-border: var(--color-border-default);
  --color-input-text: var(--color-text-secondary);

  --color-checkbox-bg: var(--color-neutral-100);
  --color-checkbox-label: var(--color-text-disabled);
  --color-checkbox-label-active: var(--color-text-primary);
}
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#FFFFFF',
          50: '#FEFEFE',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#D3D3D3',
          400: '#BEBEBE',
          500: '#939393',
          600: '#646464',
          700: '#515151',
          800: '#484848',
          900: '#333333',
          950: '#1D1D1D',
        },
        accent: {
          highlight: '#FFF6E6',
        },
      },
    },
  },
};
```

---

## 컬러 추출 소스

### 분석된 Figma 프레임
- **Frame 68:158** (ReaderScreen_Default)
- **Frame 68:1762** (CreatorModal_ImageGenerate_Initial)
- **Frame 68:2610** (LogModal_UserDetail)

### 추출 방법
Figma API를 통해 실제 사용된 색상 값을 직접 추출하여 문서화했습니다.

---

## 다음 단계

### 1. Figma에 Variables 적용
- Figma Variables 기능을 사용하여 디자인 토큰 등록
- 모든 컴포넌트에 Variables 적용
- 모드 추가 (Light/Dark)

### 2. 개발 환경 설정
- CSS Custom Properties 또는 Tailwind 설정 파일 생성
- 디자인 토큰 자동 변환 파이프라인 구축

### 3. 추가 컬러 정의 필요
- **Primary/Brand Color**: 현재 정의되지 않음 (필요 시 추가)
- **Success/Error/Warning**: 상태 표시 색상 (필요 시 추가)
- **Link Color**: 하이퍼링크 색상 (필요 시 추가)

---

**문서 버전**: v1.0
**최종 수정일**: 2026-02-04
**다음 업데이트**: 타이포그래피, 스페이싱 시스템 추가 예정
