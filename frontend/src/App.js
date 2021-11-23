import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import SweDashboard from "./pages/SweDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/swe" element={<SweDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
