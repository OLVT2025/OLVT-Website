import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";

const OurExpertise = ({ title = "Our Expertise", text, style }) => {
  return (
    <div
      className="mx-auto flex flex-col justify-center  mb-7 mt-32"
      style={style}
    >
      {title && <MemoizedCustomTitle title={title} />}
      {text ? (
        <div className="md:max-w-4xl mt-4 mx-auto text-center text-md md:text-xl sm:text-3xl lg:text-5xl font-bold style">
          {text}
        </div>
      ) : null}
    </div>
  );
};

export const MemoizedOurExpertise = React.memo(OurExpertise);
