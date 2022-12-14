import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">{"{ communITy study }"}</div>
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
