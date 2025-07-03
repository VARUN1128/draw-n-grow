import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaLock, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../styles/VideoLesson.css';
import NotificationPopup from './NotificationPopup';

const VideoLesson = ({ lesson, onComplete, isLocked }) => {
  const [uploadedDrawing, setUploadedDrawing] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const fileInputRef = useRef(null);
  const iframeRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const navigate = useNavigate();

  // Prevent right click and touch events
  useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const preventAllMouseEvents = (e) => {
      if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventTouchEvents = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add protection to the iframe content
    const setupIframeProtection = () => {
      if (iframeRef.current) {
        try {
          const iframeWindow = iframeRef.current.contentWindow;
          iframeWindow.document.addEventListener('contextmenu', preventRightClick, true);
          iframeWindow.document.addEventListener('mousedown', preventAllMouseEvents, true);
          iframeWindow.document.addEventListener('mouseup', preventAllMouseEvents, true);
          iframeWindow.document.addEventListener('touchstart', preventTouchEvents, true);
          iframeWindow.document.addEventListener('touchmove', preventTouchEvents, true);
          iframeWindow.document.addEventListener('touchend', preventTouchEvents, true);
        } catch (e) {
          console.log('iframe cross-origin protection active');
        }
      }
    };

    const elements = [videoContainerRef.current, videoWrapperRef.current];
    const events = [
      'contextmenu',
      'mousedown',
      'mouseup',
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart',
      'gesturechange',
      'gestureend'
    ];

    elements.forEach(element => {
      if (element) {
        events.forEach(event => {
          element.addEventListener(event, 
            event.includes('touch') || event.includes('gesture') 
              ? preventTouchEvents 
              : preventAllMouseEvents, 
            { passive: false }
          );
        });
      }
    });

    // Setup iframe protection after a short delay
    const timer = setTimeout(setupIframeProtection, 1000);
    const interval = setInterval(setupIframeProtection, 2000);

    // Handle video play/pause with touch
    const handleVideoTouch = (e) => {
      if (e.target.classList.contains('video-overlay')) {
        e.preventDefault();
        const iframe = iframeRef.current;
        if (iframe) {
          try {
            iframe.style.pointerEvents = 'auto';
            setTimeout(() => {
              iframe.style.pointerEvents = 'none';
            }, 100);
            setIsVideoPlaying(!isVideoPlaying);
          } catch (error) {
            console.log('Video interaction error:', error);
          }
        }
      }
    };

    document.addEventListener('touchstart', handleVideoTouch, { passive: false });

    return () => {
      clearTimeout(timer);
      clearInterval(interval);

      elements.forEach(element => {
        if (element) {
          events.forEach(event => {
            element.removeEventListener(event, 
              event.includes('touch') || event.includes('gesture') 
                ? preventTouchEvents 
                : preventAllMouseEvents
            );
          });
        }
      });

      document.removeEventListener('touchstart', handleVideoTouch);
    };
  }, [isVideoPlaying]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange' && data.info === 0) {
            toast.success('You can upload your drawing at any time!');
          }
        } catch (e) {
          // Ignore non-JSON messages
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const getEmbedUrl = (videoUrl) => {
    if (!videoUrl) {
      setVideoError(true);
      return null;
    }

    try {
      let videoId;
      
      // Handle youtube.com URLs
      if (videoUrl.includes('youtube.com/watch?v=')) {
        videoId = videoUrl.split('watch?v=')[1];
        if (videoId.includes('&')) {
          videoId = videoId.split('&')[0];
        }
      }
      // Handle youtu.be URLs
      else if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1];
        if (videoId.includes('?')) {
          videoId = videoId.split('?')[0];
        }
      }

      if (!videoId) {
        console.error('Invalid YouTube URL format');
        setVideoError(true);
        return null;
      }

      // Return secure embed URL with restricted features
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&disablekb=1&fs=1&origin=${window.location.origin}`;
    } catch (error) {
      console.error('Error processing video URL:', error);
      setVideoError(true);
      return null;
    }
  };

  useEffect(() => {
    if (lesson?.videoUrl) {
      console.log('Video URL:', lesson.videoUrl);
    }
  }, [lesson]);

  // Return early if no lesson is provided
  if (!lesson) {
    return (
      <div className="video-lesson">
        <p>Loading lesson...</p>
      </div>
    );
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    setUploadedDrawing(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!uploadedDrawing) {
      toast.error('Please upload your drawing');
      return;
    }

    // Call the onComplete callback to unlock the next lesson
    onComplete(lesson.id);
    
    // Show success message
    toast.success('Great job! Moving to the next lesson.');
    
    // Reset the form
    setUploadedDrawing(null);
    setPreviewUrl('');
    fileInputRef.current.value = '';
  };

  const embedUrl = getEmbedUrl(lesson.videoUrl);

  const handleVideoInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const height = rect.height;
    
    // Allow interactions in the middle section of the video (for seeking)
    if (y > 50 && y < height - 50) {
      setIsSeeking(true);
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.style.pointerEvents = 'auto';
      }
    }
  };

  const handleVideoInteractionEnd = () => {
    setIsSeeking(false);
    const iframe = iframeRef.current;
    if (iframe) {
      setTimeout(() => {
        iframe.style.pointerEvents = 'none';
      }, 100);
    }
  };

  const handleWrapperClick = (e) => {
    if (isLocked) {
      setShowNotification(true);
      return;
    }

    const rect = videoWrapperRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    
    if (y > 50) {
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <>
      <div className="video-lesson">
        <h2>{lesson.title}</h2>
        
        <div 
          ref={videoContainerRef}
          className="video-container"
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        >
          {videoError ? (
            <div className="video-error">
              Sorry, this video is currently unavailable. Please try again later.
            </div>
          ) : (
            <div 
              ref={videoWrapperRef}
              className="video-wrapper"
              onClick={handleWrapperClick}
            >
              <div className="video-shield top"></div>
              <iframe
                ref={iframeRef}
                src={embedUrl}
                title={lesson.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
              <div 
                className={`video-overlay ${isVideoPlaying ? 'playing' : ''} ${isSeeking ? 'seeking' : ''}`}
                onMouseDown={handleVideoInteraction}
                onMouseUp={handleVideoInteractionEnd}
                onMouseLeave={handleVideoInteractionEnd}
                onTouchStart={handleVideoInteraction}
                onTouchEnd={handleVideoInteractionEnd}
              />
              <div className={`play-indicator ${isSeeking ? 'hidden' : ''}`}>
                <div className="play-icon"></div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          <div className="upload-section">
            <h3>Upload Your Drawing</h3>
            <p>Upload your drawing to unlock the next lesson.</p>
            
            <div className="file-input-wrapper">
              <input
                type="file"
                id="drawing-upload"
                accept="image/*"
                onChange={handleFileUpload}
                ref={fileInputRef}
                className="file-input"
              />
            </div>

            {previewUrl && (
              <div className="preview">
                <img src={previewUrl} alt="Drawing preview" />
              </div>
            )}
          </div>
          <button 
            type="submit" 
            className={`submit-button ${!uploadedDrawing ? 'disabled' : ''}`}
            disabled={!uploadedDrawing}
          >
            Submit Drawing
          </button>
          {!uploadedDrawing && (
            <div className="warning">
              Please upload your drawing to proceed
            </div>
          )}
        </form>
      </div>
      <NotificationPopup 
        show={showNotification} 
        onClose={() => setShowNotification(false)}
        message="This module is locked. Please complete the previous modules first."
      />
    </>
  );
};

// Add default props
VideoLesson.defaultProps = {
  lesson: null,
  onComplete: () => {},
  isLocked: false,
};

export default VideoLesson; 