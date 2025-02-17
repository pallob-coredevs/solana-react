/* eslint-disable react/prop-types */
import { useState } from "react";
import Eye from "./assets/eye.svg?react";
import EyeClosed from "./assets/eyeClosed.svg?react";

const Input = ({
  variant = "input-primary",
  name,
  label,
  placeholder = "",
  type = "text",
  icon,
  iconPosition = "right",
  className = "",
  field,
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-white text-sm font-semibold">{label}</label>
      )}
      <div className={`relative flex items-center justify-center ${className}`}>
        {icon && iconPosition === "left" && (
          <span className="absolute left-3">{icon}</span>
        )}
        <input
          {...field}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className={variant}
        />
        {type === "password" ? (
          <span className="absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
            {inputType === "password" ? <EyeClosed /> : <Eye />}
          </span>
        ) : (
          icon &&
          iconPosition === "right" && (
            <span className="absolute right-3 cursor-pointer">{icon}</span>
          )
        )}
      </div>
    </div>
  );
};

export default Input;
