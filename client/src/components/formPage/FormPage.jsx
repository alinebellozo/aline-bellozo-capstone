import "./FormPage.scss";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Alert } from "react-bootstrap";

import UsersDataService from "../../services/users.services.jsx";

export default function FormPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cityAndProvince, setCityAndProvince] = useState("");
  const [country, setCountry] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [expertiseLevel, setExpertiseLevel] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (
      name === "" ||
      birthDate === "" ||
      cityAndProvince === "" ||
      country === "" ||
      areaOfInterest === "" ||
      expertiseLevel === ""
    ) {
      setMessage({
        error: true,
        msg: "Ops, all fields need to be filled in...",
      });
      return;
    }

    const createUser = {
      name,
      birthDate,
      cityAndProvince,
      country,
      areaOfInterest,
      expertiseLevel,
    };
    console.log(createUser);

    try {
      await UsersDataService.addUsers(createUser);
      setMessage({ error: false, msg: "Profile created successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setBirthDate("");
    setCityAndProvince("");
    setCountry("");
    setAreaOfInterest("");
    setExpertiseLevel("");

    navigate("/Dashboard");
  };

  return (
    <>
      <section className="form">
        <h2 className="form__header">Sign Up</h2>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {" "}
            {message?.msg}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="form__form">
          <div className="form__fields">
            <label className="form__label">Name</label>
            <input
              className="form__input"
              type="text"
              placeholder="Please enter your full name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
            <label className="form__label">Birth Date</label>
            <input
              className="form__input"
              type=""
              placeholder="Month DD, YYYY"
              value={birthDate}
              onChange={(event) => {
                setBirthDate(event.target.value);
              }}
            ></input>
            <label className="form__label">City / Province</label>
            <input
              className="form__input"
              type="text"
              placeholder="E.g. Vancouver, BC"
              value={cityAndProvince}
              onChange={(event) => {
                setCityAndProvince(event.target.value);
              }}
            ></input>
            <label className="form__label">Country</label>
            <input
              className="form__input"
              type="text"
              placeholder="E.g. Canada"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            ></input>

            <label className="form__label">Area(s) of interest</label>
            <input
              className="form__input"
              type=""
              placeholder="E.g. Frontend, backend, AI, etc. "
              value={areaOfInterest}
              onChange={(event) => {
                setAreaOfInterest(event.target.value);
              }}
            ></input>

            <label className="form__label">Level of expertise</label>
            <input
              className="form__input"
              placeholder="E.g. Novice, Intermediate, etc."
              value={expertiseLevel}
              onChange={(event) => {
                setExpertiseLevel(event.target.value);
              }}
            ></input>
          </div>
          <div className="form__button">
            <button className="form__cancel" id="cancel" type="submit">
              <Link className="form__cancel-link" to={`/`}>
                Cancel
              </Link>
            </button>
            <button className="form__submit" id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
