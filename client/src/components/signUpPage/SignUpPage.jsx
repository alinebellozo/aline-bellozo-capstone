import "./SignUpPage.scss";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Col, Row } from "react-bootstrap";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (registerPassword !== "" && registerPasswordConfirm !== "") {
      if (registerPassword !== registerPasswordConfirm) {
        isValid = false;
        setError("Passwords do not match!");
      }
    }
    return isValid;
  };

  const signUp = (event) => {
    event.preventDefault();
    setError("");

    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((res) => {
          console.log(res.user);
          setRegisterEmail("");
          setRegisterPassword("");
          setRegisterPasswordConfirm("");
        })
        .catch((err) => setError(err.message));

      navigate("/FormPage");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="signup__left">
          <h2 className="signup__header">Sign Up</h2>
          <form onSubmit={signUp} className="signup__form">
            {error && <div className="signup__error">{error}</div>}
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
            <Form.Group as={Row} className="signup__remember">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
            <div className="signup__button">
              <button className="signup__cancel" id="cancel" type="submit">
                <Link className="signup__cancel-link" to={`/`}>
                  Cancel
                </Link>
              </button>
              <button className="signup__signup" id="signup" type="submit">
                Sign Up
              </button>
            </div>

            <div className="signup__account-exists">
              Already have an account?
              <Link className="signup__account-link" to={`/loginPage`}>
                Log In
              </Link>
            </div>
          </form>
        </div>

        {/* <div className="signup__right">
          <div className="signup__image-right">
            <img
              className="signup__image"
              src="../assets/images/networking.png"
              alt=""
            />
          </div>
        </div> */}
      </section>
    </>
  );
}
