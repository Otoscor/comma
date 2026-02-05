# Figma Variables Import 가이드

**프로젝트**: comma
**파일**: figma-variables-colors.json
**최종 수정일**: 2026-02-04

---

## 📦 생성된 파일

**figma-variables-colors.json** - Figma Variables로 import 가능한 컬러 시스템

### 포함 내용
- **33개 Color Variables**
- **1개 Collection**: "comma - Colors"
- **1개 Mode**: "Light" (향후 Dark 모드 추가 가능)

---

## 🚀 Figma에 Import 하는 방법

### 방법 1: Variables Importer 플러그인 사용 (권장)

1. **플러그인 설치**
   - Figma에서 `Plugins` → `Find more plugins` 검색
   - "Variables Importer" 또는 "Design Tokens" 검색
   - 추천 플러그인:
     - **Variables Importer** (공식)
     - **Tokens Studio for Figma**
     - **Style Dictionary Export**

2. **JSON 파일 Import**
   - 플러그인 실행
   - `figma-variables-colors.json` 파일 선택
   - Import 실행

3. **검증**
   - Figma 우측 패널에서 `Variables` 아이콘 클릭
   - "comma - Colors" 컬렉션 확인
   - 33개 변수가 모두 생성되었는지 확인

---

### 방법 2: Figma REST API 사용 (개발자용)

Figma REST API를 사용하여 프로그래밍 방식으로 Variables를 생성할 수 있습니다.

```bash
# API 토큰 필요
curl -X POST 'https://api.figma.com/v1/files/:file_key/variables/collections' \
  -H 'X-Figma-Token: YOUR_API_TOKEN' \
  -H 'Content-Type: application/json' \
  -d @figma-variables-colors.json
```

**API 토큰 발급**:
1. Figma 계정 설정 → API → Personal Access Token 생성
2. 파일 편집 권한 필요

---

### 방법 3: 수동 생성 (소규모 프로젝트)

플러그인을 사용할 수 없는 경우 수동으로 생성:

1. **Collection 생성**
   - Figma 우측 패널 → Variables 아이콘
   - `+ Create collection` 클릭
   - 이름: "comma - Colors"

2. **Primitive Colors 생성**
   ```
   color/neutral/0     → #FFFFFF
   color/neutral/50    → #FEFEFE
   color/neutral/100   → #F5F5F5
   color/neutral/200   → #EBEBEB
   color/neutral/300   → #D3D3D3
   color/neutral/400   → #BEBEBE
   color/neutral/500   → #939393
   color/neutral/600   → #646464
   color/neutral/700   → #515151
   color/neutral/800   → #484848
   color/neutral/900   → #333333
   color/neutral/950   → #1D1D1D

   color/accent/highlight    → #FFF6E6

   color/alpha/overlay       → rgba(0,0,0,0.4)
   color/alpha/shadow-sm     → rgba(0,0,0,0.05)
   color/alpha/shadow-md     → rgba(0,0,0,0.15)
   ```

3. **Semantic Colors 생성 (Alias)**
   ```
   color/text/primary      → {color/neutral/950}
   color/text/secondary    → {color/neutral/800}
   color/text/tertiary     → {color/neutral/600}
   color/text/disabled     → {color/neutral/500}
   color/text/placeholder  → {color/neutral/400}
   color/text/inverse      → {color/neutral/0}

   color/background/primary    → {color/neutral/0}
   color/background/secondary  → {color/neutral/50}
   color/background/tertiary   → {color/neutral/100}
   color/background/overlay    → {color/alpha/overlay}
   color/background/highlight  → {color/accent/highlight}

   color/border/default  → {color/neutral/300}
   color/border/light    → #EEEEEE
   color/border/medium   → #A3A3A3
   color/border/subtle   → {color/neutral/200}

   color/surface/default   → {color/neutral/0}
   color/surface/elevated  → {color/neutral/0}
   color/surface/sunken    → {color/neutral/100}
   ```

---

## ✅ Import 후 적용 방법

### 1. 컴포넌트에 Variables 적용

