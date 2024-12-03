import React from "react";
import cn from "../../utils/cn";

const PurpleBackground = ({ isLoading, additionalStyles, children }) => {
  return (
    <div
      className={cn(
        `min-h-screen w-full bg-black flex-center`,
        additionalStyles
      )}
    >
      {children}
    </div>
  );
};

export default PurpleBackground;
