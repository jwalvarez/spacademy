import React from "react";
import "./styles/Icon.css";

const Icon = ({ iconObj, setPerfilInfo }) => {
  const changeInfo = () => {
    setPerfilInfo(iconObj);
  };

  return (
    <span onClick={changeInfo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="icon"
      >
        <path d={iconObj.d} />
      </svg>
    </span>
  );
};

export default Icon;
