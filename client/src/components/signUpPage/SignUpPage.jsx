import "./SignUpPage.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function SignUpPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (registerPassword !== "" && registerPasswordConfirm !== "") {
      if (registerPassword !== registerPasswordConfirm) {
        isValid = false;
        setError("Passwords do not match");
      }
    }
    return isValid;
  };

  const signUp = (event) => {
    event.preventDefault();
    setError("");

    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((res) => {
          console.log(res.user);
          setRegisterEmail("");
          setRegisterPassword("");
          setRegisterPasswordConfirm("");
          
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <>
      <section className="signup">
        <h2 className="signup__header">Sign Up</h2>
        {error && <div className="signup__error">{error}</div>}
        <form onSubmit={signUp} className="signup__form">
          <div className="signup__fields">
            <label className="signup__label">Email</label>
            <input
              className="signup__input"
              value={registerEmail}
              type="email"
              required
              placeholder="example@email.com"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            ></input>

            <label className="signup__label">Password</label>
            <input
              className="signup__input"
              value={registerPassword}
              type="password"
              required
              placeholder="Please insert a secure password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            ></input>
            <label className="signup__label">Confirm Password</label>
            <input
              className="signup__input"
              value={registerPasswordConfirm}
              type="password"
              required
              placeholder="Please confirm the password"
              onChange={(event) => {
                setRegisterPasswordConfirm(event.target.value);
              }}
            ></input>
          </div>
          <div className="signup__button">
            <button className="signup__cancel" id="" type="submit">
              Cancel
            </button>
            <button className="signup__signup" id="" type="submit">
              Sign Up
            </button>
          </div>
        </form>

        <div className="">
          Already have an account?
          <Link className="" to={`/loginPage`}>
            Log In
          </Link>
        </div>
      </section>
    </>
  );
}