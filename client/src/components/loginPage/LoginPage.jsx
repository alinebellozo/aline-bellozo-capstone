import "./LoginPage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <section className="">
        <h2 className="">Login</h2>
        <form>
          <div className="">
            <label className="">Email</label>
            <input
              className=""
              name="email"
              id="email"
              type="email"
              required
              placeholder="example@email.com"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <label className="">Password</label>
            <input
              className=""
              name="password"
              id="password"
              type="password"
              required
              placeholder="Please insert a secure password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            ></input>
          </div>
        </form>
        <div className="">
          <button className="" id="" type="submit">
            Cancel
          </button>
          <button onClick={login} className="" id="" type="submit">
            Log In
          </button>
          <button onClick={logout} className="" id="" type="submit">
            Log Out
          </button>
        </div>

        <div className="">
          Don't have an account?
          <Link className="" to={`/signUpPage`}>
            Sign Up!
          </Link>
        </div>
      </section>
    </>
  );
}
