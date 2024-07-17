import Header from "@/components/Header";
import project1 from '../../public/project1.png'
import project2 from '../../public/project2.png'
import project3 from '../../public/project3.png'
import Project, { IProjectProps } from "@/components/Project";
// pages/Projects.tsx
const Projects: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header/>
      <div className="w-full h-[88px]"/>
      <div className="w-full py-10 md:py-[60px] flex flex-col items-center">
        <div id="projects" className="flex flex-col gap-7 pt-[px] pb-[60px] px-[32px] max-w-screen-xl ">
          {projects.map((i, key)=><Project {...i} key={key}/>)}
        </div>
      </div>
    </main>
  );
};

export default Projects;


const projects:IProjectProps[] = [
  {number: "01", title:<span>Remote Fitness CoachingHeader,<br/>POLYMATE</span>, externalLink:"https://", imgSrc:project1, desc:"Solved the issue of users turning off their cameras during online fitness coaching. Addressing privacy concerns with silhouette filtering led to a 35% increase in monthly retention compared to the previous rate."},
  {number: "02", title:<span>LG ThinQ Kakao Chatbot<br/>with Generative AI (LLM + RAG)</span>, externalLink:"https://", imgSrc:project2, reverse:true, desc:"Improved the ThinQ chatbot service by applying generative AI technology. Enhanced the response accuracy rate through repeated user testing, achieving a 19% improvement compared to the previous rate. Successfully handled over 1,000 inquiries promptly without the need for human resource."},
  {number: "03", title:<span>GS칼텍스 에너지플러스 허브 <br/>전기차 충전소 통합 관제 솔루션</span>, externalLink:"https://", imgSrc:project3, desc:"어쩌구저쩌구 내용 어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용어쩌구저쩌구 내용 // 실루엣 필터링으로 프라이버시 문제를 해결하고, 기존 대비 monthly retention +35% 상승"},
  {number: "04", title:<span>GS Caltex Energy Plus Hub -  <br/>EV Charging Infra Management Solution</span>, externalLink:"https://", imgSrc:project3, desc:"Reduced the cognitive load on EV charging infra managers by half. By implementing real-time fault notifications and user-friendly UI, the management process steps of the complex control system had improved by 67%, minimizing service downtime caused by charger failures and occupancy.", reverse:true}
]