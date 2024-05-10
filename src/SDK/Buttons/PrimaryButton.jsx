import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";

const PrimaryButton = ({
  onClick,
  buttonText,
  buttonIcon,
  style,
  loading = false,
}) => {
  
  return (
    <button
      onClick={onClick}
      className={`m-1 bg-primary-orange font-almarai font-normal md:font-bold text-sm md:text-base text-white rounded-lg hover-animation ${
        buttonText === "Submit" ? "w-full" : ""
      }`}
    >
      {loading ? (
        <CircularProgress color="success" sx={{ padding: "4px" }} />
      ) : (
        <div className="flex justify-center gap-x-2 items-center mx-6 my-3">
          <p className="">{buttonText || `Connect Us`}</p>
          {buttonIcon || (
            <ArrowForwardIcon
              style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
            />
          )}
        </div>
      )}
    </button>
  );
};

export const MemoizedPrimaryButton = React.memo(PrimaryButton);
