import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";

const OurExpertise = ({ title = "Our Expertise", text, style }) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center  my-12">
      <MemoizedCustomTitle title={title} />
      {text ? (
        <p className="mt-4 mx-auto text-center text-2xl md:text-5xl font-bold sm:w-2/3 style">
          {text}
        </p>
      ) : null}
    </div>
  );
};

export const MemoizedOurExpertise = React.memo(OurExpertise);
