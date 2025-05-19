import React from 'react'
import one from '../assets/digital marketing/one.svg'
import two from '../assets/digital marketing/two.svg'
import three from '../assets/digital marketing/three.svg'
import four from '../assets/digital marketing/four.svg'
import five from '../assets/digital marketing/five.svg'
import six from '../assets/digital marketing/six.svg'
import seven from '../assets/digital marketing/seven.svg'
import eight from '../assets/digital marketing/eight.svg'

const Five = () => {

  const marketingServices = [
    { 
      title: "Digital PR", 
      bgColor: "rgba(194, 249, 112, 0.7)",
      image: one,
      description: "Build brand reputation through strategic online relationships and media coverage.",
      ctaText: "Boost Your Brand Reputation"
    },
    { 
      title: "Display Advertising", 
      bgColor: "rgba(222, 91, 91, 0.7)",
      image: two,
      description: "Reach your audience with high-impact visual ads across the digital landscape.",
      ctaText: "Maximize Your Visibility"
    },
    { 
      title: "Video Marketing", 
      bgColor: "rgba(127, 100, 210, 0.7)",
      image: three,
      description: "Engage your audience with compelling video content that drives action.",
      ctaText: "Create Engaging Videos"
    },
    { 
      title: "Influencer Marketing", 
      bgColor: "rgba(247, 209, 84, 0.7)",
      image: four,
      description: "Partner with influential voices to amplify your brand message authentically.",
      ctaText: "Connect With Influencers"
    },
    { 
      title: "Search Engine Optimization", 
      bgColor: "rgba(210, 121, 166, 0.7)",
      image: five,
      description: "Improve your visibility online and drive organic traffic to your website.",
      ctaText: "Climb Search Rankings"
    },
    { 
      title: "E-commerce Marketing", 
      bgColor: "rgba(247, 195, 109, 0.7)",
      image: six,
      description: "Optimize your online store performance and drive more sales conversions.",
      ctaText: "Boost Your Online Sales"
    },
    { 
      title: "Social Media Marketing", 
      bgColor: "rgba(102, 123, 195, 0.7)",
      image: seven,
      description: "Build community and engagement around your brand across social platforms.",
      ctaText: "Grow Your Social Presence"
    },
    { 
      title: "Display Advertising", 
      bgColor: "rgba(204, 204, 204, 0.7)",
      image: eight,
      description: "Target your ideal customers with strategic ad placements and retargeting.",
      ctaText: "Drive Targeted Traffic"
    },
  ];
  
  return (
    <div className="w-full min-h-screen bg-white p-2 md:p-4">
      {/* Change to 4 columns and 2 rows */}
      <div className="w-full grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 mb-4">
        {marketingServices.map((service, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group h-48 md:h-96"
          >
            {/* Placeholder image */}
            <div className="absolute inset-0 bg-gray-300">
              <img 
                src={service?.image} 
                alt={service?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Color overlay with 50% opacity */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: service?.bgColor.replace('0.7', '0.5') }}
            ></div>
            
            {/* Card title */}
            <div className="absolute p-4 w-full">
              <h2 className="text-black font-bold text-lg sm:text-xl md:text-2xl">
                {service?.title}
              </h2>
            </div>
            
            {/* Enhanced hover animation content */}
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 
                           opacity-0 group-hover:opacity-95 transition-opacity duration-300">
              {/* Reveal container with staggered animations */}
              <div className="h-full w-full flex flex-col justify-center items-center p-4 relative overflow-hidden">
                {/* Title with slide-in animation */}
                <div className="overflow-hidden mb-3 w-full">
                  <h3 className="text-white font-bold text-xl text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {service?.title}
                  </h3>
                </div>

                {/* Animated separator line */}
                <div className="w-0 h-0.5 bg-[#FF6600] group-hover:w-16 transition-all duration-500 delay-100 mb-4"></div>
                
                {/* Description with fade-in animation */}
                <div className="mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform scale-95 group-hover:scale-100 transition-transform">
                  <p className="text-white text-sm md:text-base text-center">
                    {service?.description}
                  </p>
                </div>
                
                {/* Background corner accents */}
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white opacity-0 
                              group-hover:opacity-80 transition-opacity delay-400 duration-300"></div>
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white opacity-0 
                              group-hover:opacity-80 transition-opacity delay-400 duration-300"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Digital Marketing title positioned specifically below Display Advertising and Video Marketing */}
      <div className="relative w-full flex z-10">
        <div className="absolute top-0 left-0 w-full">
          <div className="relative mx-auto -mt-12 md:-mt-16">
            {/* This positions the title under the 2nd and 3rd cards */}
            <div className="absolute left-1/4 transform translate-x-[25%] bg-white px-6 py-3 rounded-lg shadow-lg">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap">
                <span className="text-black">Digital</span>
                <span className="ml-2 text-[#FF6600]">Marketing</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Five