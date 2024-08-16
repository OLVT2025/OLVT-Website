import imageUrls from "@/constants/imageUrls"; 
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut"; 
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProjectInformation from "@/modules/ViewCaseStudies/ProjectInfomation"; 
import AboutProduct from "@/modules/ViewCaseStudies/AboutProduct";
import { useRouter } from "next/router";
import caseStudies from "@/modules/data/caseStudies"; 


export default function ViewCaseStudies() {
  const [caseStudy, setCaseStudy] = useState();
  // Inside your component
const router = useRouter();
const { caseStudyName } = router.query;

  useEffect(() => {
    const storedId = localStorage.getItem("caseStudyID");
    if (storedId) {
      const id = parseInt(storedId);
      const foundCaseStudy = caseStudies.find((cs) => cs.id === id);

      setCaseStudy(foundCaseStudy);
    }
  }, []);

  const caseStudyUrl = `https://www.orangeleague.in/case-studies/${caseStudyName}`;
  return (
    <>
      <Head>
        <title>View Case Studies - Orange LVT</title>
        <meta
          name="description"
          content="Read about Orange LVT's successful case studies and how we've helped businesses achieve their digital goals with exceptional results. Leading technology company showcasing successful digital transformation projects."
        />
        <meta
          name="keywords"
          content="case studies, success stories, digital transformation, technology company, software development, tech solutions, digital innovation"
        />
        <meta
          name="url"
          content={caseStudyUrl}
        />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={caseStudyUrl}
        />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>

      <MemoizedCustomLayOut>
        <div className="sm:mx-10 sm:max-w-6xl lg:mx-auto  !important px-2 pt-36 font-almarai md:pt-32">
          <MemoizedWelcomeSection
            title={<p>{caseStudy?.title}</p>}
            showButton={false}
            // paragraph={`Elevate your brand with our responsive web design and mobile app development services. Join us for digital transformation and stay ahead of the competition.`}
          />

          <div className="flex flex-col md:flex-row w-full mt-10 md:mt-20 justify-between">
            <div className={`w-full ${caseStudy?.projectInfo ? "md:w-2/3" : ""}`}>
              <AboutProduct
                aboutProductContent={caseStudy?.aboutProductContent}
                challengesContent={caseStudy?.challengesContent}
                solutionContent={caseStudy?.solutionContent}
                imageUrlList={caseStudy?.imageUrlList}
              />
            </div>
            { caseStudy?.projectInfo && <div className="w-full md:w-[25%]">
              <ProjectInformation
                projectInfo={caseStudy?.projectInfo}
                pdfLink={caseStudy?.pdfLink}
              />
            </div>}
          </div>
        </div>
      </MemoizedCustomLayOut>
    </>
  );
}
