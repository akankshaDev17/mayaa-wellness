import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import mayaLogo from "../assets/Mayaa_Logo.svg";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleExpertClick = () => {
    console.log("Talk to an Expert clicked");
  };

  return (
    <nav className="bg-[#E8F8F5] px-8 py-3 sticky top-0 z-50">
      <div className="flex justify-between items-center sm:ml-15 sm:mr-8">
        <Link to="/" className="flex items-center ml-[-1rem]">
          <img src={mayaLogo} alt="Mayaa_Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 ">
          <NavLink
            to="/about"
            className="text-[#001F33] hover:text-[#1FA766] font-urbanistSemiBold text-sm md:text-base lg:text-lg"
          >
            About Us
          </NavLink>
          <NavLink
            to="/features"
            className="text-[#001F33] hover:text-[#1FA766] font-urbanistSemiBold text-sm md:text-base lg:text-lg"
          >
            Features & Benefits
          </NavLink>
          <NavLink
            to="/plans"
            className="text-[#001F33] hover:text-[#1FA766] font-urbanistSemiBold text-sm md:text-base lg:text-lg"
          >
            Plans
          </NavLink>

          <button
            className="font-gilroyMedium cursor-pointer flex items-center gap-1 md:gap-2 lg:gap-3 bg-[#21B573] text-white text-xs md:text-sm lg:text-lgpx-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full"
            style={{
              boxShadow: "6px 6px 0 #B8F5D2",
            }}
            onClick={handleExpertClick}
          >
            <span
              role="img"
              aria-label="expert"
              className="text-lg md:text-xl lg:text-2xl"
            >
              🧑‍🚀
            </span>
            Talk to Expert
          </button>
        </div>

        <div className="flex items-center md:hidden gap-4 mr-[-1.2rem]">
          <button
            className="font-gilroyMedium flex items-center  bg-[#21B573] text-white 
             text-sm sm:text-lg font-light px-3 py-1 sm:px-6 sm:py-3 
             rounded-full relative shadow-none"
            style={{
              boxShadow: "6px 6px 0 #B8F5D2",
            }}
            onClick={handleExpertClick}
          >
            <span role="img" aria-label="expert" className="text-2xl">
              🧑‍🚀
            </span>
            Talk to an Expert
          </button>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={open ? handleMenuClose : handleMenuOpen}
            className="text-[#001F33]"
          >
            {open ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              style: { marginTop: "10px" },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/about"
                className="text-[#001F33] font-urbanistSemiBold"
              >
                About Us
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/features"
                className="text-[#001F33] font-urbanistSemiBold"
              >
                Features & Benefits
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink
                to="/plans"
                className="text-[#001F33] font-urbanistMedium"
              >
                Plans
              </NavLink>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Header;
