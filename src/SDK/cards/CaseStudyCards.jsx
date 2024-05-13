import React from "react";
import { MemoizedPrimaryButton } from "../Buttons/PrimaryButton";

const CaseStudyCards = (props) => {
  const { data } = props;
  return (
    <div className="mx-auto md:w-full w-9/12 bg-accent-white border border-accent-white shadow-lg rounded-2xl relative overflow-hidden h-full">
      <div className="flex flex-col justify-center">
        <img
          src={data.imgUrl}
          alt={data.title}
          className={`w-full object-contain`}
        />
        <div className="flex flex-col justify-between px-4 md:px-4 lg:px-8 mt-4">
          <p className="text-accent-black font-bold md:text-xl lg:text-2xl text-base mb-2">
            {data.title}
          </p>
          <p className="text-xs md:text-md lg:text-base font-normal">
            {data.desc}
          </p>
        </div>
      </div>
      <div className="md:mx-2 md:py-4">
        <div className="flex justify-center primary-button  mt-2 mb-4 md:mb-2 md:mb-auto place-items-center">
          <MemoizedPrimaryButton
            buttonText="View Case Studies"
            onClick={() => {
              navigate("/services");
            }}
            style={{
              fontWeight: "400",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const MemoizedCaseStudyCards = React.memo(CaseStudyCards);
// {
//   id: 1,
//   title: "NSE- Corpositry Dashboard",
//   desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications. Our team of experienced developers is well-versed in React's capabilities and best practices, enabling us to deliver exceptional digital experiences tailored to your business needs.`,
//   imgUrl: "/images/caseStudy/NseDashboard.svg",
// },
