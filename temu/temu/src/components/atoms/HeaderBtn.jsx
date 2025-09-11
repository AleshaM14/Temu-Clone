import React from "react";
import "./HeaderBtn.css";

const HeaderBtn = ({ text, onClick }) => {
  return (
    <button className="header-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default HeaderBtn;
