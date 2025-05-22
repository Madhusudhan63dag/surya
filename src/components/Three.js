import React, { useState, useRef, useEffect } from 'react'
// Import poster images for videos
import mainPoster from '../assets/video/main-poster.jpg'
import video1Poster from '../assets/video/video1-poster.jpeg'
import video2Poster from '../assets/video/video2-poster.jpeg'
import video3Poster from '../assets/video/video3-poster.jpeg'
import video4Poster from '../assets/video/video4-poster.jpeg'
import video5Poster from '../assets/video/video5-poster.jpeg'
import video6Poster from '../assets/video/video6-poster.jpeg'
import video7Poster from '../assets/video/video7-poster.jpeg'
import video8Poster from '../assets/video/video8-poster.jpeg'
import video9Poster from '../assets/video/video9-poster.jpeg'
import { useDebugVideoContext } from '../context/VideoLoadingContext'

// We keep the imports but won't actively load them
// main, video1-9 imports kept for reference but not used

const Three = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const observerRef = useRef(null);
  const containerRef = useRef(null);
  
  // Debug the video context to ensure it's working
  const videoContext = useDebugVideoContext();
  
  // Video data array with posters only (no video src)
  const videos = [
    { poster: video1Poster, title: "Video 1" },
    { poster: video2Poster, title: "Video 2" },
    { poster: video3Poster, title: "Video 3" },
    { poster: video4Poster, title: "Video 4" },
    { poster: video5Poster, title: "Video 5" },
    { poster: video6Poster, title: "Video 6" },
    { poster: video7Poster, title: "Video 7" },
    { poster: video8Poster, title: "Video 8" },
    { poster: video9Poster, title: "Video 9" },
  ];
  
  // Create a perfect loop by duplicating the video array
  const allVideos = [...videos, ...videos, ...videos];
  
  // Setup lazy loading and viewport tracking for carousel
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up IntersectionObserver for the container
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        // When slider comes into view, start animation if it was running
        if (isVisible && !isPaused && sliderRef.current) {
          sliderRef.current.style.animationPlayState = 'running';
        }
      },
      { threshold: 0.1 }
    );
    
    observerRef.current.observe(containerRef.current);
    
    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
    };
  }, [isPaused]);

  // Pause/play the animation
  useEffect(() => {
    if (!sliderRef.current) return;
    
    if (isPaused) {
      sliderRef.current.style.animationPlayState = 'paused';
    } else {
      sliderRef.current.style.animationPlayState = 'running';
    }
  }, [isPaused]);
  
  // Calculate animation duration based on number of videos
  const animationDuration = videos.length * 20; // 20 seconds per video

  return (
    <div id="video-production" className="h-full">
      <div className='flex flex-col h-full'>
        {/* heading - responsive layout */}
        <div>
          <div className='flex flex-col-reverse md:flex-row w-screen min-h-[60vh] md:h-[80vh] p-4 md:p-10'>
            {/* Text content - full width on mobile, half on desktop */}
            <div className='w-full md:w-1/2 mt-6 md:mt-0'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b0b0b0] leading-tight'>
                End-to-End Video Production That Tells Your Brand Story
              </h1>
              <p className='text-[#f26522] text-lg md:text-xl mt-3 w-[90%]'>
                From TV commercials to TikToks, we create high-impact videos that engage, convert, and elevate your brand across every platform
              </p>
            </div>
            
            {/* Main poster image */}
            <div className='w-full md:w-1/2 relative h-[40vh] md:h-full'>
              <div className='absolute bg-[#ffffff7d] top-0 left-0 w-full h-full' style={{zIndex: 1}}></div>
              <img
                src={mainPoster}
                alt="Video Production"
                className="w-full h-full object-cover rounded-lg"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Image Slides (formerly Video Slides) */}
        <div className="py-4 md:py-8 flex-grow" ref={containerRef}>
          <div className="container mx-auto px-2 md:px-4 h-full">
            {/* Custom Slider */}
            <div className="relative overflow-hidden h-full">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-100% / 3));
                  }
                }
              `}</style>
              
              {/* Continuously scrolling container */}
              <div 
                ref={sliderRef}
                className="flex h-full"
                style={{ 
                  animation: `scroll ${animationDuration}s linear infinite`,
                  width: 'max-content'
                }}
              >
                {allVideos.map((item, index) => (
                  <div 
                    key={index}
                    className="m-1 sm:m-2 md:m-3 lg:m-4 flex items-center"
                  >
                    <div className="relative bg-gray-800 overflow-hidden h-[250px] sm:h-[320px] md:h-[420px] lg:h-[550px]" 
                         style={{ 
                           aspectRatio: '12/16',
                           margin: 0,
                           padding: 0,
                           borderRadius: 0
                         }}>
                      {/* Replaced video with image */}
                      <img
                        src={item.poster}
                        alt={item.title || "Video thumbnail"}
                        className="w-full h-full object-cover"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        loading="lazy" // Add lazy loading for images
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Three