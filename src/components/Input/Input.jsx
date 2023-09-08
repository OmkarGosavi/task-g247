import React, { useState } from "react";
import "./Input.scss";

const Input = ({ isFocused, onFocus, onBlur }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // 10 characters
    if (inputValue.length > 10) {
      setInputValue(inputValue.slice(0, 10));
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        maxLength={10}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className="input-tag">{inputValue.length}/10</div>
      <div className={`label ${isFocused ? "focused" : ""}`}>Enter 10-digit PAN</div>
    </div>
  );
};

export default Input;
