import { MemoizedServicesCard } from "@/SDK/cards/ServicesCard";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";
import React from "react";

const serviceCard = [
  {
    id: 1,
    title: `User Experience Design`,
    description: `Our team of skilled designers follows a user-centric approach to UI/UX design. We immerse ourselves in your users' needs, preferences, and behaviors to create designs that resonate with your target audience. Through extensive research and iterative prototyping, we craft seamless experiences that delight users and drive results.`,
    tools: [
      `Research`,
      `Planning`,
      `Wireframing`,
      `Prototyping`,
      `Usability`,
      `UI Design`,
    ],
    imageUrl: `/images/services/DesignService.svg`,
  },
  {
    id: 2,
    title: `Frontend Development`,
    description: `We combines technical expertise with creative flair to build engaging user interfaces that drive user engagement and satisfaction. We prioritize usability, accessibility, and responsiveness to ensure that your digital products perform flawlessly across all devices and platforms.`,
    tools: [`React JS`, `Angular`, `Vue JS`, `Next JS`, `Three.JS`, `Svelte`],
    imageUrl: `/images/services/FrontendService.svg`,
  },
  {
    id: 3,
    title: `Backend Development`,
    description: `We understand that the backbone of any robust digital solution lies in its backend architecture. Our backend development services are designed to create scalable, secure, and high-performing systems that drive the functionality and success of your digital products.`,
    tools: [
      `Node JS`,
      `Nest JS`,
      `Django`,
      `PHP`,
      `ASP.NET`,
      `Laravel`,
      `Flask`,
      `Spring Boot`,
    ],
    imageUrl: `/images/services/BackendService.svg`,
  },
  {
    id: 4,
    title: `Mobile Development`,
    description: `We recognize the significance of mobile applications in today's digital landscape. Our mobile development team specialize in building native mobile applications for iOS and Android platforms, leveraging platform-specific technologies and frameworks to deliver optimal performance and user experience.`,
    tools: [`React Native`, `Ionic`, `Flutter`],
    imageUrl: `/images/services/MobileService.svg`,
  },
  {
    id: 5,
    title: `QA Testing`,
    description: `Our dedicated team of QA engineers follows a meticulous testing process to uncover potential defects and vulnerabilities in your digital products. Our comprehensive QA testing services are designed to identify and resolve issues, ensuring that your products meet the highest standards of quality, reliability, and performance. `,
    tools: [`Selenium`, `Postman`, `Jira`, `Swagger`],
    imageUrl: `/images/services/QAService.svg`,
  },
  {
    id: 6,
    title: `Cloud Services`,
    description: `Our experienced deployment team follows a systematic approach to deploy your digital solutions, carefully planning and coordinating every step to minimize disruption to your operations. We prioritize efficiency, reliability, and security to ensure a successful deployment that meets your timeline and objectives.`,

    tools: [
      `AWS`,
      `GCP`,
      `Azure`,
      `Docker`,
      `IBM`,
      `Oracle Cloud`,
      `Digital Ocean`,
    ],
    imageUrl: `/images/services/CloudService.svg`,
  },
];
export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Orange LVT</title>
        <meta
          name="description"
          content="Discover Orange LVT's range of services, including user experience design, frontend development, backend development, mobile development, QA testing, and deployment. Leading technology company offering comprehensive software development services."
        />
        <meta
          name="keywords"
          content="services, user experience design, frontend development, backend development, mobile development, QA testing, deployment, technology company, software development, tech solutions, digital transformation"
        />
        <meta name="url" content="https://www.orangeLVT.com/services" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeLVT.com/services" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MemoizedCustomLayOut>
        <div className="mx-10 max-w-6xl lg:mx-auto !important px-2 pt-44 md:pt-96">
          <MemoizedWelcomeSection
            title={
              <p>
                Tailored Solutions, Exceptional Results: Elevate Your Business
                with Orange League
              </p>
            }
            paragraph={` From responsive web design to mobile app development and beyond, we offer tailored services that elevate your brand and engage your audience. Join us on the journey to digital transformation and stay ahead of the competition.`}
          />
          <MemoizedOurExpertise
            text={
              <p>
                Proven Expertise in <br /> Digital Innovation and Development
              </p>
            }
          />

          {serviceCard.map((card, index) => {
            return (
              <div className="md:my-12 my-10" key={card.id}>
                <MemoizedServicesCard card={card} index={index} />
              </div>
            );
          })}
        </div>
      </MemoizedCustomLayOut>
    </>
  );
}
