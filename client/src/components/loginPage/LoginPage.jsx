import "./LoginPage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Col, Row } from "react-bootstrap";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <section className="login">
        <h2 className="login__header">Login</h2>
        <form className="login__form">
          <div className="login__fields">
            <label className="login__label">Email</label>
            <input
              className="login__input"
              value={loginEmail}
              type="email"
              required
              placeholder="example@email.com"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            ></input>

            <label className="login__label">Password</label>
            <input
              className="login__input"
              value={loginPassword}
              type="password"
              required
              placeholder="Please insert a secure password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            ></input>
          </div>

          <Form.Group as={Row} className="signup__remember">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <div className="login__button">
            <button className="login__cancel" id="cancel" type="submit">
              <Link className="login__cancel-link" to={`/`}>
                Cancel
              </Link>
            </button>
            <button
              onClick={login}
              className="login__login"
              id="login"
              type="submit"
            >
              Log In
            </button>
            <button
              onClick={logout}
              className="login__logout"
              id="logout"
              type="submit"
            >
              Log Out
            </button>
          </div>
        </form>

        <div className="login__new-account">
          Don't have an account?
          <Link className="login__new-link" to={`/signUpPage`}>
            Sign Up!
          </Link>
        </div>
      </section>
    </>
  );
}
