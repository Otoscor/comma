import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, Tick02Icon, Square01Icon } from '@hugeicons/core-free-icons'
import StatusBar from './StatusBar'
import './NavigationAppBar.css'

function NavigationAppBar({
  title = '백작가의 망나니가 되었다',
  showLogView = false,
  onBackClick,
  onLogViewToggle,
  isVisible = true
}) {
  const [isLogViewChecked, setIsLogViewChecked] = useState(showLogView)

  const handleCheckboxClick = () => {
    const newValue = !isLogViewChecked
    setIsLogViewChecked(newValue)
    if (onLogViewToggle) {
      onLogViewToggle(newValue)
    }
  }

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick()
    }
  }

  return (
    <div className={`navigation-app-bar ${isVisible ? '' : 'navigation-app-bar--hidden'}`}>
      <StatusBar />

      <div className="navigation-app-bar__main">
        <div className="navigation-app-bar__left">
          <button
            className="navigation-app-bar__back-button"
            onClick={handleBackClick}
            aria-label="뒤로 가기"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              size={24}
              color="currentColor"
              strokeWidth={1.5}
            />
          </button>
          <h1 className="navigation-app-bar__title">{title}</h1>
        </div>

        <div className="navigation-app-bar__right">
          <button
            className="navigation-app-bar__log-view"
            onClick={handleCheckboxClick}
            aria-label="로그 보기"
          >
            <span className={`navigation-app-bar__checkbox ${isLogViewChecked ? 'checked' : ''}`}>
              <HugeiconsIcon
                icon={isLogViewChecked ? Tick02Icon : Square01Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.5}
              />
            </span>
            <span className="navigation-app-bar__log-label">로그 보기</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavigationAppBar
