import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage.jsx";
import SignUpPage from "./components/signUpPage/SignUpPage";
import FormPage from "./components/formPage/FormPage";
import LoginPage from "./components/loginPage/LoginPage";
import Footer from "./components/footer/Footer";

import { useState } from "react";
import { AuthProvider } from "./AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signUpPage" element={<SignUpPage />} />
            <Route path="/signUpPage/FormPage" element={<FormPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
