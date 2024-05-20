import React from "react";

const CustomLayOut = ({ children }) => {
  return (
    <div
      className=" bg-fixed mb-32 bg-no-repeat"
      style={{
        backgroundImage: `url(/images/map.svg)`,
        backgroundSize: "80% auto",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export const MemoizedCustomLayOut = React.memo(CustomLayOut);
