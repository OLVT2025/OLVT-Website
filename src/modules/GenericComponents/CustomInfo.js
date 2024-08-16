import React from "react";

const CustomInfo = ({ title, info }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-base text font-bold">
       {title} :
      </h3>
      <p className="text-sm text-accent-black">{info}</p>
    </div>
  );
};

export const MemoizedCustomInfo = React.memo(CustomInfo);

