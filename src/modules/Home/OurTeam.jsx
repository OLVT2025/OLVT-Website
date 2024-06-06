import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import { MemoizedFounderCard } from "@/SDK/cards/FoundersCard";
import imageUrls from "@/constants/imageUrls";

const OurTeam = () => {
  return (
    <div className="sm:mt-36 mt-16  lg:max-w-7xl mx-auto">
      <MemoizedCustomTitle title={"Our Team"} />

      <div className="px-2 mt-8 sm:mt-12 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 ">
        <MemoizedFounderCard
          imageUrl={imageUrls.founder2}
          name="Abhishek Kharatmal"
          position="Co-Founder"
          experience="5+ yrs exp. in  business management, Finance & legal tech | MBA (NMIMS, Mumbai)"
        />

        <MemoizedFounderCard
          imageUrl={imageUrls.founder1}
          name="Nitin Katke"
          position="Co-Founder"
          experience="13 yrs exp. in Business Strategy & Consulting | MBA, NUS Singapore | M Tech, IIT Delhi"
        />
      </div>
    </div>
  );
};

// export default OurTeam;
export const MemoizedOurTeam = React.memo(OurTeam);
