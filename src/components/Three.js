// import React, { useState, useRef, useEffect } from 'react'
// import main from '../assets/video/main.mp4'
// import video1 from '../assets/video/video1.mp4'
// import video2 from '../assets/video/video2.mp4'
// import video3 from '../assets/video/video3.mp4'
// import video4 from '../assets/video/video4.mp4'
// import video5 from '../assets/video/video5.mp4'
// import video6 from '../assets/video/video6.mp4'
// import video7 from '../assets/video/video7.mp4'
// import video8 from '../assets/video/video8.mp4'
// import video9 from '../assets/video/video9.mp4'

// const Three = () => {
//   const sliderRef = useRef(null);
//   const videoRefs = useRef([]);
//   const [isPaused, setIsPaused] = useState(false);
  
//   // Video data array
//   const videos = [
//     { src: video1, title: "Video 1" },
//     { src: video2, title: "Video 2" },
//     { src: video3, title: "Video 3" },
//     { src: video4, title: "Video 4" },
//     { src: video5, title: "Video 5" },
//     { src: video6, title: "Video 6" },
//     { src: video7, title: "Video 7" },
//     { src: video8, title: "Video 8" },
//     { src: video9, title: "Video 9" },
//     { src: video1, title: "Video 1" },
//     { src: video2, title: "Video 2" },
//     { src: video3, title: "Video 3" },
//     { src: video4, title: "Video 4" },
//     { src: video5, title: "Video 5" },
//     { src: video6, title: "Video 6" },
//     { src: video7, title: "Video 7" },
//     { src: video8, title: "Video 8" },
//     { src: video9, title: "Video 9" },
//   ];
  
//   // Clone the first few items to create a seamless loop effect
//   const allVideos = [...videos, ...videos.slice(0, 3)];
  
//   // Ensure all videos are playing
//   useEffect(() => {
//     videoRefs.current.forEach(video => {
//       if (video) {
//         video.play().catch(err => console.log("Video autoplay failed:", err));
//       }
//     });
//   }, []);

//   // Pause/play the animation
//   useEffect(() => {
//     if (!sliderRef.current) return;
    
//     if (isPaused) {
//       sliderRef.current.style.animationPlayState = 'paused';
//     } else {
//       sliderRef.current.style.animationPlayState = 'running';
//     }
//   }, [isPaused]);
  
//   // Calculate animation duration based on number of slides
//   // Increased from 10 to 20 seconds per slide to slow down the animation
//   const animationDuration = allVideos.length * 10; 

//   return (
//     <div className="h-full">
//       <div className='flex flex-col h-full'>
//         {/* heading - responsive layout */}
//         <div>
//           <div className='flex flex-col-reverse md:flex-row w-screen min-h-[60vh] md:h-[80vh] p-4 md:p-10'>
//             {/* Text content - full width on mobile, half on desktop */}
//             <div className='w-full md:w-1/2 mt-6 md:mt-0'>
//               <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b0b0b0] leading-tight'>
//                 End-to-End Video Production That Tells Your Brand Story
//               </h1>
//               <p className='text-[#f26522] text-lg md:text-xl mt-3'>
//                 From TV commercials to TikToks, we create high-impact videos that engage, convert, and elevate your brand across every platform
//               </p>
//             </div>
            
//             {/* Video - full width on mobile, half on desktop */}
//             <div className='w-full md:w-1/2 relative h-[40vh] md:h-full'>
//               <div className='absolute bg-[#ffffff7d] top-0 left-0 w-full h-full'></div> 
//               <video className='w-full h-full object-cover' autoPlay loop muted playsInline>
//                 <source src={main} type='video/mp4' />
//                 Your browser does not support video playback.
//               </video>
//             </div>
//           </div>
//         </div>
        
//         {/* Video Slides */}
//         <div className="py-4 md:py-8 flex-grow">
//           <div className="container mx-auto px-2 md:px-4 h-full">
//             {/* Custom Slider */}
//             <div className="relative overflow-hidden h-full">
//               <style jsx>{`
//                 @keyframes scroll {
//                   0% {
//                     transform: translateX(0);
//                   }
//                   100% {
//                     transform: translateX(calc(-100% * ${videos.length / 3}));
//                   }
//                 }
                
