# Figma 리네이밍 빠른 참조 가이드

**프로젝트**: comma
**작업 대상**: WorkspaceByYoungzoo Figma 파일

---

## 📋 9개 프레임 리네이밍 테이블

| 현재 이름 | Frame ID | 변경할 이름 | 설명 |
|---------|----------|-----------|------|
| test | 68:158 | **ReaderScreen_Default** | 기본 읽기 화면 |
| test | 68:2316 | **ReaderScreen_LogViewActive** | 로그 보기 활성화 (마커 표시) |
| test | 68:2610 | **LogModal_UserDetail** | 마커 클릭 시 유저 로그 상세 |
| test | 68:1386 | **ReaderScreen_TextSelection** | 텍스트 선택 모드 |
| test | 68:1558 | **CreatorOverlay_TypeSelector** | AI 생성 타입 선택 툴바 |
| test | 68:1762 | **CreatorModal_ImageGenerate_Initial** | 이미지 생성 초기 화면 |
| test | 68:1881 | **CreatorModal_ImageGenerate_Loading** | 이미지 생성 로딩 중 |
| test | 68:1954 | **CreatorModal_ImageGenerate_Success** | 이미지 생성 완료 |
| test | 68:2041 | **LogModal_Gallery** | 로그 갤러리 (전체 목록) |

---

## 🧩 주요 컴포넌트 리네이밍 테이블

### Navigation 계열

| 현재 이름 | 변경할 이름 | 사용 위치 |
|---------|-----------|---------|
| Appbar/Context | **Navigation.AppBar** | 상단 네비게이션 바 |
| AppbarContextPart | **Container_AppBarContent** | AppBar 내부 컨테이너 |
| hometap | **Navigation.BottomTab** | 하단 탭 네비게이션 |
| - | **Navigation.TabBar** | 콘텐츠 필터링 탭 (로그 갤러리) |

### Modal 계열

| 현재 이름 | 변경할 이름 | 사용 위치 |
|---------|-----------|---------|
| Frame 2609815, Frame 2609844 등 | **Modal.BottomSheet** | 바텀시트 기본 구조 |
| Top Bar / Grabber | **Layout.Grabber** | 드래그 핸들 |

### Button 계열

| 현재 이름 | 변경할 이름 | 설명 |
|---------|-----------|------|
| MakeLandBtn (?) | **Button.Primary_Generate** | AI 생성 실행 버튼 |
| Frame 2609830 | **Button.Primary_Generate** | "만들기" 버튼 |
| Frame 2609832 | **Container_ActionButtons** | 2개 버튼 컨테이너 |
| cancel-01 | **Button.IconButton_Close** | 닫기 버튼 |

### Indicator 계열

| 현재 이름 | 변경할 이름 | 설명 |
|---------|-----------|------|
| Frame 2609812, Frame 2609813, Frame 2609814 | **Indicator.ProgressBar** | 읽기 진행률 바 |
| Ellipse 123 (원형) | **Indicator.Marker** | 로그 마커 |
| loading-03 | **Indicator.Loading** | 로딩 스피너 |

### Card 계열

| 현재 이름 | 변경할 이름 | 설명 |
|---------|-----------|------|
| Frame 2609828 (텍스트 박스) | **Card.TextPreview** | 스크랩 텍스트 미리보기 |
| - | **Card.LogItem** | 로그 갤러리 아이템 카드 |

### Text 계열

| 현재 이름 | 변경할 이름 | 설명 |
|---------|-----------|------|
| Title (여러 개) | **Text_NovelTitle** | 소설 제목 |
| Title (본문) | **Text_NovelContent** | 소설 본문 |
| Title (74/134) | **Text_CurrentPage**, **Text_TotalPage** | 페이지 정보 |
| Title (48%) | **Text_Percentage** | 진행률 퍼센트 |
| Title (모달) | **Text_ModalTitle** | 모달 제목 |
| Add Character Text | **Text_Label** | 버튼/탭 레이블 |

### Icon 계열 (현재 상태 유지)

