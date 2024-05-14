import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";
import { AnimatedGradientButton } from "./buttonStyle";

const PrimaryButton = ({
  onClick,
  buttonText,
  buttonIcon,
  style,
  loading = false,
}) => {
  return (
    <AnimatedGradientButton
      onClick={onClick}
      buttonText={buttonText}
      style={style}
    >
      {loading ? (
        <CircularProgress color="success" sx={{ padding: "4px" }} />
      ) : (
        <div className="relative flex justify-center gap-x-2 items-center mx-6 my-3 z-10">
          <p>{buttonText || `Connect Us`}</p>
          {buttonIcon || (
            <ArrowForwardIcon
              style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
            />
          )}
        </div>
      )}
    </AnimatedGradientButton>
  );
};

export const MemoizedPrimaryButton = React.memo(PrimaryButton);
