import "./FormPage.scss";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

import React, { useState, useEffect } from "react";

export default function FormPage() {
  const [newName, setNewName] = useState("");
  const [newBirthDate, setNewBirthDate] = useState("");
  const [newCityAndProvince, setNewCityAndProvince] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newAreaOfInterest, setNewAreaOfInterest] = useState("");
  const [newLevelOfExpertise, setNewLevelOfExpertise] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      birthDate: newBirthDate,
      cityAndProvince: newCityAndProvince,
      country: newCountry,
      areaOfInterest: newAreaOfInterest,
      levelOfExpertise: newLevelOfExpertise,
    });
    console.log(createUser);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //... allows to add more fields to the obj
    };

    getUsers();
  }, []);

  return (
    <>
      <section className="form">
        <h2 className="form__header">Sign Up</h2>

        <form className="signup__form">
          <div className="signup__form-fields">
            <label className="signup__label">Name</label>
            <input
              className="signup__input"
              type="text"
              placeholder="Please enter your full name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            ></input>
            <label className="signup__label">Birth Date</label>
            <input
              className="signup__input"
              type=""
              placeholder="Month DD, YYYY"
              onChange={(event) => {
                setNewBirthDate(event.target.value);
              }}
            ></input>
            <label className="signup__label">City / Province</label>
            <input
              className="signup__input"
              type=""
              placeholder=""
              onChange={(event) => {
                setNewCityAndProvince(event.target.value);
              }}
            ></input>
            <label className="signup__label">Country</label>
            <input
              className="signup__input"
              type=""
              placeholder=""
              onChange={(event) => {
                setNewCountry(event.target.value);
              }}
            ></input>

            <label className="signup__label">Area(s) of interest</label>
            <input
              className=""
              type=""
              placeholder="E.g. Frontend, backend, AI, etc. "
              onChange={(event) => {
                setNewAreaOfInterest(event.target.value);
              }}
            ></input>

            <label className="signup__label">Level of expertise</label>
            <input
              className=""
              placeholder="E.g. Novice, Intermediate, etc."
              onChange={(event) => {
                setNewLevelOfExpertise(event.target.value);
              }}
            ></input>
          </div>
          <div className="signup__button">
            <button className="signup__cancel" id="" type="submit">
              Cancel
            </button>
            <button
              onClick={createUser}
              className="signup__signup"
              id=""
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
