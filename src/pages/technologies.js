import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import { MemoizedFooter } from "@/modules/Layout/Footer";
import { MemoizedHeader } from "@/modules/Layout/Header";

export default function Technologies() {
  return (
    <div className="md:mx-40 !important">
      <MemoizedHeader />
      <div className="text-[#0A0A0A]">
        <MemoizedWelcomeSection
          title={
            "Navigate the Digital Landscape with Leading Tech-driven Solutions"
          }
          paragraph={`Our technology experts are at the forefront of innovation, leveraging AI, IoT, and blockchain to create transformative solutions. Join us in embracing the future and revolutionizing the way you do business in the digital age.`}
        />
        <MemoizedOurExpertise title="Technologies That  We Are Expert In" />

        {/* {serviceCard.map((card, index) => {
          return (
            <React.Fragment key={card.id}>
              <MemoizedServicesCard card={card} index={index} />
            </React.Fragment>
          );
        })} */}
      </div>
    </div>
  );
}
