import React, { useState, useEffect, useRef } from 'react'
import one from '../assets/ugc/one.mp4'
import two from '../assets/ugc/two.jpeg'
import three from '../assets/ugc/three.mp4'
import four from '../assets/ugc/four.mp4'
import five from '../assets/ugc/five.webp'
import six from '../assets/ugc/six.mp4'

const Two = () => {  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoSlideTimerRef = useRef(null);
  
  // Media items array to map through for mobile slider
  const mediaItems = [
    { type: 'video', src: one, key: 'one' },
    // { type: 'image', src: two, key: 'two' },
    { type: 'video', src: three, key: 'three' },
    { type: 'video', src: four, key: 'four' },
    // { type: 'image', src: five, key: 'five' },
    { type: 'video', src: six, key: 'six' }
  ];

  // Check window size on component mount and resize
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);
    // Auto slide functionality for mobile
  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing timer
    autoSlideTimerRef.current = setTimeout(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };
  
  const stopAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearTimeout(autoSlideTimerRef.current);
    }
  };
  
  useEffect(() => {
    if (isMobile) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    
    return () => stopAutoSlide();
  }, [isMobile, currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    stopAutoSlide();
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
    startAutoSlide();
  };

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };
  // Render media item based on type
  const renderMediaItem = (item, fullWidth = false) => {
    if (item.type === 'video') {
      return (
        <video 
          className={`object-cover rounded-xl shadow-md ${fullWidth ? 'w-full h-[60vh]' : ''}`} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={item.src} type='video/mp4' />
          Your browser does not support video playback.
        </video>
      );
    } else {
      return (
        <img 
          src={item.src} 
          alt={`UGC content ${item.key}`} 
          className={`rounded-xl shadow-md ${fullWidth ? 'w-full h-[60vh] object-cover' : ''}`}
        />
      );
    }
  };

  return (
    <div className='mt-10 flex flex-col '>      {/* Mobile View with Slider */}
      {isMobile ? (
        <div className='relative h-[60vh] px-4'>
          <div 
            className='h-full w-full overflow-hidden'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className='h-full transition-transform duration-300 ease-in-out flex'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mediaItems.map((item, index) => (
                <div 
                  key={item.key} 
                  className='min-w-full h-full flex-shrink-0'
                >
                  {renderMediaItem(item, true)}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => {
              prevSlide();
              stopAutoSlide();
              startAutoSlide();
            }}
            className='absolute top-1/2 left-6 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2 z-10 backdrop-blur-sm transition-all'
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => {
              nextSlide();
              stopAutoSlide();
              startAutoSlide();
            }}
            className='absolute top-1/2 right-6 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2 z-10 backdrop-blur-sm transition-all'
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots navigation */}
          <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
            {mediaItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  stopAutoSlide();
                  startAutoSlide();
                }}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (        /* Desktop View - Original Layout */
        <div className='h-[90vh] flex flex-nowrap gap-3 lg:gap-6 xl:gap-10 overflow-x-hidden'>
          <div className='pl-4 md:pl-6 lg:pl-10'>
            <div className='h-full w-[22vw] lg:w-[25vw]'>
              <video className='w-full h-full object-cover rounded-xl' autoPlay loop muted playsInline>
                <source src={one} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
          <div className='flex h-full flex-col items-start gap-6 lg:gap-10'>
            <div className='h-1/2 flex flex-col justify-start items-start'>
              <img src={two} alt="UGC content preview" className='w-[14vw] object-cover rounded-lg' />
            </div>
            <div className='h-1/2 flex flex-col justify-end'>
              <video className='w-[32vw] md:w-[36vw] lg:w-[40vw] h-[35vh] lg:h-[40vh] object-cover ml-6 md:ml-10 lg:ml-16 rounded-lg' autoPlay loop muted playsInline>
                <source src={three} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
          <div className='flex flex-col items-start gap-6 lg:gap-10'>
            <div>
              <video className='w-[18vw] md:w-[20vw] h-[28vh] md:h-[30vh] object-cover relative rounded-lg' autoPlay loop muted playsInline>
                <source src={four} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
            <div className='flex flex-col justify-start items-start ml-6 md:ml-10'>
              <img src={five} alt="UGC portfolio item" className='h-full object-cover rounded-lg' />
            </div>
          </div>
          <div className='pr-4 md:pr-6 lg:pr-10'>
            <div className='h-full w-[18vw] lg:w-[20vw]'>
              <video className='w-full h-full object-cover rounded-xl' autoPlay loop muted playsInline>
                <source src={six} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}
        {/* Text content - Responsive for both mobile and desktop */}
      <div className='min-h-[30vh] px-4 md:px-10 mt-6 md:mt-10 max-w-7xl mx-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6'>Everything You Need to Know About UGC – Simplified.</h1>
        <h3 className='text-md md:text-lg w-full md:w-[85%] lg:w-[70%] leading-relaxed'>
          At Surya Media, we offer complete end-to-end UGC solutions designed to boost your brand's authenticity and performance. From sourcing creators and writing engaging scripts to producing high-quality content like product reviews, unboxing videos, testimonials, lifestyle photography, and voiceover-style ads — we handle it all. We also take care of editing and optimizing content for social platforms like Reels, TikTok, and YouTube Shorts, while managing usage rights, influencer whitelisting, and A/B testing for maximum ROI. Whether you need a full campaign strategy, help with community engagement, or simply want scroll-stopping content that converts, we've got you covered.
        </h3>
      </div>
    </div>
  );
}

export default Two;
