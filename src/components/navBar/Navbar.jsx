import React from "react";
import LOGO from "../../assets/imgs/logo.png";
import "./navbar.css";

export const Navbar = ({ contactRef }) => {
  return (
    <nav>
      <img className="logo-main" src={LOGO} alt="Maiz" />

      <button
        onClick={() =>
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          })
        }
        className="btn z-idx"
      >
        Contact Me
      </button>
    </nav>
  );
};
