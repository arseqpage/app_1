import React from "react";
import "./ButtonSecondary.css";

const ButtonSecondary = ({ text = "Text" }) => {
  return <button className="btn-secondary">{text}</button>;
};

export default ButtonSecondary;