| 아이콘명 | 용도 |
|---------|------|
| arrow-left-01 | 뒤로가기 |
| comment-02 | 댓글 탭 |
| license-draft | 로그 탭 |
| settings-01 | 설정 탭 |
| image-01 | 이미지 생성 |
| video-02 | 비디오 생성 |
| audio-wave-01 | 음성 생성 |
| pencil-edit-01 | 메모 |
| ai-magic | AI 생성 |
| loading-03 | 로딩 |
| reload | 다시 만들기 |
| cancel-01 | 닫기 |
| cursor-02 | 텍스트 선택 커서 |

---

## 🎯 프레임별 상세 리네이밍 가이드

### ReaderScreen_Default (68:158)

```
ReaderScreen_Default
├─ Navigation.AppBar
│  ├─ Icon_Back
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
   ├─ Tab_Log
   └─ Tab_Settings
```

### ReaderScreen_LogViewActive (68:2316)

```
ReaderScreen_LogViewActive
├─ [ReaderScreen_Default의 모든 요소]
└─ Overlay_LogMarkers
   ├─ Indicator.Marker_01
   ├─ Indicator.Marker_02
   └─ Indicator.Marker_03
```

### LogModal_UserDetail (68:2610)

```
LogModal_UserDetail
├─ Bg_Dimmed
└─ Modal.BottomSheet
   ├─ Layout.Grabber
   ├─ Container_Header
   │  ├─ Text_ModalTitle
   │  └─ Button.IconButton_Close
   ├─ Container_ImageArea
   │  ├─ Image_GeneratedContent
   │  └─ Button.IconButton_Like
   └─ Container_Footer
      └─ Text_ScrappedText
```

### ReaderScreen_TextSelection (68:1386)

```
ReaderScreen_TextSelection
├─ Container_ContentArea
│  └─ Text_NovelContent
└─ Indicator.Cursor
```

### CreatorOverlay_TypeSelector (68:1558)

```
CreatorOverlay_TypeSelector
├─ Container_ContentArea
└─ Toolbar.FloatingAction
   ├─ Button.ToolbarOption_Image
   ├─ Button.ToolbarOption_Video
   ├─ Button.ToolbarOption_Audio
   ├─ Button.ToolbarOption_Memo
   ├─ Divider_Vertical
   └─ Button.IconButton_Cancel
```

### CreatorModal_ImageGenerate_Initial (68:1762)

```
CreatorModal_ImageGenerate_Initial
├─ Bg_Dimmed
└─ Modal.BottomSheet
   ├─ Layout.Grabber
   ├─ Container_Header
   │  ├─ Text_ModalTitle
   │  └─ Button.IconButton_Close
   ├─ Container_Content
   │  ├─ Text_Description
   │  └─ Card.TextPreview
   └─ Container_Footer
      └─ Button.Primary_Generate
```

### CreatorModal_ImageGenerate_Loading (68:1881)

```
CreatorModal_ImageGenerate_Loading
├─ [Initial과 동일한 구조]
└─ Container_Content
   └─ Indicator.Loading
      ├─ Icon_Loading
      └─ Text_LoadingMessage
```

### CreatorModal_ImageGenerate_Success (68:1954)

```
CreatorModal_ImageGenerate_Success
├─ Bg_Dimmed
└─ Modal.BottomSheet
   ├─ Layout.Grabber
   ├─ Container_Header
   ├─ Container_Content
   │  └─ Image_GeneratedContent
   └─ Container_Footer
      ├─ Button.Secondary_SaveToLog
      └─ Button.Secondary_Regenerate
```

### LogModal_Gallery (68:2041)

```
LogModal_Gallery
├─ Container_ContentArea
└─ Modal.BottomSheet_Large
   ├─ Layout.Grabber
   ├─ Container_Header
   │  ├─ Text_ModalTitle
   │  ├─ Button.IconButton_Close
   │  └─ Checkbox_MyLogsOnly
   ├─ Navigation.TabBar
   │  ├─ Tab_Image_Active
   │  ├─ Tab_Video
   │  ├─ Tab_Audio
   │  └─ Tab_Memo
   └─ Container_Content
      └─ Grid.LogItems
         ├─ Card.LogItem
         ├─ Card.LogItem
         └─ Card.LogItem
```

---

