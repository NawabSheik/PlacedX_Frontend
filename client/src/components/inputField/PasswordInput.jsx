import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import cn from "../../utils/cn";

const PasswordInput = ({
  placeholder,
  inputFieldStyle,
  errorMessageStyle,
  labelClass,
  inputFieldContainerStyles,
  handlePassChange,
  labelName,
  label,
  ref,
  validationObj,
  error,
}) => {
  const [showPass, setShowPass] = useState(false);
  function togglePassHide() {
    setShowPass((prev) => !prev);
  }

  return (
    <div className={cn(inputFieldContainerStyles, "flex flex-col gap-1")}>
      <label
        htmlFor={labelName}
        className={cn(labelClass, "text-sm font-medium ml-2")}
      >
        {label}
      </label>

      <div
        className={cn(
          inputFieldStyle ? inputFieldStyle : "h-10 w-full",
          " border focus-within:border-neutral-900 border-neutral-500 focus-within:bg-neutral-100 text-sm rounded flex-center"
        )}
      >
        <input
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          onChange={handlePassChange}
          {...validationObj}
          className="w-11/12 h-full outline-none focus:bg-neutral-100 pl-3 rounded font-medium"
        />

        <button onClick={togglePassHide}>
          {showPass ? (
            <AiFillEyeInvisible size={25} className="mx-2" />
          ) : (
            <AiFillEye size={25} className="mx-2" />
          )}
        </button>
      </div>

      <p
        className={cn(
          errorMessageStyle ? errorMessageStyle : "text-red-500 text-xs",
          " ml-2"
        )}
      >
        {" "}
        {error}
      </p>
    </div>
  );
};

export default PasswordInput;
