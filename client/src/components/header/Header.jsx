import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

export default function Header() {
  const pages = ["Home", "About", "Events"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <section className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">LOGO</div>
          <h3 className="navbar__title">Home</h3>
          <h3 className="navbar__title">About</h3>
          <h3 className="navbar__title">Events</h3>
        </div>

        <div className="navbar__right">
          <button className="navbar__login">
            <Link className="navbar__login-button" to={`loginPage`}>
              Log In
            </Link>
          </button>
          <button className="navbar__signup">
            <Link className="navbar__signup-button" to={`signUpPage`}>
              Sign Up
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
