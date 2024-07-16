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


  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 767);
  //   };

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

//   if(isMobile) return <Spline
//   className='contents'
//   scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
// />
  // return 'pc'
  // return (
  //   <>
  //   {isMobile ?
  //      ()=>
  //       <Spline
  //         className='contents'
  //         scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
  //       />
  //     :
  //       <Spline
  //         className='contents'
  //         scene="https://prod.spline.design/8Vf1NzmgAl7rVCAF/scene.splinecode" 
  //       />
  //   }

  //   </>
  // );
}
