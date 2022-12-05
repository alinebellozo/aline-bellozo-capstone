import "./App.scss";
import Homepage from "./components/homepage/Homepage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
