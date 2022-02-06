import React from "react";
import "./ButtonMain.css";

const ButtonMain = ({ text = "Text" }) => {
  return <button className="btn-main">{text}</button>;
};

export default ButtonMain;
