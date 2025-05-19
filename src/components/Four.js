import React from 'react'
import photo1 from '../assets/photography/photo1.jpg'
import photo2 from '../assets/photography/photo2.webp'
import photo3 from '../assets/photography/photo3.jpeg'
import photo4 from '../assets/photography/photo4.png'
import photo5 from '../assets/photography/photo5.jpg'


// const Four = () => {
//   return (
//     <div className="relative min-h-screen bg-white">
//       <div className="absolute top-0 left-0 w-full h-full bg-[#f26522]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)"}}></div>
//       <div className="relative z-10 container mx-auto px-4 py-12">
//         <div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Four

import { useState } from 'react'

const Four = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Diagonal background with orange color */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[#f26522]" 
          style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)" }}>
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-12 gap-6">
          {/* Left side: Food image (top) and Kathakali mask (bottom) */}
          <div className="col-span-12 md:col-span-5 flex flex-col space-y-8">
            {/* Avocado toast varieties */}
            <div className="w-full">
              <img 
                src={photo1} 
                alt="Avocado toast varieties" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            
            {/* Traditional art/mask - positioned lower on mobile, and at the bottom in desktop */}
            <div className="w-full mt-8 md:mt-auto">
              <img 
                src={photo2} 
                alt="Traditional Kathakali mask" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
          
          {/* Right side: Title, product photography, subheading, and two more images */}
          <div className="col-span-12 md:col-span-7 flex flex-col">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-blue-900">Branded Photography That</span>
              <br />
              <span className="text-blue-900">Captures, Connects & Converts</span>
            </h1>
            
            {/* Product photography session */}
            <div className="mb-8">
              <img 
                src={photo3}
                alt="Product photography session"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
      
            {/* Bottom images section */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Cultural/wedding photography */}
              <div>
                <img 
                  src={photo4}
                  alt="Cultural photography" 
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
              
              {/* Beauty product showcase */}
              <div>
                <img 
                  src={photo5} 
                  alt="Beauty product showcase" 
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
            
            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mt-auto">
              Strategic Visuals Built to Elevate
              <br />Your Brand Presence
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Four
