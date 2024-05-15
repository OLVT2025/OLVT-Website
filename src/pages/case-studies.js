import { MemoizedCaseStudyCards } from "@/SDK/cards/CaseStudyCards";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import React from "react";

const caseStudyData = [
  {
    id: 1,
    title: "NSE- Corpositry Dashboard",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
    imgUrl: "/images/caseStudy/NseDashboard.svg",
  },
  {
    id: 2,
    title: "NSE Learn App",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
    imgUrl: "/images/caseStudy/NseLearning.svg",
  },
  {
    id: 3,
    title: "NSE Learn App",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
    imgUrl: "/images/caseStudy/NseLearning.svg",
  },
  {
    id: 4,
    title: "NSE Learn App",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
    imgUrl: "/images/caseStudy/NseDashboard.svg",
  },
];

const CaseStudies = () => {
  return (
    <MemoizedCustomLayOut>
      <div className="md:mx-10 max-w-6xl lg:mx-auto !important px-2 pt-44 md:pt-96">
        <MemoizedWelcomeSection
          title={
            <p>
              Explore How We've Helped Businesses Thrive With Remarkable Results
            </p>
          }
          paragraph={`Uncover the stories behind our successful projects and learn how we've helped businesses like yours achieve their digital goals. Our case studies provide valuable insights and inspiration for your own digital initiatives.`}
        />
        <MemoizedOurExpertise
          title="Real-world Success Stories"
          text={
            <p>
              Witness the Transformative Journey of <br /> Our Clients' Success
            </p>
          }
        />
        <div className="mx-auto md:mx-0 lg:mx-10 flex flex-col justify-center my-2">
          <div className="mt-14 grid  grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {caseStudyData.map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <MemoizedCaseStudyCards data={data} isButton={true} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </MemoizedCustomLayOut>
  );
};

export default CaseStudies;
