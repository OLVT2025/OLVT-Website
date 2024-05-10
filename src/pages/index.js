import { MemoizedExpertiseCard } from "@/SDK/cards/ExpertiseCard";
import imageUrls from "@/constants/imageUrls";
import { MemoizedIndustriesWeServe } from "@/modules/Home/IndustriesWeServe";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedOurTeam } from "@/modules/Home/OurTeam";
import { MemoizedOurVision } from "@/modules/Home/OurVision";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import { MemoizedFooter } from "@/modules/Layout/Footer";
import { MemoizedHeader } from "@/modules/Layout/Header";
import React from "react";

const expertiseData = [
  {
    id: 1,
    title: `User Experience Design`,
    description: `Crafting seamless digital experiences tailored to your users' needs,
    ensuring intuitive navigation and captivating interfaces that drive
    engagement and satisfaction.`,
    imageUrl: imageUrls.ux,
  },
  {
    id: 2,
    title: `Front-end Development`,
    description: `Transforming designs into responsive, pixel-perfect websites and applications with cutting-edge front-end technologies, ensuring optimal performance and user interaction.`,
    imageUrl: imageUrls.frontend,
  },
  {
    id: 3,
    title: `Backend Development`,
    description: `Empowering your digital infrastructure with robust backend solutions, ensuring scalability, security, and seamless integration to support your application's functionality and performance.`,
    imageUrl: imageUrls.backend,
  },
  {
    id: 4,
    title: `Mobile Development`,
    description: `Building native and cross-platform mobile applications that deliver exceptional user experiences, leveraging the latest technologies to meet your business objectives.`,
    imageUrl: imageUrls.mobile,
  },
  {
    id: 5,
    title: `QA Testing`,
    description: `Ensuring your digital products meet quality standards through rigorous testing, guaranteeing functionality, reliability, and user satisfaction for optimal performance.`,
    imageUrl: imageUrls.qa,
  },
  {
    id: 6,
    title: `Deployment`,
    description: `Streamlining the deployment process to seamlessly launch your digital solutions, ensuring smooth transitions and efficient implementation for maximum impact.`,
    imageUrl: imageUrls.deployment,
  },
];

export default function Home() {
  return (
    <>
      <MemoizedHeader />
      <div className="text-[#0A0A0A]">
        <MemoizedWelcomeSection
          title={
            " Welcome to Orange League Your Digital Transformation Partner"
          }
          paragraph={` We're here to help you thrive in the digital landscape. With our expertise and dedication, we'll collaborate closely with you to develop tailored solutions that drive results.`}
          imageUrls={imageUrls}
        />
        <MemoizedOurExpertise
          text={`Our Dynamic Suite of Services Engineered for Innovation`}
        />
        <div className="w-11/12 mx-auto flex flex-col justify-center my-2">
          <div className="mt-14 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {expertiseData.map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <MemoizedExpertiseCard
                    title={data.title}
                    description={data.description}
                    imageUrl={data.imageUrl}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <MemoizedIndustriesWeServe />
        <MemoizedOurTeam />
        <MemoizedOurVision />
      </div>
      <MemoizedFooter />
    </>
  );
}
