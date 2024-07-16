

import Header from '@/components/Header';
import SplineComponent from '@/components/Spline';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  bg-violet_bg">
        <Header/>
        <div className='spline flex-grow flex flex-col justify-center items-center'>
          <SplineComponent/>
        </div>
    </main>
  );
}