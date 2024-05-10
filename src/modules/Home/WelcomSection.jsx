import React from "react";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { scrollToFooter } from "@/utils/scrollToFooter";

const WelcomeSection = ({ title, paragraph, imageUrls }) => {
  return (
    <div className=" text-center mx-auto">
      <h1 className="mt-16 md:mt-32 mb-7 mx-auto text-center  text-xl sm:text-5xl font-bold sm:w-10/12 bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h1>

      <p className="my-7 mx-auto text-center font-normal text-base sm:w-1/2">
        {paragraph}
      </p>

      <MemoizedPrimaryButton onClick={scrollToFooter} />
      {imageUrls ? (
        <img className="mx-auto sm:w-4/5" src={imageUrls.laptop} alt="laptop" />
      ) : null}
    </div>
  );
};

export const MemoizedWelcomeSection = React.memo(WelcomeSection);
