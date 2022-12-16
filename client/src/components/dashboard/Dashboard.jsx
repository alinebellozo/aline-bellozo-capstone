import "./Dashboard.scss";
import { UserAuth } from "../../AuthContext";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const { user, logout } = UserAuth();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     navigate("/");
  //     alert("Logged out successfully!");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <>
      <section className="dashboard">
        <h1 className="dashboard__header">Welcome! 😊</h1>
        {/* <p className="">You are logged in as: {user && user.email}</p> */}
        <div className="dashboard__text-container">
          <p className="dashboard__text">
            This is the place where you will connect to people, discover new
            universes of knowledge, organize your ideas, plan your study goals,
            and much more!
          </p>
          <p className="dashboard__text">
            Explore the options and have a great learn!
          </p>
        </div>

        <div className="dashboard__cards">
          <div class="dashboard__card-one">
            <div class="dashboard__inner">
              <div class="dashboard__front-one">
                <h1>Study Goals</h1>
              </div>
              <div class="dashboard__back">
                <p>
                  In this space, you can set your study goals, and update them
                  according to your need along the way!
                </p>
              </div>
            </div>
          </div>

          <div class="dashboard__card-two">
            <div class="dashboard__inner">
              <div class="dashboard__front-two">
                <h1>Organization Session</h1>
              </div>
              <div class="dashboard__back">
                <p>
                  In this space, you can create notes, save useful links,
                  organize everything you need to improve your study journey,
                  and make sure you don't miss anything important that you
                  didn't have time to check yet.
                </p>
              </div>
            </div>
          </div>

          <div class="dashboard__card-three">
            <div class="dashboard__inner">
              <div class="dashboard__front-three">
                <h1>Mental Health</h1>
              </div>
              <div class="dashboard__back">
                <p>
                  {/* Studying is important, but taking care of our mental health is fundamental, and also helps to improve the quality of our learning process. */}
                  Taking care of your mental health is fundamental! So here is a
                  space where you can get tips on how to improve your study
                  skills, and also share your experiences with others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="dashboard__button">
          <button
            onClick={handleLogout}
            className="dashboard__logout"
            id="logout"
            type="submit"
          >
            Sign Out
          </button>
        </div> */}
      </section>
    </>
  );
}
