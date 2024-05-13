import { MemoizedTechnologiesCard } from "@/SDK/cards/TechnologiesCard";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import { MemoizedFooter } from "@/modules/Layout/Footer";
import { MemoizedHeader } from "@/modules/Layout/Header";
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
    <MemoizedCustomLayOut>
      <div className="md:mx-32  !important px-2 pt-44 md:pt-80">
        <MemoizedWelcomeSection
          title={
            "Navigate the Digital Landscape with Leading Tech-driven Solutions"
          }
          paragraph={`Our technology experts are at the forefront of innovation, leveraging AI, IoT, and blockchain to create transformative solutions. Join us in embracing the future and revolutionizing the way you do business in the digital age.`}
        />
        <MemoizedOurExpertise
          title="Technologies That  We Are Expert In"
          style={{ marginTop: "10rem" }}
        />
        <div className="mx-auto sm:mx-12 flex flex-col justify-center my-2">
          <div className="mt-14 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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
  );
}
