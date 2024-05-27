import { MemoizedTechnologiesCard } from "@/SDK/cards/TechnologiesCard";
import imageUrls from "@/constants/imageUrls";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";
import React from "react";

const techData = [
  {
    id: 1,
    icon: "/images/technologies/ReactIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 2,
    icon: "/images/technologies/ExpressIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 3,
    icon: "/images/technologies/MongoIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 4,
    icon: "/images/technologies/NodeIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 5,
    icon: "/images/technologies/AwsIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 6,
    icon: "/images/technologies/GCPIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 7,
    icon: "/images/technologies/DockerIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 8,
    icon: "/images/technologies/PostmanIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 9,
    icon: "/images/technologies/NextIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
];

export default function Technologies() {
  return (
    <>
      <Head>
        <title>Technologies We Use - Orange LVT</title>
        <meta
          name="description"
          content="Explore the technologies Orange LVT specializes in, including React JS, Express, MongoDB, Node.js, AWS, GCP, Docker, Postman, Next.js, and more. Top technology company utilizing cutting-edge tech for software development."
        />
        <meta
          name="keywords"
          content="technologies, React JS, Express, MongoDB, Node.js, AWS, GCP, Docker, Postman, Next.js, technology company, software development, tech solutions, digital innovation"
        />
        <meta name="url" content="https://www.orangeleague.in/technologies" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/technologies" />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>

      <MemoizedCustomLayOut>
        <div className="mx-2 sm:max-w-6xl lg:mx-auto font-almarai  !important px-2 pt-44  md:pt-52">
          <MemoizedWelcomeSection
            title={
              "Navigate the Digital Landscape with Leading Tech-driven Solutions"
            }
            paragraph={`Our technology experts are at the forefront of innovation, leveraging AI, IoT, and blockchain to create transformative solutions. Join us in embracing the future and revolutionizing the way you do business in the digital age.`}
          />
          <div className="sm:pt-16">

          <MemoizedOurExpertise
            title="Technologies That  We Are Expert In"
            // style={{ marginTop: "10rem" }}
            />
            </div>
          <div className="mx-auto  sm:mx-12 flex flex-col justify-center my-2">
            <div className="mt-7 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {techData.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <MemoizedTechnologiesCard data={data} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </MemoizedCustomLayOut>
    </>
  );
}
