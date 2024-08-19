import { MemoizedCaseStudyCards } from "@/SDK/cards/CaseStudyCards";
import imageUrls from "@/constants/imageUrls";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";
import React from "react";

const caseStudyData = [
  {
    id: 1,
    title: "NSE Fantasy",
    desc: "NSE Fantasy is an educational trading platform designed to empower new traders by offering a risk-free environment where they can learn and practice trading concepts.",
    imgUrl: "/images/caseStudy/NseLearning.svg",
    caseStudyID: 1,
  },
  {
    id: 2,
    title: "NSE Corpository Dashboard",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
    imgUrl: "/images/caseStudy/NseDashboard.svg",
    caseStudyID: 2,
  },
  {
    id: 3,
    title: "Bonzer World",
    desc: `Orange League partnered with Bonzer World to craft a cutting-edge CRM system tailored for travel agents. This CRM system is designed to streamline every aspect of customer management, from handling initial inquiries to booking hotels and arranging transportation.`,
    imgUrl: "/images/caseStudy/BonzerWorld.svg",
    caseStudyID: 3,
  },
  {
    id: 4,
    title: "Sky WebHub",
    desc: `This project consisted of creating a web hosting application for deploying code straight from Git repositories, managing custom domains, and achieving scalable, secure hosting. The scanner uses Docker containers to isolate programs, Redis for logging, and AWS ECS for deployment.`,
    imgUrl: "/images/caseStudy/NseLearning.svg",
    caseStudyID: 4,
  },
  {
    id: 5,
    title: "On Premise Deployment",
    desc: `Our client, a leading enterprise with stringent security protocols, required a secure on-premise deployment for a sophisticated web application.`,
    imgUrl: "/images/caseStudy/NseDashboard.svg",
    caseStudyID: 5,
  },
 
  {
    id: 6,
    title: "Workwizz", 
    desc: `Workwizz is changing the way clients and freelancers work together online. This case study looks at the platform's development, key features, and challenges, showing how our solutions improve efficiency and growth in the freelance market.`,
    imgUrl: "/images/caseStudy/workwiz.svg",
    caseStudyID: 6,
  },
];

const CaseStudies = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Orange LVT</title>
        <meta
          name="description"
          content="Read about Orange LVT's successful case studies and how we've helped businesses achieve their digital goals with exceptional results. Leading technology company showcasing successful digital transformation projects."
        />
        <meta
          name="keywords"
          content="case studies, success stories, digital transformation, technology company, software development, tech solutions, digital innovation"
        />
        <meta name="url" content="https://www.orangeleague.in/case-studies" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/case-studies" />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>

      <MemoizedCustomLayOut>
        <div className="md:mx-10 sm:max-w-6xl font-almarai lg:mx-auto !important px-2 pt-44 md:pt-52">
          <MemoizedWelcomeSection
            title={
              <p>
                Explore How We've Helped Businesses Thrive With Remarkable
                Results
              </p>
            }
            paragraph={`Discover how our successful projects have helped businesses like yours achieve their digital goals. Our case studies offer valuable insights and inspiration for your own digital initiatives.`}
          />
          <div className="pt-5 sm:pt-20">
            <MemoizedOurExpertise
              title="Real-world Success Stories"
              text={
                <p>
                  Witness the Transformative Journey of <br /> Our Clients'
                  Success
                </p>
              }
            />
          </div>
          <div className=" lg:mx-10 flex flex-col justify-center my-2">
            <div className=" mt-4 sm:mt-14 grid  grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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
    </>
  );
};

export default CaseStudies;
