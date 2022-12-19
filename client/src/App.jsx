import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage.jsx";
import SignUpPage from "./components/signUpPage/SignUpPage";
import FormPage from "./components/formPage/FormPage";
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/loginPage/LoginPage";

import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./AuthContext";

export default function App() {
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
                // <ProtectedRoute>
                <FormPage />
                // </ProtectedRoute>
              }
            />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                // <ProtectedRoute>
                <Dashboard />
                // </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
