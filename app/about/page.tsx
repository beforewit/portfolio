import Header from "@/components/Header";
import yoda from "../../public/yoda.png"
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
      <div id="skills" className="flex flex-col gap-0 md:gap-[195px] md:flex-row pt-[148px] pb-[60px] px-[32px] max-w-screen-xl ">
        <div className="l flex flex-1 flex-col gap-[30px] w-[510px]">
          <div>
            <Image src={yoda} alt="yoda"/>
          </div>
          <div>
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
        <div className="r flex flex-1 flex-col py-10 text-tangerine max-w-[511px]">
          <div className="text-40 py-3">
            Specialized 
            <span className="font-bold pl-4">
              Skills
            </span>
          </div>
          <div className="division-line flex justify-center items-center py-9">
            <em className="h-[2px] w-[22px] bg-tangerine"/>
          </div>
          <div className="flex flex-col gap-10">
            {SpecializedSkills.map((i)=>{
              return <SpecializedSkill {...i}/>
            })}
          </div>
        </div>
      </div>
      <div id="experience" className="flex w-full bg-black_bg justify-center">
        <div className="w-full flex flex-col gap-0 pt-[60px] pb-[60px] px-[32px] max-w-screen-xl ">
          <div className="title flex flex-1 py-5 gap-4 justify-center items-center text-white">
            <span className="font-bold text-48">Experience</span>
            <span className="text-28">2018 - 2024</span>
          </div>
          <div className="flex flex-col gap-8 py-10 px-6">
            {experiences.map((i)=><Experience {...i}/>)}
          </div>
        </div>
      </div>
      <div id="educations" className="flex w-full justify-center">
        <div className="w-full flex flex-col gap-0 pt-[60px] pb-[60px] px-[32px] max-w-screen-xl ">
          <div className="title flex flex-1 py-5 gap-4 justify-center items-center text-tangerine">
            <span className="font-bold text-48">Educations</span>
            <span className="text-28">2011 - 2017</span>
          </div>
          <div className="flex flex-col gap-8 py-10 px-6">
            <div className="flex flex-col justify-between gap-6 border-[1px] px-6 md:px-7 py-7 md:py-10 rounded-lg bg-tangerine_light text-white">
              <div className="flex flex-col md:flex-row justify-between flex-1 gap-3">
                <div className="flex flex-col text-16 gap-2">
                  <div className="font-bold text-24">
                    연세대학교
                  </div>
                  <div>
                    <span className="font-bold">경영학 석사 - 세부전공: HCI</span>(인간과 컴퓨터 상호작용) 4.24/4.30
                  </div>
                </div>
                <div className="opacity-60">
                  2015.09 - 2017.08
                </div>
              </div>
              <div className="opacity-90">
                연세 HCI Lab 근무 (2014.12 - 2017.12) <br/>
                (학위논문) Imperfection as a Virtue: A Longitudinal Study of the Impact of the Type and Number of Errors in Intelligent Learning Companions in MOOC
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 border-[1px] px-6 md:px-7 py-7 md:py-10 rounded-lg bg-tangerine_light text-white">
              <div className="flex flex-col md:flex-row justify-between flex-1 gap-3">
                <div className="flex flex-col text-16 gap-2">
                  <div className="font-bold text-24">
                    연세대학교
                  </div>
                  <div>
                    <span className="font-bold">경영학</span>(주전공) 4.26/4.30(최우등 졸업)
                  </div>
                  <div>
                    <span className="font-bold">통합디자인학 - 세부전공: 인터랙션 디자인</span>(복수전공)
                  </div>
                </div>
                <div className="opacity-60">
                  2011.03 - 2015.08
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


export const SpecializedSkills = [
  {title: "① 서비스 리드", subTitle: "팀 구축부터 출시까지 3번의 경험", description:"UX 디자이너로 시작하여 PM, PO를 거치며, 서비스 기획자로 6년간 각기 다른 도메인에서 총 3개의 서비스를 처음부터 구축하여 성공적으로 상용화해본 경험을 보유하고 있습니다. 특히 사내벤처 리더로 서비스를 제안하고, 팀 구축, 유료 사업화를 이끌었습니다. 상위 기획부터 Frontend UX 기획, Backend 정책 기획, 데이터 기반 운영 등 기획 프로세스 전반에 대해 이해하며, B2C 및 B2B 서비스 기획 경험을 모두 가지고 있습니다."},
  {title: "② 지표 관리", subTitle: "목표는 숫자로, 결과도 숫자로", description:"생성형 AI 서비스 출시 전, 후에 수차례의 정성/정량 평가를 거쳐 사용자 만족도와 정확도 지표를 추적하여 서비스 개선의 성과를 측정했습니다. 또한 온라인 운동 서비스의 유저 리텐션을 모니터링하고 향상시키기 위해 사용자 인터뷰와 가설을 검증하고, 반복을 통해 고객 경험을 개선했습니다."},
  {title: "③ 일정 집착", subTitle: "일정은 반드시 지키는 것", description:"2번의 프로젝트에서 정기적인 회고 미팅 진행과 스크럼 회의를 주도하여 팀원 간의 원활한 소통을 통해 효율적이고 협력적인 조직 문화를 구축했습니다. 프로젝트 각 단계의 진행 상황과 예상 이슈를 빠르게 파악하여 필요 시 조치를 취해 프로젝트 일정을 준수합니다."},
  {title: "④ AI 프렌들리", subTitle: "생성형 AI 기반 프로덕트 기획/출시 ", description:"LLM + RAG가 적용된 고객 문의 챗봇을 설계, 프로젝트 관리(PM), 상용화, 운영한 경험을 보유하고 있습니다. (LG ThinQ 카카오 챗봇 베타버전 오픈, ‘24.02) 또한 생성형 AI 기술을 적용한 스마트 홈 챗봇 ChatThinQ의 ‘루틴 생성’ 및 ‘날씨 문의’ 도메인을 기획하여 사용화에 기여했습니다. (‘24.08 출시 예정)"}
]

export const experiences = [
  {iconSrc: lg, title: "AI 서비스 기획자, 선임", subTitle: "LG전자 플랫폼사업센터, AI서비스Task", period: "2023.07 - 현재", periodLength: "(1년)", details: <div>Generative AI 모델 기반의 ThinQ 앱 챗봇 서비스 기획<br/>LG ThinQ 카카오 챗봇 프로젝트 PM, 베타 출시<br/>M사 Voice Agent 서비스 기</div>},
  {iconSrc: polymate, title: "PO, 대표", subTitle: "LG전자 사내벤처 POLYMATE", period: "2021.01 - 2023.06", periodLength: "(2년 6개월)", details: <div>비대면 온라인 운동 플랫폼 서비스 기획, 유료 사업화</div>},
  {iconSrc: lg, title: "UX 디자이너, 연구원", subTitle: "LG전자 CTO, B2B솔루션팀", period: "2018.07 - 2020.12", periodLength: "(2년 6개월)", details: <div>GS칼텍스 전기차 충전소 통합 관리 솔루션 PoC <br/>웹 관제 시스템 UX 디자인 100%, 사업화 기여</div>},
]