import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'
import NavigationAppBar from './components/NavigationAppBar'
import NavigationBottomTab from './components/NavigationBottomTab'
import NovelContent from './components/NovelContent'

const SCROLL_THRESHOLD = 10 // Minimum scroll distance to trigger hide/show

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showUI, setShowUI] = useState(true)
  const lastScrollY = useRef(0)

  const handleBackClick = useCallback(() => {
    console.log('Back clicked')
  }, [])

  const handleLogViewToggle = useCallback((checked) => {
    console.log('Log view:', checked)
  }, [])

  const handleTabChange = useCallback((tabName) => {
    console.log('Tab changed to:', tabName)
  }, [])

  const handleScrollChange = useCallback((percentage) => {
    setScrollPercentage(percentage)
  }, [])

  const handleProgressChange = useCallback((percentage) => {
    setScrollPercentage(percentage)
  }, [])

  // Detect scroll direction and update UI visibility
  const handleScrollDirection = useCallback((scrollY) => {
    const scrollDiff = scrollY - lastScrollY.current

    if (Math.abs(scrollDiff) > SCROLL_THRESHOLD) {
      if (scrollDiff > 0) {
        // Scrolling down - hide UI
        setShowUI(false)
      } else {
        // Scrolling up - show UI
        setShowUI(true)
      }
      lastScrollY.current = scrollY
    }
  }, [])

  return (
    <div className="mobile-viewport">
      <NavigationAppBar
        title="백작가의 망나니가 되었다"
        showLogView={false}
        onBackClick={handleBackClick}
        onLogViewToggle={handleLogViewToggle}
        isVisible={showUI}
      />

      {/* Content Area */}
      <div style={{
        height: '100%',
        paddingTop: showUI ? '92px' : '0px',
        paddingBottom: showUI ? '172px' : '0px',
        overflow: 'hidden',
        transition: 'padding 0.3s ease-in-out'
      }}>
        <NovelContent
          episodeNumber={1}
          onScrollChange={handleScrollChange}
          scrollPercentage={scrollPercentage}
          onScrollPositionChange={handleScrollDirection}
        />
      </div>

      <NavigationBottomTab
        currentPage={1}
        totalPages={50}
        progressPercentage={scrollPercentage}
        activeTab="log"
        onTabChange={handleTabChange}
        onProgressChange={handleProgressChange}
        isVisible={showUI}
      />
    </div>
  )
}

export default App
