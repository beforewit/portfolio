import HamburgerMenu from '@/components/HamburgerMenu';
import Spline from '@splinetool/react-spline/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  bg-violet_bg">
        <Header/>
        <div className='spline flex-grow flex flex-col justify-center items-center'>
          <Spline
            className='contents md:hidden'
            scene="https://prod.spline.design/zq3CjWUJWSfhIFor/scene.splinecode" 
          />
        </div>
    </main>
  );
}