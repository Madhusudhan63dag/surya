import React from 'react'
import video from '../assets/website/website.mp4'
import { OptimizedBackgroundVideo } from '../utils/VideoOptimizer'
// Import a poster image (you'll need to create this)
import videoPoster from '../assets/website/website-poster.png' // Create this from a video frame

const Six = () => {
  return (
    <section 
      className="relative w-full min-h-screen" 
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '100vh' 
      }}
    >
      {/* Optimized background video with lazy loading */}
      <OptimizedBackgroundVideo 
        src={video}
        poster={videoPoster} // Add a poster image for instant loading
        className="w-full h-full"
        containerStyle={{ height: '100vh' }}
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 text-white p-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Website & Technology</h2>
          <p className="text-xl">
            Professional website development and technology solutions to enhance your digital presence.
          </p>
          {/* Add more content here */}
        </div>
      </div>
    </section>
  )
}

export default Six