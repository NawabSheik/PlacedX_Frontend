import React from "react";
import cn from "../../utils/cn";

const SlateBackground = ({ children, additionalStyles }) => {
  return (
    <div
      className={cn(
        `bg-black shadow-slate-300 shadow-md`,
        additionalStyles
      )}
    >
      {children}
    </div>
  );
};

export default SlateBackground;
