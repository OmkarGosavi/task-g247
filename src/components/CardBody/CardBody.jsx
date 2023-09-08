import React, { useState } from "react";
import "./CardBody.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const CardBody = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="card-body-container">
      <div className="image-container">
        <img src="./pan-demo.jpg" alt="pan-dummy" />
      </div>
      <div className="form-conatiner">
        <Input isFocused={isFocused} onFocus={handleFocus} onBlur={handleBlur} />
        <Button isFocused={isFocused} />
      </div>
    </div>
  );
};

export default CardBody;
