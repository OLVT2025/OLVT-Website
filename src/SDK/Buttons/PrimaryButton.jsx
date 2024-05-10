import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";
// import "./PrimaryButton.css";

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
      className={`m-1 bg-primary-orange font-almarai font-bold  text-white rounded-lg primary-button-animation ${
        buttonText == "Submit" ? "w-full" : ""
      }`}
    >
      {loading ? (
        <CircularProgress color="success" sx={{ padding: "4px" }} />
      ) : (
        <div className="flex justify-center gap-x-2 items-center mx-6 my-3 ">
          <p className="text-[1rem]">{buttonText || `Connect Us`}</p>
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
