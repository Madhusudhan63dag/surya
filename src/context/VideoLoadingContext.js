import React, { createContext, useState, useContext } from 'react';

const VideoLoadingContext = createContext({
  firstVideoLoaded: false,
  setFirstVideoLoaded: () => {}
});

export const VideoLoadingProvider = ({ children }) => {
  const [firstVideoLoaded, setFirstVideoLoaded] = useState(false);
  
  return (
    <VideoLoadingContext.Provider value={{ firstVideoLoaded, setFirstVideoLoaded }}>
      {children}
    </VideoLoadingContext.Provider>
  );
};

export const useVideoLoading = () => useContext(VideoLoadingContext);
