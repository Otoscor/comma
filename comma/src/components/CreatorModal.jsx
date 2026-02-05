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

const LogSaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7H16M8 12H16M8 17L12 17" />
        <path d="M20.5 14V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V14C3.5 17.7712 3.5 19.6569 4.67157 20.8284C5.84315 22 7.72876 22 11.5 22H12.5C16.2712 22 18.1569 22 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14Z" />
    </svg>
)

const RetryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.1353 2.96495C6.77202 3.65593 2.05389 9.38799 2.50369 15.6322C2.95349 21.8763 8.35639 26.1136 14.2882 24.5902C17.7925 23.6897 20.7263 21.3792 22.3168 18.2079" />
        <path d="M10.8647 21.0351C17.228 20.3441 21.9461 14.612 21.4963 8.36785C21.0465 2.12368 15.6436 -2.11357 9.71183 -0.590215C6.20755 0.310344 3.27375 2.62083 1.68323 5.79207" />
        <path d="M13.1353 2.96497L10.8647 2.96497" />
        <path d="M10.8647 21.035L13.1353 21.035" />
    </svg>
)

// Simplified Retry Icon for better visual match
const RetrySimpleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.9381 13C19.979 12.6724 20 12.3387 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1973 20 16.1901 19.1147 17.6569 17.6569" />
        <path d="M20 4V8H16" />
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
                {!resultImage ? (
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
                ) : (
                    <div className="creator-modal__footer creator-modal__footer--result">
                        <button
                            className="creator-modal__action-button"
                            onClick={() => console.log('Save to log')}
                        >
                            <LogSaveIcon />
                            <span>로그에 남기기</span>
                        </button>
                        <button
                            className="creator-modal__action-button"
                            onClick={handleGenerateClick}
                        >
                            <RetrySimpleIcon />
                            <span>다시 만들기</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatorModal
