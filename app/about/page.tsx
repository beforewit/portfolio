import Header from "@/components/Header";
import ufo from "../../public/ufo.png"
import s1 from '../../public/skill1.png'
import s2 from '../../public/skill2.png'
import s3 from '../../public/skill3.png'
import s4 from '../../public/skill4.png'
import s5 from '../../public/skill5.png'
import Image from "next/image";
import SpecializedSkill from "@/components/SpeciallizedSkill";
import lg from '../../public/logo_lg.png'
import polymate from '../../public/logo_polymate.png'
import Experience from "@/components/Experience";

// pages/About.tsx
const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-White900 items-center">
      <Header/>
      <div className="w-full h-[88px]"/>
      <div id="skills" className="flex flex-col w-full gap-[64px] justify-between md:flex-row py-[60px] px-4 md:px-[32px] max-w-screen-xl ">
        <div className="l flex flex-1 flex-col py-10 text-tangerine max-w-[520px]">
          <div className="flex text-40 py-3 flex-col md:flex-row items-center md:justify-start md:gap-4">
            <div>
              Specialized 
            </div>
            <div className="font-bold">
              Skills
            </div>
          </div>
          <div className="division-line flex justify-center items-center py-9">
            <em className="h-[2px] w-[22px] bg-tangerine"/>
          </div>
          <div className="flex flex-col gap-10">
            {SpecializedSkills.map((i, key)=>{
              return <SpecializedSkill {...i} key={key}/>
            })}
          </div>
        </div>
        <div className="r flex flex-1 flex-col gap-[30px] max-w-[490px]">
          <div>
            <Image src={ufo} alt="ufo"/>
          </div>
          <div className="text-center md:text-left">
            <div className="text-40 py-3">
              Design 
              <span className="font-bold pl-4">
                Skills
              </span>
            </div>
            <div className="flex flex-wrap gap-5 min-w-[82px] mx-auto justify-evenly py-5">
              <Image src={s1} width={82} alt="Adobe Ai"/>
              <Image src={s2} width={82} alt="Adobe Ps"/>
              <Image src={s3} width={82} alt="Adobe Pr"/>
              <Image src={s4} width={82} alt="Figma"/>
              <Image src={s5} width={82} alt="Rhino"/>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="flex w-full bg-black_bg justify-center">
        <div className="w-full flex flex-col gap-0 pt-[60px] pb-[60px] px-4 md:px-[32px] max-w-screen-xl ">
          <div className="title flex flex-1 flex-wrap py-5 gap-4 justify-center items-center text-white">
            <span className="font-bold text-48">Experience</span>
            <span className="text-18 md:text-28">2018 - 2024</span>
          </div>
          <div className="flex flex-col gap-8 py-10 md:px-6">
            {experiences.map((i, key)=><Experience {...i} key={key}/>)}
          </div>
        </div>
      </div>
      <div id="educations" className="flex w-full justify-center">
        <div className="w-full flex flex-col gap-0 pt-[60px] pb-[60px] px-4 md:px-[32px] max-w-screen-xl ">
          <div className="title flex flex-1 flex-wrap py-5 gap-4 justify-center items-center text-tangerine">
            <span className="font-bold text-48">Educations</span>
            <span className="text-18 md:text-28">2011 - 2017</span>
          </div>
          <div className="flex flex-col gap-8 py-10 md:px-6">
            <div className="flex flex-col justify-between gap-6 border-[1px] px-6 md:px-7 py-7 md:py-10 rounded-lg bg-tangerine_light text-white tracking-n2">
              <div className="flex flex-col md:flex-row justify-between flex-1 gap-3">
                <div className="flex flex-col text-16 gap-2">
                  <div className="flex flex-row flex-wrap text-24">
                    <div className="font-bold">
                      Yonsei University,&nbsp;
                    </div>
                    <div>
                      School of Business
                    </div>
                  </div>
                  <div>
                    <span className="font-bold">Master of Science in Business Administration, concentration in Human-Computer Interaction (HCI)</span> GPA 4.24/4.30
                  </div>
                </div>
                <div>
                  Sep 2015 - Aug 2017
                </div>
              </div>
              <div className="opacity-90">
                Researcher @Yonsei HCI Lab (Dec 2014 - Dec 2017)<br/>
                (master thesis) Imperfection as a Virtue: A Longitudinal Study of the Impact of the Type and Number of Errors in Intelligent Learning Companions in MOOC
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 border-[1px] px-6 md:px-7 py-7 md:py-10 rounded-lg bg-tangerine_light text-white tracking-n2">
              <div className="flex flex-col md:flex-row justify-between flex-1 gap-3">
                <div className="flex flex-col text-16 gap-2">
                <div className="flex flex-row flex-wrap text-24">
                    <div className="font-bold">
                      Yonsei University,&nbsp;
                    </div>
                    <div>
                      School of Business
                    </div>
                  </div>
                  <div>
                    <span className="font-bold">Bachelor of Business Administration</span> GPA 4.26/4.30(summa cum laude)
                  </div>
                  <div>
                    <span className="font-bold">Bachelor of Integrated Design, concentration in Interaction Design</span> (double major)
                  </div>
                </div>
                <div>
                  Mar 2011 - Aug 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;


