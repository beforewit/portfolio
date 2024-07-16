'use client'
import React, {useEffect, useState} from 'react';
import Spline from '@splinetool/react-spline/next'

export interface ISplineComponentProps {
}

export default function SplineComponent (props: ISplineComponentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {isMobile ?
        <Spline
          className='contents'
          scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
        />
      :
        <Spline
          className='contents'
          scene="https://prod.spline.design/8Vf1NzmgAl7rVCAF/scene.splinecode" 
        />
    }

    </>
  );
}
