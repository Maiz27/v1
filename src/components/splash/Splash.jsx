import React from "react";
import logo from "../../assets/imgs/logo.png";
import "./splash.css";

export const Splash = () => {
  return (
    <div className="splash">
      <div className="logo-fade">
        <img src={logo} alt="logo" className="logo-animate" />
      </div>
    </div>
  );
};