## ✅ 작업 체크리스트

### Phase 1: 프레임 리네이밍
- [ ] Frame 68:158 → `ReaderScreen_Default`
- [ ] Frame 68:2316 → `ReaderScreen_LogViewActive`
- [ ] Frame 68:2610 → `LogModal_UserDetail`
- [ ] Frame 68:1386 → `ReaderScreen_TextSelection`
- [ ] Frame 68:1558 → `CreatorOverlay_TypeSelector`
- [ ] Frame 68:1762 → `CreatorModal_ImageGenerate_Initial`
- [ ] Frame 68:1881 → `CreatorModal_ImageGenerate_Loading`
- [ ] Frame 68:1954 → `CreatorModal_ImageGenerate_Success`
- [ ] Frame 68:2041 → `LogModal_Gallery`

### Phase 2: 재사용 컴포넌트 추출
- [ ] `Navigation.AppBar` 컴포넌트 생성
- [ ] `Navigation.BottomTab` 컴포넌트 생성
- [ ] `Navigation.TabBar` 컴포넌트 생성
- [ ] `Modal.BottomSheet` 컴포넌트 생성 (Small/Medium/Large 변형)
- [ ] `Layout.Grabber` 컴포넌트 생성
- [ ] `Button.Primary` 컴포넌트 생성
- [ ] `Button.Secondary` 컴포넌트 생성
- [ ] `Button.IconButton` 컴포넌트 생성
- [ ] `Button.ToolbarOption` 컴포넌트 생성
- [ ] `Indicator.ProgressBar` 컴포넌트 생성
- [ ] `Indicator.Marker` 컴포넌트 생성
- [ ] `Indicator.Loading` 컴포넌트 생성
- [ ] `Card.TextPreview` 컴포넌트 생성
- [ ] `Card.LogItem` 컴포넌트 생성

### Phase 3: 레이어 리네이밍
- [ ] 각 프레임 내부 레이어 일괄 리네이밍
- [ ] Text 레이어: `Text_[용도]`
- [ ] Container 레이어: `Container_[용도]`
- [ ] Icon 레이어: `Icon_[용도]`
- [ ] Background 레이어: `Bg_[용도]`

### Phase 4: Auto Layout 적용
- [ ] 컴포넌트에 Auto Layout 적용
- [ ] Spacing, Padding 정리
- [ ] Constraints 설정

### Phase 5: Variant 정리
- [ ] 버튼 상태 (Default/Pressed/Disabled)
- [ ] 탭 상태 (Active/Default)
- [ ] 모달 크기 (Small/Medium/Large)

---

## 🚀 Figma에서 작업하는 방법

### 1. 프레임 이름 변경
1. 레이어 패널에서 프레임 선택
2. 더블클릭하여 이름 수정
3. 위 테이블의 "변경할 이름" 입력

### 2. 컴포넌트 생성
1. 재사용할 요소 선택
2. `Ctrl/Cmd + Alt + K` (컴포넌트 생성)
3. 컴포넌트 이름 입력 (슬래시 사용하면 자동으로 계층 생성)

### 3. 일괄 리네이밍 (플러그인 권장)
- **Rename It** 플러그인 사용
- **Find and Replace** 플러그인 사용

---

## 📝 네이밍 패턴 요약

| 요소 타입 | 패턴 | 예시 |
|---------|------|------|
| 화면 | `[기능][타입]_[상태]` | `ReaderScreen_Default` |
| 컴포넌트 | `[카테고리].[이름]_[Variant]` | `Navigation.AppBar` |
| 레이어 | `[타입]_[설명]` | `Text_NovelTitle` |
| 아이콘 | `[icon-name]-[number]` | `arrow-left-01` |

---

**문서 버전**: v1.1
**최종 수정일**: 2026-02-04
**참고 문서**: NAMING_CONVENTION.md (전체 가이드)
**작업 예상 시간**: 2-3시간
**난이도**: 중급

**v1.1 주요 변경사항**:
- 계층 구조 구분자 변경: `/` → `.`
- 모든 컴포넌트 네이밍 예시 업데이트 (예: `Navigation/AppBar` → `Navigation.AppBar`)
