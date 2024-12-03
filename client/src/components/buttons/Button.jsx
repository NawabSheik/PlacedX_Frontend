import React from "react";
import cn from "../../utils/cn";
import { Loader } from "lucide-react";

const Button = ({
  isLoading,
  label,
  onClickHandler,
  additionalStyles,
  type,
  color,
}) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={cn(
        "text-sm text-white py-2.5 px-3 rounded flex-center gap-2 transition-colors duration-200 font-medium",
        color === "black"
          ? "bg-black hover:bg-gray-600"
          : "bg-black hover:bg-gray-600",
        additionalStyles
      )}
      disabled={isLoading}
    >
      {label}
      {isLoading && <Loader size={16} className="animate-spin" />}
    </button>
  );
};

export default Button;
