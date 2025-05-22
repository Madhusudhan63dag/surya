import React, { createContext, useState, useContext, useEffect } from 'react';

const VideoLoadingContext = createContext({
  firstVideoLoaded: false,
  setFirstVideoLoaded: () => {}
});

export const VideoLoadingProvider = ({ children }) => {
  const [firstVideoLoaded, setFirstVideoLoaded] = useState(false);
  
  // Debug logging to track context state changes
  useEffect(() => {
    console.log('VideoLoadingContext state changed:', { firstVideoLoaded });
    
    // Force videos to load after a timeout as fallback
    // This ensures videos will play even if the first video fails to signal loaded
    if (!firstVideoLoaded) {
      const timer = setTimeout(() => {
        console.log('Forcing firstVideoLoaded to true after timeout');
        setFirstVideoLoaded(true);
      }, 5000); // 5 second fallback
      
      return () => clearTimeout(timer);
    }
  }, [firstVideoLoaded]);
  
  return (
    <VideoLoadingContext.Provider value={{ firstVideoLoaded, setFirstVideoLoaded }}>
      {children}
    </VideoLoadingContext.Provider>
  );
};

export const useVideoLoading = () => useContext(VideoLoadingContext);

// Renamed to follow React Hook naming convention (must start with "use")
export const useDebugVideoContext = () => {
  const context = useVideoLoading();
  console.log('Current video context value:', context);
  return context;
};
