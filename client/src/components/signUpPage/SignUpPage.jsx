import "./SignUpPage.scss";
import { Grid, Paper, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function SignUpPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  const [user, setUser] = useState({});

  const [newName, setNewName] = useState("");
  const [newBirthDate, setNewBirthDate] = useState("");
  const [newCityAndProvince, setNewCityAndProvince] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newAreaOfInterest, setNewAreaOfInterest] = useState("");
  const [newLevelOfExpertise, setNewLevelOfExpertise] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //... allows to add more fields to the obj
    };

    getUsers();
  }, []);

  // onAuthStateChanged is a function that is triggered everytime there is a change in the auth state
  //callback function (currentUser) tells what to do when the user state changes
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerPasswordConfirm
      );
      const createUser = async () => {
        await addDoc(usersCollectionRef, {
          name: newName,
          birthDate: newBirthDate,
          cityAndProvince: newCityAndProvince,
          country: newCountry,
          areaOfInterest: newAreaOfInterest,
          levelOfExpertise: newLevelOfExpertise,
        });
      };
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const paperStyle = { padding: "2rem", width: 300, margin: "20px auto" };

  return (
    <>
      <Grid>
        <section className="signup">
          <Paper elevation={20} style={paperStyle}>
            <h2 className="signup__header">Sign Up</h2>
          </Paper>
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
              <FormControl>
                <label className="signup__label">Area(s) of interest</label>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Frontend"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Backend"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="AI"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Machine Learning"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Data Science"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Other(s)"
                    onChange={(event) => {
                      setNewAreaOfInterest(event.target.value);
                    }}
                  />
                </FormGroup>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  label="Please specify"
                  onChange={(event) => {
                    setNewAreaOfInterest(event.target.value);
                  }}
                />

                <FormLabel id="demo-row-radio-buttons-group-label">
                  Level of expertise
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue="novice"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="novice"
                    control={<Radio />}
                    label="Novice"
                    onChange={(event) => {
                      setNewLevelOfExpertise(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="intermediate"
                    control={<Radio />}
                    label="Intermediate"
                    onChange={(event) => {
                      setNewLevelOfExpertise(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="advanced"
                    control={<Radio />}
                    label="Advanced"
                    onChange={(event) => {
                      setNewLevelOfExpertise(event.target.value);
                    }}
                  />
                  <FormControlLabel
                    value="expert"
                    control={<Radio />}
                    label="Expert"
                    onChange={(event) => {
                      setNewLevelOfExpertise(event.target.value);
                    }}
                  />
                </RadioGroup>
              </FormControl>
              <label className="signup__label">Email</label>
              <input
                className="signup__input"
                name="email"
                id="email"
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
                name="password"
                id="password"
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
            <div className="signup__input">
              <button className="signup__cancel" id="" type="submit">
                Cancel
              </button>
              <button
                onClick={signUp}
                className="signup__signup"
                id=""
                type="submit"
              >
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
      </Grid>
    </>
  );
}
