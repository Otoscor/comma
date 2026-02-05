import { useEffect, useState } from 'react'
import './CreatorModal.css'
import loadingIcon from '../assets/icons/Icon_Loading.svg'
import sampleImage from '../assets/images/sample_image.jpg'

// Hugeicons
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const AIMagicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M10 7L9.48415 8.39405C8.80774 10.222 8.46953 11.136 7.80278 11.8028C7.13603 12.4695 6.22204 12.8077 4.39405 13.4842L3 14L4.39405 14.5158C6.22204 15.1923 7.13603 15.5305 7.80278 16.1972C8.46953 16.864 8.80774 17.778 9.48415 19.6059L10 21L10.5158 19.6059C11.1923 17.778 11.5305 16.864 12.1972 16.1972C12.864 15.5305 13.778 15.1923 15.6059 14.5158L17 14L15.6059 13.4842C13.778 12.8077 12.864 12.4695 12.1972 11.8028C11.5305 11.136 11.1923 10.222 10.5158 8.39405L10 7Z" />
        <path d="M18 3L17.7789 3.59745C17.489 4.38087 17.3441 4.77259 17.0583 5.05833C16.7726 5.34408 16.3809 5.48903 15.5975 5.77892L15 6L15.5975 6.22108C16.3809 6.51097 16.7726 6.65592 17.0583 6.94167C17.3441 7.22741 17.489 7.61913 17.7789 8.40255L18 9L18.2211 8.40255C18.511 7.61913 18.6559 7.22741 18.9417 6.94166C19.2274 6.65592 19.6191 6.51097 20.4025 6.22108L21 6L20.4025 5.77892C19.6191 5.48903 19.2274 5.34408 18.9417 5.05833C18.6559 4.77259 18.511 4.38087 18.2211 3.59745L18 3Z" />
    </svg>
)

function CreatorModal({ type, scrappedText, onClose, onGenerate }) {
    const [isLoading, setIsLoading] = useState(false)
    const [resultImage, setResultImage] = useState(null)

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleGenerateClick = () => {
        setIsLoading(true)

        // Simulate loading delay and then show sample image
        setTimeout(() => {
            setIsLoading(false)
            setResultImage(sampleImage)
            if (onGenerate) {
                onGenerate(scrappedText)
            }
        }, 2000) // 2 second loading simulation
    }

    const getModalTitle = () => {
        switch (type) {
            case 'image':
                return '이미지 만들기'
            case 'video':
                return '비디오 만들기'
            case 'audio':
                return '음성 만들기'
            case 'memo':
                return '메모 작성'
            default:
                return '만들기'
        }
    }

    return (
        <div className="creator-modal-overlay" onClick={handleOverlayClick}>
            <div className="creator-modal">
                {/* Grabber */}
                <div className="creator-modal__grabber"></div>

                {/* Header */}
                <div className="creator-modal__header">
                    <h2 className="creator-modal__title">{getModalTitle()}</h2>
                    <button
                        className="creator-modal__close"
                        onClick={onClose}
                        aria-label="닫기"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Content */}
                <div className="creator-modal__content">
                    {isLoading ? (
                        // Loading State
                        <div className="creator-modal__loading">
                            <img
                                src={loadingIcon}
                                alt="Loading"
                                className="creator-modal__loading-icon"
                            />
                            <p className="creator-modal__loading-text">이미지를 생성하는 중입니다...</p>
                        </div>
                    ) : resultImage ? (
                        // Result State
                        <div className="creator-modal__result">
                            <img
                                src={resultImage}
                                alt="Generated Result"
                                className="creator-modal__result-image"
                            />
                        </div>
                    ) : (
                        // Initial State
                        <div className="creator-modal__content-container">
                            <p className="creator-modal__description">
                                스크랩한 글을 바탕으로 이미지가 생성됩니다.
                            </p>

                            <div className="creator-modal__text-preview">
                                <p className="creator-modal__text-content">{scrappedText}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!resultImage && (
                    <div className="creator-modal__footer">
                        <button
                            className="creator-modal__generate-button"
                            onClick={handleGenerateClick}
                            disabled={isLoading}
                        >
                            <AIMagicIcon />
                            <span>{isLoading ? '생성 중...' : '만들기'}</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatorModal
