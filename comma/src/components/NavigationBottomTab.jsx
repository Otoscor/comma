import { useState, useRef, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Settings01Icon } from '@hugeicons/core-free-icons'
import './NavigationBottomTab.css'

// Local SVG Icons
const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5" />
  </svg>
)

const LogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.4999 14V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50008 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 13.9999C3.49997 17.7712 3.49995 19.6568 4.67153 20.8284C5.8431 22 7.72873 22 11.5 22H12.4999C16.2712 22 18.1568 22 19.3284 20.8284C20.4999 19.6569 20.4999 17.7712 20.4999 14Z" />
    <path d="M8 7H16M8 12H16M8 17L12 17" />
  </svg>
)

function NavigationBottomTab({
  currentPage = 1,
  totalPages = 134,
  progressPercentage = 48,
  activeTab = 'log',
  onTabChange,
  onProgressChange,
  isVisible = true
}) {
  const [selectedTab, setSelectedTab] = useState(activeTab)
  const [isDragging, setIsDragging] = useState(false)
  const progressBarRef = useRef(null)

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName)
    if (onTabChange) {
      onTabChange(tabName)
    }
  }

  const calculateProgressFromEvent = (e) => {
    const progressBar = progressBarRef.current
    if (!progressBar) return null

    const rect = progressBar.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100

    return Math.max(0, Math.min(100, percentage))
  }

  const handleProgressMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)

    const percentage = calculateProgressFromEvent(e)
    if (percentage !== null && onProgressChange) {
      onProgressChange(percentage)
    }
  }

  const handleProgressMouseMove = (e) => {
    if (!isDragging) return

    const percentage = calculateProgressFromEvent(e)
    if (percentage !== null && onProgressChange) {
      onProgressChange(percentage)
    }
  }

  const handleProgressMouseUp = () => {
    setIsDragging(false)
  }

  // Global mouse events for dragging
  useEffect(() => {
    if (!isDragging) return

    const handleGlobalMouseMove = (e) => {
      const percentage = calculateProgressFromEvent(e)
      if (percentage !== null && onProgressChange) {
        onProgressChange(percentage)
      }
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mouseup', handleGlobalMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, onProgressChange])

  return (
    <div className={`navigation-bottom-tab ${isVisible ? '' : 'navigation-bottom-tab--hidden'}`}>
      {/* Progress Bar Section */}
      <div className="navigation-bottom-tab__progress-section">
        <div
          className={`navigation-bottom-tab__progress-bar ${isDragging ? 'dragging' : ''}`}
          ref={progressBarRef}
          onMouseDown={handleProgressMouseDown}
        >
          <div className="navigation-bottom-tab__progress-track" />
          <div
            className="navigation-bottom-tab__progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
          <div
            className="navigation-bottom-tab__progress-indicator"
            style={{ left: `${progressPercentage}%` }}
          />
        </div>

        <div className="navigation-bottom-tab__progress-info">
          <span className="navigation-bottom-tab__progress-current">
            {currentPage} / {totalPages}
          </span>
          <span className="navigation-bottom-tab__progress-percentage">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="navigation-bottom-tab__tabs">
        <button
          className={`navigation-bottom-tab__tab ${selectedTab === 'comment' ? 'active' : ''}`}
          onClick={() => handleTabClick('comment')}
          aria-label="댓글"
        >
          <CommentIcon />
          <span className="navigation-bottom-tab__tab-label">댓글</span>
        </button>

        <button
          className={`navigation-bottom-tab__tab ${selectedTab === 'log' ? 'active' : ''}`}
          onClick={() => handleTabClick('log')}
          aria-label="로그"
        >
          <LogIcon />
          <span className="navigation-bottom-tab__tab-label">로그</span>
        </button>

        <button
          className={`navigation-bottom-tab__tab ${selectedTab === 'settings' ? 'active' : ''}`}
          onClick={() => handleTabClick('settings')}
          aria-label="설정"
        >
          <HugeiconsIcon
            icon={Settings01Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
          <span className="navigation-bottom-tab__tab-label">설정</span>
        </button>
      </div>
    </div>
  )
}

export default NavigationBottomTab
