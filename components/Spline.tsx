'use client'
import { useMediaQuery } from 'react-responsive'
import SplineMobile from './SplineMobile';
import SplineDesktop from './SplineDesktop';

export interface ISplineComponentProps {
}

export default function SplineComponent (props: ISplineComponentProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  if (isMobile) {
    return <SplineMobile/>
  }

  if (isDesktop) {
    return <SplineDesktop/>
  }
}
