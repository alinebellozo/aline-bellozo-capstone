import "./LoginPage.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../AuthContext";

import { Form, Col, Row } from "react-bootstrap";

import WorldConnections from "../../assets/images/world-connection.svg";

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

  return (
    <>
      <section className="login">
        <form onSubmit={handleSubmit} className="login__form">
          <h2 className="login__header">Login</h2>
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

          <div className="login__new-account">
            Don't have an account?
            <Link className="login__new-link" to={`/signUpPage`}>
              Sign Up!
            </Link>
          </div>
        </form>
        <div className="login__img-container">
          <div className="login__image">
            <img
              className="login__image-link"
              src={WorldConnections}
              alt="A cartoon showing the map of the world with dots and lines connecting them, and fireworks above it."
            />
          </div>
        </div>
      </section>
    </>
  );
}
