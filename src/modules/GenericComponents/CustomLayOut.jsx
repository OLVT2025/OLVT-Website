import React, { useState, useEffect } from "react";

const CustomLayOut = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(/images/map.svg)`,
    backgroundSize: isMobile ? "100% auto" : "70% auto",
    backgroundPosition: "center",
    
  };



  return (
    <div
      className="bg-fixed mb-32 bg-no-repeat"
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export const MemoizedCustomLayOut = React.memo(CustomLayOut);
