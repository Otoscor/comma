import React from 'react'
import './ToolbarFloatingAction.css'

// Hugeicons SVG components
const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8.5" cy="8.5" r="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.5 14.5L16.0424 10.4041C14.7119 9.36472 12.7617 9.42359 11.5042 10.5424L3.5 17.5" strokeLinecap="round" />
  </svg>
)

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" strokeLinecap="round" />
    <path d="M10.5 9.5L15.5 12L10.5 14.5V9.5Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const AudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z" strokeLinecap="round" />
    <path d="M9 16L9 10M12 16L12 6M15 16V13" strokeLinecap="round" />
  </svg>
)

const MemoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 20H17" strokeLinecap="round" />
  </svg>
)

const CancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ToolbarFloatingAction = React.forwardRef(({ onTypeSelect, onCancel, position }, ref) => {
  const toolbarOptions = [
    { type: 'image', icon: <ImageIcon />, label: '이미지', disabled: false },
    { type: 'video', icon: <VideoIcon />, label: '비디오', disabled: true },
    { type: 'audio', icon: <AudioIcon />, label: '음성', disabled: true },
    { type: 'memo', icon: <MemoIcon />, label: '메모', disabled: true }
  ]

  const handleOptionClick = (type, disabled) => {
    if (!disabled && onTypeSelect) {
      onTypeSelect(type)
    }
  }

  return (
    <div
      ref={ref}
      className="toolbar-floating-action"
      style={{
        top: position?.top ? `${position.top}px` : '0',
        left: position?.left ? `${position.left}px` : '0'
      }}
    >
      <div className="toolbar-floating-action__options">
        {toolbarOptions.map((option) => (
          <button
            key={option.type}
            className="toolbar-floating-action__option"
            onClick={() => handleOptionClick(option.type, option.disabled)}
            disabled={option.disabled}
          >
            <span className="toolbar-floating-action__icon">{option.icon}</span>
            <span className="toolbar-floating-action__label">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="toolbar-floating-action__divider"></div>

      <button
        className="toolbar-floating-action__cancel"
        onClick={onCancel}
        aria-label="취소"
      >
        <CancelIcon />
      </button>
    </div>
  )
})

export default ToolbarFloatingAction
