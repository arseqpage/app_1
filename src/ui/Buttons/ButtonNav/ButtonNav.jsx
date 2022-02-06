import React from "react";
import "./ButtonNav.css";

const ButtonNav = ({ text = "Text" }) => {
  return <button className="btn-nav">{text}</button>;
};

export default ButtonNav;
