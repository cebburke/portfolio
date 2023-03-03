import {useEffect, useState} from 'react';

const useWindowSize = (initialWidth = 0, initialHeight = 0) => {
  const [state, setState] = useState<{width: number; height: number}>({
    width: initialWidth,
    height: initialHeight,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
};

export default useWindowSize;
