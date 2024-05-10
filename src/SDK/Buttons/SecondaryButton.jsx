import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import "./PrimaryButton.css";

const SecondaryButton = ({ onClick, buttonText, buttonIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`m-1 bg-primary-orange font-almarai font-normal px-4 py-2 text-white rounded-lg primary-button-animation `}
    >
      {/* "Learn More" text with transition */}
      <span className={`${isHovered ? "mr-2" : ""}`}>
        {isHovered ? `Learn More` : ``}
      </span>

      {/* Arrow icon */}
      <span>
        <ArrowForwardIcon
          style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
        />
      </span>
    </button>
  );
};

export const MemoizedSecondaryButton = React.memo(SecondaryButton);
