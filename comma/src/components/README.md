# Navigation.AppBar Component

## 개요
Figma의 Navigation.AppBar 섹션을 React 컴포넌트로 구현한 결과물입니다.

## 구성 요소

### 1. StatusBar (36px)
- **위치**: `StatusBar.jsx` / `StatusBar.css`
- **기능**:
  - 시간 표시 (현재 "12:30" 하드코딩)
  - 우측 상태 아이콘 (신호/WiFi/배터리)
- **폰트**: Roboto Medium 14px

### 2. NavigationAppBar (56px)
- **위치**: `NavigationAppBar.jsx` / `NavigationAppBar.css`
- **기능**:
  - StatusBar 포함
  - 뒤로가기 버튼 (클릭 이벤트 지원)
  - 작품 제목 표시 (props로 전달)
  - 로그 보기 체크박스 (토글 상태 관리)
- **폰트**: Pretendard Medium 14px/13px

## 사용법

```jsx
import NavigationAppBar from './components/NavigationAppBar'

function App() {
  return (
    <NavigationAppBar
      title="백작가의 망나니가 되었다"
      showLogView={false}
      onBackClick={() => console.log('뒤로 가기')}
      onLogViewToggle={(checked) => console.log('로그 보기:', checked)}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "백작가의 망나니가 되었다" | 작품 제목 |
| `showLogView` | boolean | false | 로그 보기 초기 상태 |
| `onBackClick` | function | - | 뒤로가기 버튼 클릭 핸들러 |
| `onLogViewToggle` | function | - | 로그 보기 토글 핸들러 (checked 값 전달) |

## 아이콘 교체 방법

현재 임시 이모지 아이콘을 사용 중입니다. Figma에서 실제 이미지를 다운로드한 후 다음 단계를 따라주세요:

### 1. Figma 이미지 다운로드
Figma API에서 제공된 이미지 URL로 다운로드:
- `imgIcons` → `src/assets/icons/status-icons.png`
- `imgIconBack` → `src/assets/icons/icon-back.png`
- `imgCheckBox` → `src/assets/icons/checkbox-empty.png`

### 2. StatusBar 아이콘 교체
`StatusBar.jsx` 파일 수정:

```jsx
import statusIcons from '../assets/icons/status-icons.png'

// 기존 placeholder 제거하고 이미지로 교체
<img
  src={statusIcons}
  alt="상태 아이콘"
  className="status-bar__icons-image"
/>
```

### 3. 뒤로가기 아이콘 교체
`NavigationAppBar.jsx` 파일 수정:

```jsx
import iconBack from '../assets/icons/icon-back.png'

// 기존 텍스트 아이콘 제거하고 이미지로 교체
<img
  src={iconBack}
  alt="뒤로 가기"
  style={{ width: '24px', height: '24px' }}
/>
```

### 4. 체크박스 아이콘 교체
`NavigationAppBar.jsx` 파일 수정:

```jsx
import checkboxEmpty from '../assets/icons/checkbox-empty.png'
import checkboxChecked from '../assets/icons/checkbox-checked.png' // 필요시

// 조건부 렌더링
<img
  src={isLogViewChecked ? checkboxChecked : checkboxEmpty}
  alt="체크박스"
  style={{ width: '20px', height: '20px' }}
/>
```

## 디자인 스펙

### 높이
- StatusBar: 36px
- AppBar: 56px
- **총 높이**: 92px

### 색상 (CSS Variables)
- 텍스트: `var(--color-text-primary)`, `var(--color-text-secondary)`
- 배경: `var(--color-bg-primary)`
- 테두리: `var(--color-border-light)` (#EEEEEE)

### 간격
- StatusBar 좌우 패딩: 20px
- AppBar 좌우 패딩: 20px
- 뒤로가기 버튼 ~ 제목 간격: 4px
- 체크박스 ~ 라벨 간격: 4px

### 폰트
- StatusBar 시간: Roboto Medium 14px
- AppBar 제목: Pretendard Medium 14px
- 로그 보기 라벨: Pretendard Medium 13px

## 검증 완료 항목
- ✅ StatusBar 36px 높이
- ✅ AppBar 56px 높이
- ✅ 총 92px 높이
- ✅ CSS Variables 사용
- ✅ Roboto 폰트 로드 (StatusBar 시간)
- ✅ Pretendard 폰트 적용 (제목, 라벨)
- ✅ 뒤로가기 버튼 클릭 이벤트
- ✅ 로그 보기 체크박스 토글 기능
- ✅ 360px 뷰포트 대응
- ✅ 하단 border 1px solid #eee

## 다음 단계
- [ ] Figma 이미지 다운로드 및 아이콘 교체
- [ ] StatusBar 시간을 실시간으로 업데이트 (선택사항)
- [ ] 다음 섹션 퍼블리싱 진행
