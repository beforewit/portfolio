import Header from '@/components/Header';
import SplineComponent from '@/components/Spline';
// import Spline from '@splinetool/react-spline';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  bg-violet_bg">
        <Header/>
        <div className='spline flex-grow flex flex-col justify-center items-center gap-2'>
            <div className='px-8 py-2 absolute mx-auto top-[120px] margin-0 rounded-full bg-tangerine text-white'>
              Take a tour of my room!
            </div>
               {/* <Spline
                className='contents'
                scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
              /> */}
          <SplineComponent/>
        </div>
    </main>
  );
}