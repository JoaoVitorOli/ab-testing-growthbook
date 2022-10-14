import { useEffect, useState } from 'react';

interface WindowSizeProps {
  width: number,
  height: number,
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({} as WindowSizeProps);

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
     
      handleResize();
    
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}