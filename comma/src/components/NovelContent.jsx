import { useEffect, useState, useRef } from 'react'
import './NovelContent.css'
import ToolbarFloatingAction from './ToolbarFloatingAction'
import CreatorModal from './CreatorModal'

function NovelContent({ episodeNumber = 1, onScrollChange, scrollPercentage, onScrollPositionChange }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedText, setSelectedText] = useState('')
  const [toolbarPosition, setToolbarPosition] = useState(null)
  const [showCreatorModal, setShowCreatorModal] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [savedMarkers, setSavedMarkers] = useState([]) // Track saved text markers
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState(null) // Track which marker is hovered
  const contentRef = useRef(null)
  const isUserScrollingRef = useRef(false)
  const isAutoScrollingRef = useRef(false)
  const toolbarRef = useRef(null)

  useEffect(() => {
    const loadEpisode = async () => {
      try {
        setLoading(true)
        const paddedNum = String(episodeNumber).padStart(3, '0')
        const response = await fetch(`${import.meta.env.BASE_URL}novels/episode-${paddedNum}.txt`)
        const text = await response.text()

        // Remove episode title (first line) and extra newlines
        const lines = text.split('\n')
        const contentWithoutTitle = lines.slice(1).join('\n').trim()

        setContent(contentWithoutTitle)
      } catch (error) {
        console.error('Failed to load episode:', error)
        setContent('에피소드를 불러오는데 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    loadEpisode()
  }, [episodeNumber])

  // Handle scroll events from user
  useEffect(() => {
    const element = contentRef.current
    if (!element) return

    const handleScroll = () => {
      // Ignore scroll events triggered by auto-scrolling (slider)
      if (isAutoScrollingRef.current) {
        isAutoScrollingRef.current = false
        return
      }

      isUserScrollingRef.current = true
      const { scrollTop, scrollHeight, clientHeight } = element
      const maxScroll = scrollHeight - clientHeight
      const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0



      if (onScrollChange) {
        onScrollChange(percentage)
      }

      // Report scroll position for UI auto-hide
      if (onScrollPositionChange) {
        onScrollPositionChange(scrollTop)
      }

      // Reset flag after a short delay
      setTimeout(() => {
        isUserScrollingRef.current = false
      }, 100)
    }

    // Use 'scroll' event which covers both wheel (desktop) and touch scroll (mobile)
    // Adding passive: true for better performance on mobile
    element.addEventListener('scroll', handleScroll, { passive: true })
    return () => element.removeEventListener('scroll', handleScroll)
  }, [onScrollChange, onScrollPositionChange, loading])

  // Handle scroll from slider
  useEffect(() => {
    const element = contentRef.current
    if (!element || isUserScrollingRef.current || scrollPercentage === undefined) return

    const { scrollHeight, clientHeight } = element
    const maxScroll = scrollHeight - clientHeight
    const targetScroll = (scrollPercentage / 100) * maxScroll

    isAutoScrollingRef.current = true
    element.scrollTo({
      top: targetScroll,
      behavior: 'auto' // Use auto for instant response during slider drag
    })
  }, [scrollPercentage])

  // Handle text selection
  useEffect(() => {
    // Detect if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const handleTextSelection = () => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()

      if (text && text.length > 0) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        const containerRect = contentRef.current?.getBoundingClientRect()

        if (containerRect) {
          // Position toolbar below the selected text
          // Estimate toolbar width (4 options + gaps + padding + cancel button)
          const TOOLBAR_WIDTH = 380
          const MARGIN = 16

          const centerX = rect.left + rect.width / 2 - containerRect.left
          const containerWidth = containerRect.width

          let left = centerX
          const halfToolbar = TOOLBAR_WIDTH / 2
          const minLeft = halfToolbar + MARGIN
          const maxLeft = containerWidth - halfToolbar - MARGIN

          // Clamp left position to keep toolbar within container
          if (containerWidth < TOOLBAR_WIDTH + 2 * MARGIN) {
            left = containerWidth / 2
          } else {
            left = Math.max(minLeft, Math.min(left, maxLeft))
          }

          setToolbarPosition({
            top: rect.bottom - containerRect.top + contentRef.current.scrollTop + 8, // 8px gap
            left: left
          })
          setSelectedText(text)
        }
      }
    }

    const handleMouseUp = () => {
      // Small delay to ensure selection is complete
      setTimeout(handleTextSelection, 10)
    }

    const handleTouchEnd = () => {
      // Small delay to ensure selection is complete
      setTimeout(handleTextSelection, 10)
    }

    // Apply event listeners based on device type
    if (isTouchDevice) {
      // Mobile/Touch devices - use touch events
      document.addEventListener('touchend', handleTouchEnd)
      return () => {
        document.removeEventListener('touchend', handleTouchEnd)
      }
    } else {
      // Desktop devices - use mouse events
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [])

  // Handle toolbar actions
  const handleTypeSelect = (type) => {
    setModalType(type)
    setShowCreatorModal(true)
    // Keep toolbar visible while modal is open
  }

  const handleCancelSelection = () => {
    setSelectedText('')
    setToolbarPosition(null)
    window.getSelection()?.removeAllRanges()
  }

  const handleCloseModal = () => {
    setShowCreatorModal(false)
    setModalType(null)
    handleCancelSelection()
  }

  const handleGenerateImage = (text) => {
    console.log('Generate image from text:', text)
    // TODO: Implement AI image generation
  }

  const handleSaveToLog = (text) => {
    // Clean text for better matching (trim whitespace)
    const cleanText = text.trim()

    // Check if we already have this marker
    const exists = savedMarkers.some(marker => marker.text === cleanText)

    if (!exists) {
      const newMarker = {
        id: Date.now(),
        text: cleanText
      }
      setSavedMarkers(prev => [...prev, newMarker])
      console.log('Saved marker:', newMarker)
    }
  }

  // ... (toolbar logic stays same) ...

  return (
    <div className="novel-content" ref={contentRef}>
      <div className={`novel-content__text ${showCreatorModal ? 'novel-content__text--no-select' : ''}`}>
        {content.split('\n').map((paragraph, paragraphIndex) => {
          // Empty lines for spacing
          if (paragraph.trim() === '') {
            return <br key={paragraphIndex} />
          }

          // Check if this paragraph contains any of the saved text markers
          // We check if the paragraph text includes the marker text or vice versa
          // to handle cases where users select part of a paragraph or multiple paragraphs
          const cleanParagraph = paragraph.trim()
          const matchedMarker = savedMarkers.find(marker => {
            const cleanMarker = marker.text
            return cleanParagraph.includes(cleanMarker) || cleanMarker.includes(cleanParagraph)
          })

          const hasMarker = !!matchedMarker
          const isHovered = matchedMarker && matchedMarker.id === hoveredMarkerIndex

          // Special formatting markers
          if (paragraph.includes('/[') || paragraph.includes('](볼드)/')) {
            return (
              <div key={paragraphIndex} className="novel-content__paragraph-wrapper">
                {hasMarker && (
                  <div
                    className="novel-content__marker"
                    onMouseEnter={() => setHoveredMarkerIndex(matchedMarker.id)}
                    onMouseLeave={() => setHoveredMarkerIndex(null)}
                  >
                    📌
                  </div>
                )}
                <p
                  className={`novel-content__special ${isHovered ? 'novel-content__highlighted' : ''}`}
                >
                  {paragraph.replace(/\/\[/g, '[').replace(/\]\(볼드\)\//g, ']')}
                </p>
              </div>
            )
          }

          if (paragraph.trim() === '***') {
            return (
              <div key={paragraphIndex} className="novel-content__separator">
                ***
              </div>
            )
          }

          // Regular paragraphs
          return (
            <div key={paragraphIndex} className="novel-content__paragraph-wrapper">
              {hasMarker && (
                <div
                  className="novel-content__marker"
                  onMouseEnter={() => setHoveredMarkerIndex(matchedMarker.id)}
                  onMouseLeave={() => setHoveredMarkerIndex(null)}
                />
              )}
              <p className={`novel-content__paragraph ${isHovered ? 'novel-content__highlighted' : ''}`}>
                {paragraph}
              </p>
            </div>
          )
        })}
      </div>

      {/* FloatingAction Toolbar */}
      {selectedText && toolbarPosition && (
        <ToolbarFloatingAction
          ref={toolbarRef}
          onTypeSelect={handleTypeSelect}
          onCancel={handleCancelSelection}
          position={toolbarPosition}
        />
      )}

      {/* CreatorModal */}
      {showCreatorModal && modalType === 'image' && (
        <CreatorModal
          type="image"
          scrappedText={selectedText}
          onClose={handleCloseModal}
          onGenerate={handleGenerateImage}
          onSaveToLog={handleSaveToLog}
        />
      )}
    </div>
  )
}

export default NovelContent
