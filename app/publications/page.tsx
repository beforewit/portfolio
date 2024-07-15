import Header from "@/components/Header";

// pages/Publications.tsx
const Publications: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-White900">
      <Header/>
      <div className="w-full h-[88px]"/>
      <div className="w-full py-10 md:py-[60px] flex flex-col items-center">
        <div id="publications" className="flex flex-col gap-7 pt-[px] pb-[60px] px-[32px] max-w-screen-xl ">

          <div className="flex flex-col md:flex-row">
            <div className="l flex-1">
              <div className="flex-col gap-4">
                <div className="flex flex-row text-28 md:text-48 gap-4 py-5">
                  <span>Journal</span>
                  <span className="font-bold">Article</span>
                </div>
                <div className="flex flex-col gap-5 text-gray_border text-16 ">
                  <div>
                    <span className="font-bold">Master’s Thesis</span>  Imperfection as a Virtue: A Longitudinal Study of the Impact of the Type and Number of Errors in Intelligent Learning Companions in MOOC.
                  </div>
                  <div>
                    Kwon, O., <span className="font-bold">Kim, H.</span>, Kim, B., Lee, J., Ha, T., Lee, I., & Kim, J. (2017). Meaning of Waiting Experience and Principles of Service Design, Journal of the Korea Contents Association, 17(1), 270-286.
                  </div>
                  <div>
                    <span className="font-bold">Kim, H.</span>, Kim, B., Kim, J., Shin, H., & Kim, J. (2016). Impact of Immediacy and Self-Monitoring on Positive Emotion and Sense of Community of User: Focusing on Social Interactive Video Platform. The Science of Emotion & Sensibility, 19(2), 3-18.
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="r flex-1">

            </div> */}
          </div>

          <div className="flex flex-col md:flex-row-reverse">
            <div className="l flex-1">
              <div className="flex-col gap-4">
                <div className="flex flex-row text-28 md:text-48 gap-4 py-5">
                  <span>Conference</span>
                  <span className="font-bold">Paper</span>
                </div>
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-5 text-gray_border text-16 ">
                    <div className="text-tangerine text-24">
                      International
                    </div>
                    <div>
                      <span className="font-bold">Kim, H.</span>, Kim, B., Lee, J. H., & Kim, J. (2017, May). Hey, Wake Up: Come Along with the Artificial Learning Companion to the e-Learner’s Outcomes High!. In Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems, (pp. 1763-1770). ACM.
                    </div>
                    <div>
                      <span className="font-bold">Kim, H.</span>, Kim, B., Jun, S., & Kim, J. (2017, Mar). An Imperfectly Perfect Robot: Discovering Interaction Design Strategy for Learning Companion. In Proceedings of the Companion of the 2017 ACM/IEEE International Conference on Human-Robot Interaction, (pp. 165-166). ACM.
                    </div>
                    <div>
                      Kim, B., <span className="font-bold">Kim, H.</span>, & Kim, J. (2016, Sep). Getting home safely with drone. In Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing, (pp.117-120). ACM.
                    </div>
                    <div>
                      <span className="font-bold">Kim, H.</span>, Kim, B., & Kim, J. (2016, Jan). The Naughty Drone: A Qualitative Research on Drone as Companion Device. In Proceedings of the 10th International Conference on Ubiquitous Information Management and Communication, (pp.91-96). ACM.
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 text-gray_border text-16 ">
                    <div className="text-tangerine text-24">
                      Domestic
                    </div>
                    <div>
                      Kim, B., <span className="font-bold">Kim, H.</span>, Kwon, O., Lee, J., Ha, T., Lee, I., & Kim, J. (2017, Feb). The Effect of Learning Companion with Weakness and Emotion on Upper Social Comparison and Social Interaction. In Proceedings of HCI Korea, (pp.684-687). Hanbit Media, Inc. (Best Paper Award)
                    </div>
                    <div>
                      Kwon, O., <span className="font-bold">Kim, H.</span>, Kim, B., Lee, J., Ha, T., Lee, I., & Kim, J. (2016, Jan). Now is the time!: Qualitative research about meaning of wait experience. In Proceedings of HCI Korea, (pp. 198-200). Hanbit Media, Inc.
                    </div>
                    <div>
                      Kim, M., Kim, B., <span className="font-bold">Kim, H.</span>, Baek, S., Shin, H., Lee, I., & Kim, J. (2016, Jan). The Effect of Emotion Sharing with Hashtag on Perceived Attention Seeking and Social Interactivity. In Proceedings of HCI Korea (pp. 460-467). Hanbit Media, Inc.
                    </div>
                    <div>
                      Aum, H., Jang, J., Kim, M., Kim, T., <span className="font-bold">Kim, H.</span>, & Kim, J. (2014, Jan). The impact of self-presentation and social expectation in continuous usage: focusing on recommendation system. In Proceedings of HCI Korea, (pp. 371-377). Hanbit Media, Inc.
                    </div>
                    <div>
                      Lee, B., Kim, H., Shin, H, & <span className="font-bold">Kim, H.</span> (2014, Jan). Understanding of Factors of Service Authenticity and their relation to Technology Adoption in Multiplex Environment. In Proceedings of HCI Korea, (pp. 266-268). Hanbit Media, Inc.
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="r flex-1">

            </div> */}
          
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="l flex-1">
              <div className="flex-col gap-4">
                <div className="flex flex-row text-28 md:text-48 gap-4 py-5">
                  <span className="font-bold">Book</span>
                </div>
                <div className="flex flex-col gap-5 text-gray_border text-16 ">
                  <div>
                  김진우. (2017). 「서비스 경험 디자인」 초안 집필 및 집필 과정 책임 관리 (1장-13장). 안그라픽스. (2017년 2월 10일). ISBN 9788970598826.
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="r flex-1">

            </div> */}
          </div>

        </div>



        </div>

    </main>
  );
};

export default Publications;
