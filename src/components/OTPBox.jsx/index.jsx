/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const OTPBox = ({ onChange }) => {
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [filledIndexes, setFilledIndexes] = useState(new Set());
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) {
      e.target.value = "";
      return;
    }

    setFilledIndexes((prev) => {
      const newSet = new Set(prev);
      if (value) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      return newSet;
    });

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    onChange(newOtpValues.join(""));

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{4}$/.test(pastedData)) {
      const newSet = new Set();
      const newOtpValues = pastedData.split("");
      setOtpValues(newOtpValues);
      onChange(newOtpValues.join(""));

      newOtpValues.forEach((char, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index].value = char;
        }
        newSet.add(index);
      });

      setFilledIndexes(newSet);

      inputRefs.current[
        Math.min(pastedData.length, inputRefs.current.length) - 1
      ].focus();
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-13"
      onPaste={handlePaste}
    >
      {otpValues.map((_, index) => (
        <input
          key={index}
          type="text"
          className={`input-otp ${
            focusedIndex === index || filledIndexes.has(index)
              ? "!border-button-background-primary"
              : "!border-border-secondary"
          }`}
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          value={otpValues[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
        />
      ))}
    </div>
  );
};

export default OTPBox;
