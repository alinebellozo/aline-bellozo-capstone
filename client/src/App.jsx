import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage.jsx";
import SignUpPage from "./components/signUpPage/SignUpPage";
import FormPage from "./components/formPage/FormPage";
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/loginPage/LoginPage";
import UsersList from "./components/usersList/UsersList";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./AuthContext";

import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //   });
  // }, []);

  // const [userId, setUserId] = useState("");

  // const getUserIdHandler = (id) => {
  //   console.log("The ID of user to be edited");
  //   setUserId(id);
  // };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signUpPage" element={<SignUpPage />} />
            <Route
              path="/formPage"
              element={
                <ProtectedRoute>
                  <FormPage />
                </ProtectedRoute>
              }
            />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* <Route
              path="/usersList"
              element={<UsersList getUserId={getUserIdHandler} />}
            /> */}
          </Routes>
          <Footer />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
