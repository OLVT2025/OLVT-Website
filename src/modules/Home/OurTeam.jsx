import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import { MemoizedFounderCard } from "@/SDK/cards/FoundersCard";
import imageUrls from "@/constants/imageUrls";

const OurTeam = () => {
  return (
    <div className="mt-36  w-11/12 mx-auto">
      <MemoizedCustomTitle title={"Our Team"} />

      <div className="px-2 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MemoizedFounderCard
          imageUrl={imageUrls.founder1}
          name="Jeetendera Singh"
          position="Founder & CEO"
          experience="16 yrs exp. in Software Development. | Ex-Google  | MBA, IIM Delhi"
        />

        <MemoizedFounderCard
          imageUrl={imageUrls.founder1}
          name="Jeetendera Singh"
          position="Founder & CEO"
          experience="16 yrs exp. in Software Development. | Ex-Google  | MBA, IIM Delhi"
        />
        <MemoizedFounderCard
          imageUrl={imageUrls.founder1}
          name="Jeetendera Singh"
          position="Founder & CEO"
          experience="16 yrs exp. in Software Development. | Ex-Google  | MBA, IIM Delhi"
        />
      </div>
    </div>
  );
};

// export default OurTeam;
export const MemoizedOurTeam = React.memo(OurTeam);
