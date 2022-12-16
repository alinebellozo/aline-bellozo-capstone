import "./Header.scss";

import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout, createUserWithEmailAndPassword } = UserAuth();

  const clickLogin = () => {
    if (user) {
      logout();
      alert("Signed out successfully!");
      navigate("/");
    } else {
      navigate("/loginPage");
    }
  };

  const clickSignUp = () => {
    if (user !== null) {
      // logout();
    } else {
      navigate("/signUpPage");
    }
  };

  return (
    <>
      <section className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">
            <a className="navbar__logo-link" href="/">
              {"{ communITy study }"}
            </a>
          </div>
          <h3 className="navbar__title">
            <a className="navbar__title-link" href="/">
              Home
            </a>
          </h3>
          <h3 className="navbar__title">
            <a className="navbar__title-link" href="/Events.jsx">
              Events
            </a>
          </h3>
          <h3 className="navbar__title">
            <a className="navbar__title-link" href="/About.jsx">
              About
            </a>
          </h3>
        </div>

        <div className="navbar__right">
          <button onClick={clickLogin} className="navbar__login">
            {user ? "Sign Out" : "Login"}
          </button>
          <button onClick={clickSignUp} className="navbar__signUp">
            {user ? "Dashboard" : "Sign Up"}
          </button>
        </div>
      </section>
    </>
  );
}
