import Spline from '@splinetool/react-spline';
import * as React from 'react';

export interface ISplineDesktopProps {
}

export default function SplineDesktop (props: ISplineDesktopProps) {
  return (
    <Spline
      className='contents'
      scene="https://prod.spline.design/8Vf1NzmgAl7rVCAF/scene.splinecode" 
    />
  );
}
