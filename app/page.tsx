import HamburgerMenu from '@/components/HamburgerMenu';
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <div className="flex px-2 py-2 items-center justify-between bg-slate-300">
          <div className='px-2'>타이틀</div>
          <div className='px-2'>
            <HamburgerMenu/>
          </div>
        </div>
        { <Spline
          scene="https://prod.spline.design/7Wi5Hgg-BjjgEj94/scene.splinecode" 
        /> }
      </div>

    </main>
  );
}