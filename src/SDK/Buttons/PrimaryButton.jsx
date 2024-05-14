import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";

const PrimaryButton = ({
  onClick,
  buttonText,
  buttonIcon,
  style,
  loading = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 5000);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`m-1 font-almarai font-normal md:font-bold text-sm md:text-base text-white rounded-lg relative overflow-hidden ${
        buttonText === "Submit" ? "w-full" : ""
      }`}
      style={style}
    >
      {loading ? (
        <CircularProgress color="success" sx={{ padding: "4px" }} />
      ) : (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isHovered
                ? `from-[#FFD60C] to-[#F15D27] bg-clip-padding text-transparent animate-pulse`
                : "bg-primary-orange"
            }  `}
          ></div>
          <div className="relative flex justify-center gap-x-2 items-center mx-6 my-3 z-10">
            <p className="">{buttonText || `Connect Us`}</p>
            {buttonIcon || (
              <ArrowForwardIcon
                style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
              />
            )}
          </div>
        </>
      )}
    </button>
  );
};

export const MemoizedPrimaryButton = React.memo(PrimaryButton);
