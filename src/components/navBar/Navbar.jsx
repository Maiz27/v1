import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LOGO from "../../assets/imgs/2.png";
import "./navbar.css";

export const Navbar = ({ active }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={LOGO}
        alt="Maiz"
      />

      <ul className="nav">
        <li>
          <Link
            to="/"
            className={active === "home" ? "nav-links active" : "nav-links"}
          >
            {/* <ImHome className={active === "home" ? "active" : ""} /> */}
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about/skills"
            className={active === "about" ? "nav-links active" : "nav-links"}
          >
            {/* <FaUser className={active === "about" ? "active" : ""} /> */}
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={
              active === "projects" ? "nav-links active last" : "nav-links last"
            }
          >
            {/* <RiCodeBoxFill className={active === "projects" ? "active" : ""} /> */}
            Projects
          </Link>
        </li>
      </ul>

      <div onClick={() => handleNav()} className="nav-menu-option">
        {nav ? (
          <AiOutlineClose
            className="dark:text-gray-300 text-black-bg mr-1"
            size={30}
          />
        ) : (
          <AiOutlineMenu
            className="dark:text-gray-300 text-black-bg mr-1"
            size={30}
          />
        )}
      </div>

      {nav && (
        <div className="nav-menu-open">
          <ul>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/"
                className={active === "home" ? "nav-links active" : "nav-links"}
              >
                {/* <ImHome className={active === "home" ? "active" : ""} /> */}
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/about/skills"
                className={
                  active === "about" ? "nav-links active" : "nav-links"
                }
              >
                {/* <FaUser className={active === "about" ? "active" : ""} /> */}
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(false)}
                to="/projects"
                className={
                  active === "projects" ? "nav-links active" : "nav-links"
                }
              >
                {/* <RiCodeBoxFill
                className={active === "projects" ? "active" : ""}
              /> */}
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
