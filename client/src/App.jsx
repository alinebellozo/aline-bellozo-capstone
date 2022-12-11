import "./App.scss";
import Homepage from "./components/homepage/Homepage.jsx";
import SignUpPage from "./components/signUpPage/SignUpPage";
import LoginPage from "./components/loginPage/LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
        {/* </AuthProvider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
