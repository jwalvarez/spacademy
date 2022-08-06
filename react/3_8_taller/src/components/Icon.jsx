import React from "react";
import "./styles/Icon.css";

const Icon = ({ icon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="icon"
    >
      <path d={icon} />
    </svg>
  );
};

export default Icon;
