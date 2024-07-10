import HamburgerMenu from '@/components/HamburgerMenu';
import Spline from '@splinetool/react-spline/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-violet_bg">
      <div>
        <Header/>
          {/* <div className='px-2'>
            <HamburgerMenu/>
          </div> */}
        <div className='flex-grow'>
          <Spline
            scene="https://prod.spline.design/7Wi5Hgg-BjjgEj94/scene.splinecode" 
          />
        </div>
        <Footer/>
      </div>
    </main>
  );
}