import React from "react";
import { MemoizedPrimaryButton } from "../Buttons/PrimaryButton";
import { useRouter } from "next/router";

const CaseStudyCards = ({ data, isButton = false }) => {
  const navigate = useRouter();
  return (
    <div className="mx-auto md:w-full  w-11/12 sm:w-9/12 bg-accent-white border border-accent-white shadow-lg rounded-3xl relative overflow-hidden h-full">
      <div className="flex flex-col justify-center">
        <div className="w-full h-64 md:h-80  rounded-3xl">
          <img
            src={data.imgUrl}
            alt={data.title}
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-between px-4 md:px-4 lg:px-8 mt-6">
          <p className="text-accent-black font-bold md:text-xl lg:text-2xl text-lg mb-2">
            {data.title}
          </p>
          <p className="text-sm md:text-md lg:text-base font-normal">
            {data.desc}
          </p>
        </div>
      </div>

      <div className={`md:mx-2  ${isButton == false ? "py-4" : "md:py-4"}`}>
        {isButton && (
          <div className="flex justify-center  mt-2 mb-2 md:mb-2  place-items-center">
            <MemoizedPrimaryButton
              buttonText="View Case Studies"
              onClick={() => {
                localStorage.setItem(
                  "caseStudyID",
                  JSON.stringify(data?.caseStudyID)
                );
                const caseStudyName = data.title
                  .toLowerCase()
                  ?.split(" ")
                  ?.join("-");
                navigate.push(`/case-studies/${caseStudyName}`);
              }}
              style={{
                fontWeight: "400",
                fontSize: "16px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const MemoizedCaseStudyCards = React.memo(CaseStudyCards);
