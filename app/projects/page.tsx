import Header from "@/components/Header";
import project1 from '../../public/project1.png'
import project2 from '../../public/project2.png'
import project3 from '../../public/project3.png'
import Image from "next/image";
import readMore from '../../public/readMore.png'
import Link from "next/link";
import Project, { IProjectProps } from "@/components/Project";
// pages/Projects.tsx
const Projects: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header/>
      <div className="w-full h-[88px]"/>
      <div className="w-full py-10 md:py-[60px] flex flex-col items-center">
        <div className="flex justify-center items-center text-28 md:text-48 py-[20px] text-white gap-4">
          <div>My</div>
          <span className="font-bold"> Project</span>
        </div>
        <div id="projects" className="flex flex-col gap-7 pt-[px] pb-[60px] px-[32px] max-w-screen-xl ">
          {projects.map((i, key)=><Project {...i} key={key}/>)}
        </div>
      </div>
    </main>
  );
};

export default Projects;


const projects:IProjectProps[] = [
  {number: "01", title:"비대면 피트니스 코칭, POLYMATE", externalLink:"https://", imgSrc:project1, desc:"어쩌구저쩌구 내용 어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용 // 실루엣 필터링으로 프라이버시 문제를 해결하고, 기존 대비 monthly retention +35% 상승"},
  {number: "02", title:<span>Generative AI (LLM + RAG)<br/>ThinQ 카카오 챗봇</span>, externalLink:"https://", imgSrc:project2, reverse:true, desc:"어쩌구저쩌구 내용 어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용 // 실루엣 필터링으로 프라이버시 문제를 해결하고, 기존 대비 monthly retention +35% 상승"},
  {number: "03", title:<span>GS칼텍스 에너지플러스 허브 <br/>전기차 충전소 통합 관제 솔루션</span>, externalLink:"https://", imgSrc:project3, desc:"어쩌구저쩌구 내용 어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용 // 실루엣 필터링으로 프라이버시 문제를 해결하고, 기존 대비 monthly retention +35% 상승"}
]