import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SecondaryButton = ({ onClick }) => {
  return (
    <motion.button
      className={`m-1 bg-primary-orange font-almarai font-normal px-4 py-2 text-white rounded-lg`}
      whileHover={{ width: "10rem" }} // Expands to full width when hovered
      style={{ overflow: "hidden" }} // Hides overflow
    >
      <motion.div
        className="button-content"
        initial={{ width: 0 }} // Initially hidden
        animate={{ width: "100%" }} // Smoothly expand to full width when hovered
        transition={{ duration: 0.3 }} // Smooth transition duration
        style={{ display: "flex", alignItems: "center" }}
      >
        <motion.span
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: 1 }} // Smoothly show when hovered
          transition={{ duration: 0.3, delay: 0.2 }} // Smooth transition duration with a slight delay
          style={{ marginRight: "0.5rem" }}
        >
          Learn More
        </motion.span>
        <ArrowForwardIcon
          style={{
            color: "white",
            width: "1.2rem",
            height: "1.2rem",
          }}
        />
      </motion.div>
    </motion.button>
  );
};

export const MemoizedSecondaryButton = React.memo(SecondaryButton);
