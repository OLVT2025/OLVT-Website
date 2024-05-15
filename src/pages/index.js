import { MemoizedExpertiseCard } from "@/SDK/cards/ExpertiseCard";
import imageUrls from "@/constants/imageUrls";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedIndustriesWeServe } from "@/modules/Home/IndustriesWeServe";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedOurTeam } from "@/modules/Home/OurTeam";
import { MemoizedOurVision } from "@/modules/Home/OurVision";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";

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
    <MemoizedCustomLayOut>
      <div className="mx-10 max-w-6xl lg:mx-auto !important px-2 pt-44 md:pt-52 ">
        <MemoizedWelcomeSection
          title={
            <p>
              Welcome to Orange League <br /> Your Digital Transformation
              Partner
            </p>
          }
          paragraph={` We're here to help you thrive in the digital landscape. With our expertise and dedication, we'll collaborate closely with you to develop tailored solutions that drive results.`}
          imageUrls={imageUrls}
        />
        <MemoizedOurExpertise
          text={
            <p>
              Our Dynamic Suite of Services <b /> Engineered for Innovation
            </p>
          }
        />
        <div className="mx-auto w-auto lg:max-w-7xl flex  justify-center my-2">
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
      </div>
      <MemoizedOurVision />
    </MemoizedCustomLayOut>
  );
}
