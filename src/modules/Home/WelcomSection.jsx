import React, { useEffect, useState } from "react";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { scrollToFooter } from "@/utils/scrollToFooter";
import styled from "styled-components";
import { keyframes } from "styled-components";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const AnimatedGradientText = styled.h1`
  ${"" /* background-image: linear-gradient(90deg, #fed175, #fd8ea6); */}
  ${"" /* color: #f35626; */}
  background-image: -webkit-linear-gradient(180deg, #fed175, #fd8ea6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 5s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    ${
      "" /* sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    }
  font-feature-settings: "kern";
  ${"" /* font-size: 48px; */}
  ${"" /* font-weight: 700; */}
  ${"" /* line-height: 48px; */}
  ${"" /* overflow-wrap: break-word; */}
  ${"" /* text-align: center; */}
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;

  &.gradient-1 {
    background-image: linear-gradient(90deg, #fed175, #fd8ea6);
  }

  &.gradient-2 {
    background-image: linear-gradient(90deg, #fd8ea6, #b28efd);
  }

  &.gradient-3 {
    background-image: linear-gradient(90deg, #b28efd, #62ff48);
  }

  &.gradient-4 {
    background-image: linear-gradient(90deg, #62ff48, #fec082);
  }

  &.gradient-5 {
    background-image: linear-gradient(90deg, #b28efd, #fec082);
  }
`;

const WelcomeSection = ({ title, paragraph, imageUrls }) => {
  return (
    <div className=" text-center mx-auto">
      <div className=" mb-7  mx-auto text-center text-xl md:text-3xl lg:text-5xl font-bold md:max-w-5xl">
        <AnimatedGradientText> {title}</AnimatedGradientText>
      </div>

      <p className="my-7 mx-auto text-center font-normal text-xs sm:text-base max-w-sm md:max-w-lg lg:max-w-4xl">
        {paragraph}
      </p>

      <MemoizedPrimaryButton onClick={scrollToFooter} />
      {imageUrls ? (
        <img
          className="mx-auto sm:max-w-4/5 mt-8"
          src={imageUrls.laptop}
          alt="laptop"
        />
      ) : null}
    </div>
  );
};

export const MemoizedWelcomeSection = React.memo(WelcomeSection);