const SpecializedSkills = [
  {
    title: "① Service Lead",
    subTitle: "Experience leading teams from start to launch",
    description:"Starting as a UX designer and progressing through roles such as PM and PO, I have accumulated 6 years of experience in service design, successfully launching 3 different services across various domains. Particularly, I have demonstrated leadership in proposing new services to startups, building teams, and achieving business objectives. My expertise spans from high-level planning including Frontend UX, Backend policy planning, and data-based operations, to understanding the entire process and having experience in both B2C and B2B service design."
  },
  {
    title: "② Data Management", 
    subTitle: "Speaking with numbers", 
    description: "During the process of launching the generative AI service, I conducted multiple rounds of qualitative and quantitative evaluations to track user satisfaction and accuracy metrics, measuring the performance improvements of the service. Additionally, I monitored and improved user retention for an online fitness service by conducting user interviews, validating hypotheses, and iterating to enhance the customer experience."
  },
  {
    title: "③ Project Management", 
    subTitle: "Facilitating collaboration and managing issues", 
    description:"Led regular retrospectives and scrum meetings in two projects to monitor progress and enhance communication among team members. Monitored progress at each stage and quickly addressed potential issues to ensure adherence to project timelines."
  },
  {
    title: "④ AI-Friendly", 
    subTitle: "Experience in commercializing AI products", 
    description: "Designed 2 chatbots using LLM and RAG. Led the project as the product manager(PM), and operated the LG ThinQ Kakao chatbot beta version (Feb 2024). Designed the 'Routine Creation' and 'Weather Inquiry' domains for the smart home chatbot ChatThinQ, applying generative AI technology (scheduled for release in July 2024)."
  }
]

const experiences = [
  {iconSrc: lg, title: "AI Product Designer", subTitle: "LG Electronics, Platform Business Center, AI Service Task", period: "Jul 2023 - Present", periodLength: "", details: <div className="leading-[14.3px]">Designed generative AI model-based chatbot service for ThinQ app<br/><br/>Product manager for LG ThinQ Kakao Chatbot, beta launch<br/><br/>Designed voice agent for elderly care service</div>},
  {iconSrc: polymate, title: "PO (CEO)", subTitle: "LG Electronics, CIC, POLYMATE", period: "Jan 2021 - Jun 2023", periodLength: "(2yrs 6m)", details: <div className="leading-[18.2px]">Designed and commercialized paid online fitness platform</div>},
  {iconSrc: lg, title: "UX Designer", subTitle: "LG Electronics, CTO, B2B Solution", period: "Jul 2018 - Dec 2020", periodLength: "(2yrs 6m)", details: <div className="leading-[18.2px]">PoC for GS Caltex electric vehicle charging station integrated management solution<br/><br/>Lead UX design of web control system, contributing to commercialization</div>},
]