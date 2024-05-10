import React from "react";
import { MemoizedSecondaryButton } from "@/SDK/Buttons/SecondaryButton";

const ExpertiseCard = ({ title, description, imageUrl }) => {
  return (
    <div className="px-5 border border-accent-white  shadow-lg rounded-2xl py-9 ">
      <div className="flex mb-2 justify-between">
        <p className="text-accent-black font-bold text-xl">{title}</p>
        <img src={imageUrl} alt={title} className="w-12 h-12" />
      </div>

      <p className="mb-3 text-base font-normal text-accent-grey">
        {description}
      </p>

      <MemoizedSecondaryButton buttonText="Learn More" />
    </div>
  );
};

export const MemoizedExpertiseCard = React.memo(ExpertiseCard);
