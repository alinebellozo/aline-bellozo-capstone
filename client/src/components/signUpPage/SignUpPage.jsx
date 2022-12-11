import "./SignUpPage.scss";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUpPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged is a function that is triggered everytime there is a change in the auth state
  //callback function (currentUser) tells what to do when the user state changes
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerPasswordConfirm
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="">
        <h2 className="">Sign Up</h2>
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
                setRegisterEmail(event.target.value);
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
                setRegisterPassword(event.target.value);
              }}
            ></input>
          </div>
          <div className="">
            <label className="">Confirm Password</label>
            <input
              className=""
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              required
              placeholder="Please confirm the password"
              onChange={(event) => {
                setRegisterPasswordConfirm(event.target.value);
              }}
            ></input>
          </div>
        </form>
        <div className="">
          <button className="" id="" type="submit">
            Cancel
          </button>
          <button onClick={signUp} className="" id="" type="submit">
            Sign Up
          </button>
        </div>

        <div className="">Already have an account? Log In</div>
      </section>
    </>
  );
}
