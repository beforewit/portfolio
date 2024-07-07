import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        hello
        <Spline
          scene="https://prod.spline.design/7Wi5Hgg-BjjgEj94/scene.splinecode" 
        />
      </div>

    </main>
  );
}