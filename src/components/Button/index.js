import React from "react";
import "./button.scss";

const Button = ({ disabled = false, onClick, children }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
