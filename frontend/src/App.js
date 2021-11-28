import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import Landing from "./pages/Landing";
import SweDashboard from "./pages/SweDashboard";
import UxUiDashboard from "./pages/UxUiDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/swe" element={<SweDashboard />} />
        <Route exact path="/uxui" element={<UxUiDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
