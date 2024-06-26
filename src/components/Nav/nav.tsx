import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggledOpen = (buttonType: String) => {
    if (window.innerWidth <= 1150) {
      if (buttonType === "openButton") {
        console.log("openButton!");
        return !showMenu ? { display: "flex" } : { display: "none" };
      } else if (buttonType === "closeButton") {
        console.log("closeButton!");
        return showMenu ? { display: "flex" } : { display: "none" };
      }
    }

    console.log("neither!");
    return { display: "none" };
  };

  const renderNavLinks = () => {
    return (
      <ul id={"nav-items-list"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    );
  };

  return (
    <nav id="nav">
      <Box
        id="nav-container"
        fontFamily="Raleway"
        fontWeight="extrabold"
        color="pink"
      >
        <Box id="navbar-section">
          <Flex marginLeft="30px"> GARUDA LABS </Flex>
        </Box>
        {/* Toggeable section in mobile menu */}
        <Box
          id="nav-items"
          className={showMenu ? "expanded_nav_bar" : "hidden_nav_bar"}
        >
          {renderNavLinks()}
          {/* <Box
            className="nav-mobile-menu-closer"
            id="nav-close"
            style={toggledOpen("closeButton")}
            onClick={toggleMenu}
          >
            <IoClose />
          </Box> */}
        </Box>
        {/* <Box
          className="nav-hamburger"
          id="nav-toggle"
          style={toggledOpen("openButton")}
          onClick={toggleMenu}
        >
          <IoMenuOutline />
        </Box> */}
      </Box>
    </nav>
  );
};

export default Nav;
