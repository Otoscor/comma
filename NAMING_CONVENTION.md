# comma - 네이밍 컨벤션 가이드

**작성일**: 2026-02-04
**프로젝트**: comma (웹소설 AI 시각화 플랫폼)
**Figma 파일**: WorkspaceByYoungzoo

---

## 📋 목차

1. [네이밍 원칙](#네이밍-원칙)
2. [화면(Screen) 네이밍](#화면screen-네이밍)
3. [컴포넌트 네이밍](#컴포넌트-네이밍)
4. [레이어 네이밍](#레이어-네이밍)
5. [아이콘 네이밍](#아이콘-네이밍)
6. [상태 네이밍](#상태-네이밍)
7. [Figma 프레임별 리네이밍 가이드](#figma-프레임별-리네이밍-가이드)

---

## 네이밍 원칙

### 1. 일관성 (Consistency)
- 같은 종류의 요소는 같은 패턴으로 네이밍
- 단어 구분: PascalCase 사용 (Figma 권장)

### 2. 명확성 (Clarity)
- 기능이나 역할이 즉시 이해되도록 명확하게
- 약어 사용 최소화 (Btn, Txt 등 금지)

### 3. 계층 구조 (Hierarchy)
- 점(.)으로 계층 표현: `Parent.Child`
- 개발 시 컴포넌트 네임스페이스와 매핑 가능하도록

### 4. 상태 표현 (State)
- 상태가 있는 경우 접미사로 표현
- 예: `Default`, `Active`, `Loading`, `Error`, `Empty`

### 5. 개발 친화적 (Developer Friendly)
- 코드로 변환 시 그대로 사용 가능하도록
- 한글 사용 금지 (컴포넌트명에서)

---

## 화면(Screen) 네이밍

### 패턴
```
[기능영역][화면유형]_[상태]
```

### 기능영역
- `Reader`: 웹소설 읽기
- `Log`: 로그 관련
- `Creator`: AI 콘텐츠 생성
- `Profile`: 프로필/설정
- `Auth`: 로그인/회원가입

### 화면유형
- `Screen`: 전체 화면
- `Modal`: 모달/바텀시트
- `Overlay`: 오버레이

### 예시
- `ReaderScreen_Default`
- `ReaderScreen_LogView`
- `LogModal_UserDetail`
- `CreatorModal_ImageGenerate_Loading`

---

## 컴포넌트 네이밍

### 패턴
```
[카테고리].[컴포넌트명]_[Variant]
```

### 카테고리
- `Navigation`: 네비게이션 관련
- `Button`: 버튼 류
- `Card`: 카드 컴포넌트
- `Input`: 입력 요소
- `Indicator`: 상태 표시
- `Icon`: 아이콘
- `Layout`: 레이아웃 구조

### 예시
- `Navigation.AppBar`
- `Navigation.BottomTab`
- `Button.Primary`
- `Button.FloatingAction`
- `Card.LogItem`
- `Indicator.ProgressBar`
- `Indicator.Marker`

---

## 레이어 네이밍

### 패턴
```
[레이어타입]_[설명]
```

### 레이어타입
- `Container`: 컨테이너/Frame
- `Text`: 텍스트 레이어
- `Icon`: 아이콘
- `Image`: 이미지
- `Divider`: 구분선
- `Bg`: 배경

### 예시
- `Container_Content`
- `Text_NovelTitle`
- `Text_PageProgress`
- `Icon_Back`
- `Icon_Heart`
- `Divider_Vertical`
- `Bg_Dimmed`

---

## 아이콘 네이밍

### 현재 패턴 유지 (좋은 상태)
```
[icon-name]-[number]
```

### 예시
- `arrow-left-01`
- `comment-02`
- `license-draft`
- `settings-01`
- `image-01`
- `video-02`
- `audio-wave-01`
- `pencil-edit-01`
- `ai-magic`
- `loading-03`
- `reload`
- `cancel-01`

**참고**: 아이콘 라이브러리 (Untitled UI 또는 유사) 사용 중으로 추정

---

## 상태 네이밍

### 상태 접미사
- `_Default`: 기본 상태
- `_Active`: 활성화 상태
- `_Disabled`: 비활성화 상태
- `_Hover`: 호버 상태 (웹)
- `_Pressed`: 눌린 상태
- `_Loading`: 로딩 중
- `_Error`: 에러 상태
- `_Empty`: 빈 상태
- `_Success`: 성공 상태

### 예시
- `Button.Primary_Default`
- `Button.Primary_Pressed`
- `CreatorModal_Loading`
- `LogGallery_Empty`

---

## Figma 프레임별 리네이밍 가이드

### 현재 상태 분석
**문제점**:
- 모든 프레임이 "test"로 명명됨
- 자동 생성 이름 (Frame 2609809)
- 일관성 없는 컴포넌트 네이밍

---

### 📱 Phase 1: 웹소설 읽기 화면

#### Frame 1 (68:158)
**현재**: `test`
**변경**: `ReaderScreen_Default`

**하위 컴포넌트**:
```
ReaderScreen_Default/
├─ Navigation.AppBar
│  ├─ Icon_Back (arrow-left-01)
│  ├─ Text_NovelTitle
│  └─ Checkbox_LogView
├─ Container_ContentArea
│  └─ Text_NovelContent
├─ Indicator.ProgressBar
│  ├─ Container_ProgressTrack
│  ├─ Container_ProgressFill
│  ├─ Text_CurrentPage
│  ├─ Text_Separator
│  ├─ Text_TotalPage
│  └─ Text_Percentage
└─ Navigation.BottomTab
   ├─ Tab_Comment
   │  ├─ Icon_Comment (comment-02)
   │  └─ Text_Label
   ├─ Tab_Log
   │  ├─ Icon_Log (license-draft)
   │  └─ Text_Label
   └─ Tab_Settings
      ├─ Icon_Settings (settings-01)
      └─ Text_Label
```

---

#### Frame 2 (68:2316)
**현재**: `test`
**변경**: `ReaderScreen_LogViewActive`

**하위 컴포넌트** (Frame 1과 동일, 추가 요소만):
```
ReaderScreen_LogViewActive/
├─ [Frame 1의 모든 컴포넌트]
└─ Overlay_LogMarkers
   ├─ Indicator.Marker_01
   ├─ Indicator.Marker_02
   └─ Indicator.Marker_03
```

**컴포넌트 정의**:
- `Indicator.Marker`: 독자 시각화 위치 표시 마커
  - 원형 인디케이터
  - 클릭 가능

---

#### Frame 3 (68:2610)
**현재**: `test`
**변경**: `LogModal_UserDetail`

**하위 컴포넌트**:
```
LogModal_UserDetail/
├─ Bg_Dimmed
├─ Modal.BottomSheet
│  ├─ Layout.Grabber
│  ├─ Container_Header
│  │  ├─ Text_ModalTitle (예: "{닉네임}의 로그")
│  │  └─ Button.IconButton_Close
│  ├─ Container_ImageArea
│  │  ├─ Image_GeneratedContent
│  │  └─ Button.IconButton_Like
│  │     └─ Icon_Heart
│  └─ Container_Footer
│     └─ Text_ScrappedText
```

**컴포넌트 정의**:
- `Modal.BottomSheet`: 바텀시트 기본 레이아웃
- `Layout.Grabber`: 드래그 핸들 (상단 바)

---

### 📝 Phase 2: AI 콘텐츠 생성 화면

#### Frame 4 (68:1386)
**현재**: `test`
**변경**: `ReaderScreen_TextSelection`

**하위 컴포넌트**:
```
ReaderScreen_TextSelection/
├─ Container_ContentArea
│  └─ Text_NovelContent
└─ Indicator.Cursor
   └─ Icon_Cursor (cursor-02)
```

---

#### Frame 5 (68:1558)
**현재**: `test`
**변경**: `CreatorOverlay_TypeSelector`

**하위 컴포넌트**:
```
CreatorOverlay_TypeSelector/
├─ Container_ContentArea (배경, 흐릿함)
└─ Toolbar.FloatingAction
   ├─ Button.ToolbarOption_Image
   │  ├─ Icon_Image (image-01)
   │  └─ Text_Label
   ├─ Button.ToolbarOption_Video
   │  ├─ Icon_Video (video-02)
   │  └─ Text_Label
   ├─ Button.ToolbarOption_Audio
   │  ├─ Icon_Audio (audio-wave-01)
   │  └─ Text_Label
   ├─ Button.ToolbarOption_Memo
   │  ├─ Icon_Memo (pencil-edit-01)
   │  └─ Text_Label
   ├─ Divider_Vertical
   └─ Button.IconButton_Cancel
      └─ Icon_Cancel (cancel-01)
```

**컴포넌트 정의**:
- `Toolbar.FloatingAction`: 플로팅 액션 툴바
- `Button.ToolbarOption`: 툴바 내 옵션 버튼 (아이콘 + 텍스트)

---

#### Frame 6 (68:1762)
**현재**: `test`
**변경**: `CreatorModal_ImageGenerate_Initial`

**하위 컴포넌트**:
```
CreatorModal_ImageGenerate_Initial/
├─ Bg_Dimmed
├─ Modal.BottomSheet
│  ├─ Layout.Grabber
│  ├─ Container_Header
│  │  ├─ Text_ModalTitle ("이미지 만들기")
│  │  └─ Button.IconButton_Close
│  ├─ Container_Content
│  │  ├─ Text_Description ("스크랩한 글을 바탕으로...")
│  │  └─ Card.TextPreview
│  │     └─ Text_ScrappedText
│  └─ Container_Footer
│     └─ Button.Primary_Generate
│        ├─ Icon_AIMagic (ai-magic)
│        └─ Text_Label ("만들기")
```

**컴포넌트 정의**:
- `Card.TextPreview`: 스크랩된 텍스트 미리보기 카드
- `Button.Primary_Generate`: AI 생성 실행 버튼

---

#### Frame 7 (68:1881)
**현재**: `test`
**변경**: `CreatorModal_ImageGenerate_Loading`

**하위 컴포넌트**:
```
CreatorModal_ImageGenerate_Loading/
├─ [Frame 6과 동일한 구조]
├─ Container_Content
│  └─ Indicator.Loading
│     ├─ Icon_Loading (loading-03)
│     └─ Text_LoadingMessage ("이미지를 생성중입니다...")
```

**컴포넌트 정의**:
- `Indicator.Loading`: 로딩 상태 표시 (스피너 + 텍스트)

---

#### Frame 8 (68:1954)
**현재**: `test`
**변경**: `CreatorModal_ImageGenerate_Success`

**하위 컴포넌트**:
```
CreatorModal_ImageGenerate_Success/
├─ Bg_Dimmed
├─ Modal.BottomSheet
│  ├─ Layout.Grabber
│  ├─ Container_Header
│  │  ├─ Text_ModalTitle ("이미지 만들기")
│  │  └─ Button.IconButton_Close
│  ├─ Container_Content
│  │  └─ Image_GeneratedContent
│  └─ Container_Footer
│     ├─ Button.Secondary_SaveToLog
│     │  ├─ Icon_Save (license-draft)
│     │  └─ Text_Label ("로그에 넣기")
│     └─ Button.Secondary_Regenerate
│        ├─ Icon_Reload (reload)
│        └─ Text_Label ("다시 만들기")
```

**컴포넌트 정의**:
- `Button.Secondary_SaveToLog`: 로그 저장 버튼
- `Button.Secondary_Regenerate`: 재생성 버튼

---

### 📚 Phase 3: 로그 갤러리

#### Frame 9 (68:2041)
**현재**: `test`
**변경**: `LogModal_Gallery`

**하위 컴포넌트**:
```
LogModal_Gallery/
├─ Container_ContentArea (배경)
├─ Modal.BottomSheet_Large
│  ├─ Layout.Grabber
│  ├─ Container_Header
│  │  ├─ Text_ModalTitle ("로그")
│  │  ├─ Button.IconButton_Close
│  │  └─ Checkbox_MyLogsOnly ("내 로그만 보기")
│  ├─ Navigation.TabBar
│  │  ├─ Tab_Image_Active
│  │  ├─ Tab_Video
│  │  ├─ Tab_Audio
│  │  └─ Tab_Memo
│  └─ Container_Content
│     └─ Grid.LogItems
│        ├─ Card.LogItem_01
│        │  ├─ Image_Thumbnail
│        │  ├─ Text_AuthorTag ("by {닉네임}")
│        │  └─ Text_ScrappedTextPreview
│        ├─ Card.LogItem_02
│        └─ Card.LogItem_03
```

**컴포넌트 정의**:
- `Modal.BottomSheet_Large`: 큰 사이즈 바텀시트
- `Navigation.TabBar`: 탭 네비게이션
- `Grid.LogItems`: 로그 아이템 그리드 레이아웃
- `Card.LogItem`: 로그 콘텐츠 카드

---

## 🧩 재사용 컴포넌트 정의

### Navigation 계열

#### `Navigation.AppBar`
**용도**: 상단 네비게이션 바
**구성요소**:
- 뒤로가기 버튼 (좌측)
- 제목 (중앙)
- 액션 버튼 (우측)

**Variants**:
- `Default`: 기본
- `WithCheckbox`: 체크박스 포함 (로그 보기)
- `WithMoreMenu`: 더보기 메뉴 포함

---

#### `Navigation.BottomTab`
**용도**: 하단 탭 네비게이션
**구성요소**:
- 3개 탭 (댓글/로그/설정)
- 각 탭: 아이콘 + 레이블

**Variants**:
- `Comment_Active`
- `Log_Active`
- `Settings_Active`

---

#### `Navigation.TabBar`
**용도**: 콘텐츠 필터링 탭
**구성요소**:
- 4개 탭 (이미지/비디오/음성/메모)

**Variants**:
- 각 탭의 Active/Default 상태

---

### Modal 계열

#### `Modal.BottomSheet`
**용도**: 기본 바텀시트 레이아웃
**구성요소**:
- Grabber (드래그 핸들)
- 헤더 영역
- 콘텐츠 영역
- 푸터 영역

**Variants**:
- `Small`: 작은 높이
- `Medium`: 중간 높이
- `Large`: 큰 높이 (전체 화면에 가까움)

---

### Button 계열

#### `Button.Primary`
**용도**: 주요 액션 버튼
**Variants**:
- `Default`
- `Pressed`
- `Disabled`

---

#### `Button.Secondary`
**용도**: 보조 액션 버튼
**Variants**:
- `Default`
- `Pressed`
- `Disabled`

---

#### `Button.IconButton`
**용도**: 아이콘만 있는 버튼
**Variants**:
- `Close`
- `Like`
- `More`

---

#### `Button.ToolbarOption`
**용도**: 플로팅 툴바 옵션 버튼
**Variants**:
- `Image`
- `Video`
- `Audio`
- `Memo`

---

### Card 계열

#### `Card.LogItem`
**용도**: 로그 갤러리의 아이템 카드
**구성요소**:
- 썸네일 이미지/영상
- 작성자 태그
- 스크랩된 텍스트 미리보기

**Variants**:
- `Image`
- `Video`
- `Audio`

---

#### `Card.TextPreview`
**용도**: 스크랩된 텍스트 미리보기
**구성요소**:
- 텍스트 영역 (회색 박스)

---

### Indicator 계열

#### `Indicator.ProgressBar`
**용도**: 읽기 진행률 표시
**구성요소**:
- 진행 바 (그래프)
- 페이지 정보 (74/134)
- 퍼센트 (48%)

---

#### `Indicator.Marker`
**용도**: 로그 마커 (독자 시각화 위치)
**형태**: 원형 인디케이터
**Variants**:
- `Default`
- `Active` (선택됨)

---

#### `Indicator.Loading`
**용도**: 로딩 상태 표시
**구성요소**:
- 로딩 스피너
- 로딩 메시지

---

### Layout 계열

#### `Layout.Grabber`
**용도**: 바텀시트 드래그 핸들
**형태**: 가로 막대 (40px x 4px)

---

## 📝 네이밍 체크리스트

프레임/컴포넌트 이름을 정할 때 다음을 확인하세요:

- [ ] **기능 설명**: 이름만 보고 기능을 알 수 있는가?
- [ ] **계층 구조**: 점(.)으로 계층이 명확한가?
- [ ] **상태 표현**: 상태가 있다면 접미사로 표현했는가?
- [ ] **일관성**: 같은 종류의 요소와 패턴이 일치하는가?
- [ ] **개발 친화**: 코드로 변환 시 그대로 쓸 수 있는가?
- [ ] **한글 금지**: 컴포넌트명에 한글이 없는가?
- [ ] **간결성**: 너무 길지 않은가? (4단어 이내 권장)

---

## 🔄 마이그레이션 작업 순서

1. **화면(프레임) 리네이밍**
   - 9개 주요 프레임 이름 변경
   - Phase별로 그룹화

2. **컴포넌트 추출 및 리네이밍**
   - 재사용 가능한 컴포넌트 식별
   - 컴포넌트 라이브러리 생성
   - 계층 구조 적용

3. **레이어 리네이밍**
   - 각 프레임 내부 레이어
   - 타입_설명 패턴 적용

4. **Variant 정리**
   - 버튼, 탭 등 상태 관리
   - 컴포넌트 Variant 생성

5. **Auto Layout 적용**
   - 리네이밍과 함께 구조 개선
   - 반응형 대응

---

## 📚 참고 자료

### Figma 네이밍 베스트 프랙티스
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Design Systems in Figma](https://www.figma.com/blog/component-design-systems/)

### 개발 연동
- React Component 네이밍: PascalCase
- CSS Class 네이밍: kebab-case (변환 필요)
- 파일 구조: 컴포넌트 계층과 동일하게

---

**문서 버전**: v1.1
**최종 수정일**: 2026-02-04
**작성자**: Claude (Based on SERVICE_PLAN.md v0.2, FIGMA_ANALYSIS.md v1.0)
**다음 단계**: Figma 파일에 직접 적용 (수동 작업 필요)

**v1.1 주요 변경사항**:
- 계층 구조 구분자 변경: `/` → `.`
- 모든 컴포넌트 네이밍 예시 업데이트 (예: `Navigation/AppBar` → `Navigation.AppBar`)
- 개발 친화적 네임스페이스 패턴으로 변경