기존 하드코딩된 색상을 Variables로 교체:

**Before**:
```
Fill: #1D1D1D (하드코딩)
```

**After**:
```
Fill: {color/text/primary} (Variable)
```

### 2. 일괄 적용 (권장)

1. **Selection Colors 플러그인 사용**
   - 같은 색상을 사용하는 모든 레이어 선택
   - Variables로 일괄 교체

2. **Find and Replace**
   - Figma에서 `Ctrl/Cmd + F`
   - 색상 값으로 검색 (예: #1D1D1D)
   - Variables로 교체

### 3. 우선순위

**먼저 적용할 컴포넌트**:
1. Text 스타일 (가장 많이 사용)
2. Background (카드, 모달)
3. Border (구분선, 테두리)
4. 아이콘 색상

---

## 🎨 Variables 활용 예시

### 컴포넌트별 적용

#### Navigation.AppBar
```
Background: {color/background/primary}
Border:     {color/border/light}
Title:      {color/text/primary}
```

#### Button.Primary
```
Background: {color/background/primary}
Border:     {color/border/light}
Text:       {color/text/primary}
```

#### Modal
```
Background: {color/background/primary}
Overlay:    {color/background/overlay}
Title:      {color/text/primary}
Close:      {color/text/primary} (50% opacity)
```

#### Text (소설 본문)
```
Color: {color/text/secondary}
Selection: {color/background/highlight}
```

---

## 🌓 Dark 모드 준비

향후 Dark 모드 추가 시:

1. **Mode 추가**
   - "comma - Colors" 컬렉션 선택
   - `+ Add mode` 클릭
   - 이름: "Dark"

2. **값 재정의**
   ```
   Light Mode             Dark Mode
   ─────────────────────  ─────────────────────
   neutral/0   #FFFFFF    neutral/0   #000000
   neutral/950 #1D1D1D    neutral/950 #FFFFFF

   (Semantic colors는 자동으로 반영됨)
   ```

3. **Semantic Colors는 그대로 유지**
   - `color/text/primary`는 여전히 `{neutral/950}` 참조
   - Mode만 바꾸면 자동으로 색상 변경

---

## 🔧 트러블슈팅

### JSON Import가 안 될 때

**문제**: "Invalid JSON format" 에러
**해결**:
1. JSON 파일 유효성 검사 (jsonlint.com)
2. UTF-8 인코딩 확인
3. 플러그인 최신 버전 사용

**문제**: Variables가 생성되지 않음
**해결**:
1. Figma 파일 편집 권한 확인
2. Collection 이름 중복 확인
3. 플러그인 재시작

### Variables 적용이 안 될 때

**문제**: 컴포넌트에 Variables를 적용할 수 없음
**해결**:
1. 레이어가 잠겨있는지 확인
2. Instance인 경우 Main Component에서 적용
3. 색상 타입 확인 (Fill, Stroke, Effect 등)

---

## 📚 참고 자료

### Figma 공식 문서
- [Variables 가이드](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Variables Collections](https://help.figma.com/hc/en-us/articles/15343816063383-Create-and-manage-variables)
- [Variables Modes](https://help.figma.com/hc/en-us/articles/15343767866007-Guide-to-modes-for-variables)

### 추천 플러그인
- **Variables Importer**: Variables JSON import/export
- **Tokens Studio**: Design tokens 관리
- **Style Dictionary**: Multi-platform token export

---

## ✨ 다음 단계

### 1. Variables 확장
- Component-specific variables 추가
- Spacing, Typography, Shadow variables 생성

### 2. 문서화
- Figma 파일 내 Variables 사용 가이드 페이지 생성
- 각 Variable의 용도 설명 추가

### 3. 자동화
- Figma API를 통한 Variables 자동 동기화
- 디자인 토큰 → 코드 변환 파이프라인 구축

---

**파일 위치**: `/Users/anipen/Desktop/newproject/figma-variables-colors.json`
**문서 버전**: v1.0
**최종 수정일**: 2026-02-04
