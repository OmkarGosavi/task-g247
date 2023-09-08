import React from "react";
import "./Button.scss";

const Button = ({ isFocused }) => {
  return (
    <div className={`button-container ${isFocused ? "focused" : ""}`}>
      <div className="btn">VERIFY</div>
    </div>
  );
};

export default Button;
