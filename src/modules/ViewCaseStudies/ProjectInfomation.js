import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import { MemoizedCustomInfo } from "../GenericComponents/CustomInfo";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { useRouter } from "next/router";


 
const ProjectInformation = ({ projectInfo,   pdfLink}) => {
  const navigate = useRouter();
  return (
    <div className= "px-2 py-6 m-2">
      <div className="flex justify-start">
      <MemoizedCustomTitle title="Project Information" />
        </div>
      <div className="flex flex-col gap-5 py-4">
        {projectInfo?.map((detail, index) => (
          <MemoizedCustomInfo key={index} title={detail.title} info={detail.info} />
        ))}

<div className={`md:mx-2  ${ !pdfLink  ? "py-4" : "md:py-4"}`}>
        {pdfLink && (
          <div className="flex justify-start  mt-2 mb-2 md:mb-2  place-items-center">
            <MemoizedPrimaryButton
              buttonText="View Case Studies"
              onClick={() => {
               
                window.open(pdfLink, "_blank");
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
    </div>
  );
};

export default ProjectInformation;
