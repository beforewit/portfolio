import Header from "@/components/Header";
import project1 from '../../public/project1.png'
import project2 from '../../public/project2.png'
import project3 from '../../public/project3.png'
import project4 from '../../public/project4.png'
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
  {number: "01", title:<span>Remote Fitness Coaching,<br/>POLYMATE</span>, externalLink:"https://", imgSrc:project1, desc:"Solved the issue of users turning off their cameras during online fitness coaching. Addressing privacy concerns with silhouette filtering led to a 35% increase in monthly retention compared to the previous rate."},
  {number: "02", title:<span>LG ThinQ Kakao Chatbot<br/>with Generative AI<span className="font-normal">(LLM + RAG)</span> </span>, externalLink:"https://", imgSrc:project2, reverse:true, desc:"Improved the ThinQ chatbot service by applying generative AI technology. Enhanced the response accuracy rate through repeated user testing, achieving a 19% improvement compared to the previous rate. Successfully handled over 1,000 inquiries promptly without the need for human resource."},
  {number: "03", title:<span>LG ChatThinQ,<br/>Generative AI Chatbot <span className="font-normal">(LLM + RAG)</span> </span>, externalLink:"https://", imgSrc:project3, desc:"The complex process of creating smart home routines has been simplified with an LLM-powered generative chatbot, enabling setup with a single command. Through prompt engineering, performance has been enhanced and responses fine-tuned to better fit specific use cases. Examples of possible routines are provided on the onboarding screen, and the response structure is designed to improve perceived speed."},
  {number: "04", title:<span>GS Caltex Energy Plus Hub -  <br/>EV Charging Infra Management Solution</span>, externalLink:"https://", imgSrc:project4, desc:"Reduced the cognitive load on EV charging infra managers by half. By implementing real-time fault notifications and user-friendly UI, the management process steps of the complex control system had improved by 67%, minimizing service downtime caused by charger failures and occupancy.", reverse:true}
]