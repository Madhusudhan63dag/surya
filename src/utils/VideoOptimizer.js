import React, { useEffect, useRef, useState } from 'react';
import { useVideoLoading } from '../context/VideoLoadingContext';

/**
 * Custom hook for optimized video background loading and playback
 * 
 * @param {Object} options Configuration options
 * @param {string} options.src Video source URL
 * @param {string} options.poster Poster image URL (placeholder)
 * @param {boolean} options.autoplay Should video autoplay when visible
 * @param {boolean} options.loop Should video loop playback
 * @param {boolean} options.muted Should video be muted
 * @param {string} options.preload Preload strategy ('none', 'metadata', 'auto')
 * @returns {Object} Video ref and state information
 */
export const useOptimizedVideo = ({ 
  src, 
  poster, 
  autoplay = true, 
  loop = true, 
  muted = true, 
  preload = 'none',
  isPriority = false // Flag to identify the first video to load
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);
  const { firstVideoLoaded, setFirstVideoLoaded } = useVideoLoading();

  useEffect(() => {
    // If this is not the priority video and the first video hasn't loaded yet,
    // don't set up intersection observer or start loading
    if (!isPriority && !firstVideoLoaded) {
      return; // Skip loading until first video is ready
    }

    // Create intersection observer to detect when video enters viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Video entered viewport - load and play if needed
          if (!video.src && src) {
            video.src = src;
            video.load();
          }
          
          if (autoplay && video.paused) {
            // Use play promise to handle autoplay restrictions
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(error => {
                console.log('Autoplay prevented:', error);
              });
            }
          }
        } else {
          // Video left viewport - pause to save resources
          if (video.src && !video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
    );

    // Start observing the video element
    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      // Cleanup observer on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, autoplay, isPriority, firstVideoLoaded]);

  // Handle video load event
  const handleLoadedData = () => {
    setIsLoaded(true);
    
    // If this is the priority video (One.js), notify the system it's loaded
    if (isPriority) {
      setFirstVideoLoaded(true);
      console.log('Priority video loaded, other videos can now start loading');
    }
  };

  return {
    videoRef,
    isVisible,
    isLoaded,
    videoProps: {
      ref: videoRef,
      poster,
      muted,
      loop,
      playsInline: true,
      preload: isPriority ? 'auto' : preload, // Priority video gets preload='auto'
      onLoadedData: handleLoadedData,
      className: `video-background ${!isLoaded ? 'opacity-0' : 'opacity-100'}`,
      // Use content-visibility for rendering optimization
      style: {
        objectFit: 'cover',
        transition: 'opacity 0.3s ease'
      }
    }
  };
};

/**
 * Component for optimized background video
 */
export const OptimizedBackgroundVideo = ({ 
  src, 
  poster, 
  className = '',
  containerStyle = {},
  videoStyle = {},
  autoplay = true,
  loop = true,
  muted = true,
  isPriority = false, // Added priority prop
  onLoadedData, // Added onLoadedData prop
}) => {
  const { videoRef, isLoaded, videoProps } = useOptimizedVideo({
    src,
    poster,
    autoplay,
    loop,
    muted,
    isPriority
  });

  return (
    <div 
      className={`video-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...containerStyle
      }}
    >
      {/* Show poster image until video loads */}
      {poster && !isLoaded && (
        <img 
          src={poster} 
          alt="Video thumbnail" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }} 
        />
      )}
      
      <video
        {...videoProps}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          ...videoStyle,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
        onLoadedData={onLoadedData} // Attach onLoadedData handler
      />
    </div>
  );
};

/**
 * Helper to optimize multiple videos on a page
 * @param {string[]} videoSrcs Array of video source URLs
 * @returns {Promise} Preconnect link tags to add to document head
 */
export const generateVideoPreconnects = (videoSrcs) => {
  // Extract domains from video sources for preconnection
  const domains = new Set();
  videoSrcs.forEach(src => {
    try {
      const url = new URL(src);
      domains.add(url.origin);
    } catch (e) {
      // Handle relative URLs or invalid URLs
      console.warn('Could not parse URL for preconnect:', src);
    }
  });

  // Generate preconnect tags
  return Array.from(domains).map(domain => (
    `<link rel="preconnect" href="${domain}" crossorigin>`
  )).join('\n');
};