//                 @media (min-width: 640px) {
//                   @keyframes scroll {
//                     0% {
//                       transform: translateX(0);
//                     }
//                     100% {
//                       transform: translateX(calc(-100% * ${videos.length / 4}));
//                     }
//                   }
//                 }
                
//                 @media (min-width: 768px) {
//                   @keyframes scroll {
//                     0% {
//                       transform: translateX(0);
//                     }
//                     100% {
//                       transform: translateX(calc(-30% * ${videos.length}));
//                     }
//                   }
//                 }
//               `}</style>
              
//               {/* Continuously scrolling container */}
//               <div 
//                 ref={sliderRef}
//                 className="flex h-full"
//                 style={{ 
//                   animation: `scroll ${animationDuration}s linear infinite`,
//                   width: `calc(300% * ${Math.ceil(allVideos.length / 3)})`
//                 }}
//               >
//                 {allVideos.map((video, index) => (
//                   <div 
//                     key={index}
//                     className="m-1 sm:m-2 md:m-3 lg:m-4 flex items-center"
//                   >
//                     <div className="relative bg-gray-800 overflow-hidden h-[250px] sm:h-[320px] md:h-[420px] lg:h-[550px]" 
//                          style={{ 
//                            aspectRatio: '12/16',
//                            margin: 0,
//                            padding: 0,
//                            borderRadius: 0
//                          }}>
//                       <video 
//                         ref={el => {
//                           videoRefs.current[index] = el;
//                         }}
//                         className="w-full h-full object-cover"
//                         muted 
//                         loop
//                         playsInline
//                         autoPlay
//                       >
//                         <source src={video.src} type="video/mp4" />
//                         Your browser does not support video playback.
//                       </video>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Three

import React, { useState, useRef, useEffect } from 'react'
import main from '../assets/video/main.mp4'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video3.mp4'
import video4 from '../assets/video/video4.mp4'
import video5 from '../assets/video/video5.mp4'
import video6 from '../assets/video/video6.mp4'
import video7 from '../assets/video/video7.mp4'
import video8 from '../assets/video/video8.mp4'
import video9 from '../assets/video/video9.mp4'

const Three = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  
  // Video data array
  const videos = [
    { src: video1, title: "Video 1" },
    { src: video2, title: "Video 2" },
    { src: video3, title: "Video 3" },
    { src: video4, title: "Video 4" },
    { src: video5, title: "Video 5" },
    { src: video6, title: "Video 6" },
    { src: video7, title: "Video 7" },
    { src: video8, title: "Video 8" },
    { src: video9, title: "Video 9" },
  ];
  
  // Create a perfect loop by duplicating the video array
  // We need at least double the original length to ensure seamless looping
  const allVideos = [...videos, ...videos, ...videos];
  
  // Ensure all videos are playing
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(err => console.log("Video autoplay failed:", err));
      }
    });
  }, []);

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
  // This determines how long it takes to complete one full cycle
  const animationDuration = videos.length * 20; // 10 seconds per video

  return (
    <div className="h-full">
      <div className='flex flex-col h-full'>
        {/* heading - responsive layout */}
        <div>
          <div className='flex flex-col-reverse md:flex-row w-screen min-h-[60vh] md:h-[80vh] p-4 md:p-10'>
            {/* Text content - full width on mobile, half on desktop */}
            <div className='w-full md:w-1/2 mt-6 md:mt-0'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b0b0b0] leading-tight'>
                End-to-End Video Production That Tells Your Brand Story
              </h1>
              <p className='text-[#f26522] text-lg md:text-xl mt-3'>
                From TV commercials to TikToks, we create high-impact videos that engage, convert, and elevate your brand across every platform
              </p>
            </div>
            
            {/* Video - full width on mobile, half on desktop */}
            <div className='w-full md:w-1/2 relative h-[40vh] md:h-full'>
              <div className='absolute bg-[#ffffff7d] top-0 left-0 w-full h-full'></div> 
              <video className='w-full h-full object-cover' autoPlay loop muted playsInline>
                <source src={main} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
        
        {/* Video Slides - MODIFIED SECTION */}
        <div className="py-4 md:py-8 flex-grow">
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
                  width: 'max-content' // Ensures the container fits all items
                }}
              >
                {allVideos.map((video, index) => (
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
                      <video 
                        ref={el => {
                          videoRefs.current[index] = el;
                        }}
                        className="w-full h-full object-cover"
                        muted 
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
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