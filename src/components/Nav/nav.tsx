import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mobileMenu = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeOpenMenu = (e) => {
    console.log("close menu mousedown!");

    if (showMenu && !mobileMenu.current?.contains(e.target)) {
      setShowMenu(false); // hide the menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenu);
  }, []);

  const renderNavLinks = () => {
    return (
      <ul id={"nav-items-list"}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            <Box className="clickable-box">HOME</Box>
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={toggleMenu}>
            <Box className="clickable-box">ABOUT</Box>
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggleMenu}>
            <Box className="clickable-box">CONTACT US</Box>
          </Link>
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
          ref={mobileMenu}
        >
          {renderNavLinks()}
          <Box
            className="nav-mobile-menu-closer"
            id="nav-close"
            onClick={toggleMenu}
          >
            <IoClose />
          </Box>
        </Box>
        <Box className="nav-hamburger" id="nav-toggle" onClick={toggleMenu}>
          <IoMenuOutline />
        </Box>
      </Box>
    </nav>
  );
};

export default Nav;
