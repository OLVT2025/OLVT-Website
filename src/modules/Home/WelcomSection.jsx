import React from "react";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { scrollToFooter } from "@/utils/scrollToFooter";

const WelcomeSection = ({ title, paragraph, imageUrls }) => {
  return (
    <div className=" text-center mx-auto">
      <div className=" mb-7 mx-auto text-center text-xl md:text-3xl lg:text-5xl font-bold md:max-w-5xl">
        <div className="bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
          {title}
        </div>
      </div>

      <p className="my-7 mx-auto text-center font-normal text-xs sm:text-base max-w-sm md:max-w-lg lg:max-w-2xl">
        {paragraph}
      </p>
    
      <MemoizedPrimaryButton onClick={scrollToFooter} />
      {imageUrls ? (
        <img
          className="mx-auto sm:max-w-4/5 mt-8"
          src={imageUrls.laptop}
          alt="laptop"
        />
      ) : null}
    </div>
  );
};

export const MemoizedWelcomeSection = React.memo(WelcomeSection);
