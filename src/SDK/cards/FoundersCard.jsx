import React from "react";

const FounderCard = ({ imageUrl, name, position, experience }) => {
  return (
    <div className="shadow-md rounded-3xl">
      <div className="flex justify-center">
        <img src={imageUrl} alt={name} className="w-full max-w-sm" />
      </div>
      <div className="p-6 flex flex-col gap-y-2">
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
        <p className="text-sm md:text-base text-accent-purple font-normal">{position}</p>
        <p className="text-sm md:text-base font-normal">{experience}</p>
      </div>
    </div>
  );
};

export const MemoizedFounderCard = React.memo(FounderCard);
