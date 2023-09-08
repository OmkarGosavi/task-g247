import React from "react";
import "./Heading.scss";

const Heading = () => {
  return (
    <div className="heading-container">
      <div className="icon-conatiner">
        <img src="./verify-icon.png" alt="" />
      </div>
      <div className="title-conatiner">
        <div className="title">PAN Verification</div>
        <div className="sub-title">
          As per regulations, it is mandatory to verify your PAN details.
        </div>
      </div>
    </div>
  );
};

export default Heading;
