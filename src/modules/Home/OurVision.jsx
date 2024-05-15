import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import imageUrls from "@/constants/imageUrls";

const OurVision = () => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-center bg-cover my-12 py-12 px-2 h-[100%] md:h-[100vh]"
      style={{
        backgroundImage: `url(${imageUrls.vision})`,
      }}
    >
      <div className="flex flex-col max-w-7xl mx-auto  h-full justify-center items-center">
        <div className="">
          <MemoizedCustomTitle title={`Our Vision`} />
        </div>

        <h1 className="my-2 md:my-6 mx-auto text-center text-xl sm:text-5xl font-bold sm:w-2/3 bg-gradient-to-r from-[#FD8EA6] to-[#B28EFD] bg-clip-text text-transparent">
          Empowering Innovation in Product Development with Excellence
        </h1>
        <p className="mx-auto text-center font-normal text-accent-white text-base sm:w-2/3 my-2 md:my-6">
          At the forefront of innovation, we envision developing products that
          redefine industries, enrich lives, and inspire lasting change, fueled
          by creativity, expertise, and a relentless pursuit of excellence.
        </p>
      </div>
    </div>
  );
};

export const MemoizedOurVision = React.memo(OurVision);
