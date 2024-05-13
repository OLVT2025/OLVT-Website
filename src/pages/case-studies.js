import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import React from "react";

const CaseStudies = () => {
  return (
    <MemoizedCustomLayOut>
      <div className="md:mx-32 !important px-2 pt-44 md:pt-96">
        <MemoizedWelcomeSection
          title={
            <p>
              Explore How We've Helped Businesses Thrive With Remarkable Results
            </p>
          }
          paragraph={`Uncover the stories behind our successful projects and learn how we've helped businesses like yours achieve their digital goals. Our case studies provide valuable insights and inspiration for your own digital initiatives.`}
        />
        <MemoizedOurExpertise
          title="Real-world Success Stories"
          text={
            <p>
              Witness the Transformative Journey of <br/> Our Clients'
              Success
            </p>
          }
        />
      </div>
    </MemoizedCustomLayOut>
  );
};

export default CaseStudies;
