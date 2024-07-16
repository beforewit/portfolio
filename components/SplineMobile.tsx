import Spline from '@splinetool/react-spline';
import * as React from 'react';

export interface ISplineMobileProps {
}

export default function SplineMobile (props: ISplineMobileProps) {
  return (
    <Spline
      className='contents'
      scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
    />
  );
}
