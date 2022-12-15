import "./LoginPage.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../AuthContext";

import { Form, Col, Row } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/Dashboard");
      alert("Logged in successfully!");
    } catch (err) {
      setError(error.message);
      console.log(error.message);
    }
  };

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     navigate("/");
  //     alert("You are logged out");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <>
      <section className="login">
        <h2 className="login__header">Login</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__fields">
            <label className="login__label">Email</label>
            <input
              className="login__input"
              value={email}
              type="email"
              required
              placeholder="example@email.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>

            <label className="login__label">Password</label>
            <input
              className="login__input"
              value={password}
              type="password"
              required
              placeholder="Please insert a secure password"
              onChange={(event) => {
                setPassword(event.target.value);
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
            <button className="login__login" id="login" type="submit">
              Log In
            </button>
          </div>
        </form>
        {/* <div className="login__button">
          <button
            onClick={handleLogout}
            className="login__logout"
            id="logout"
            type="submit"
          >
            Log Out
          </button>
        </div> */}

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
