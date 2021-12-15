import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Landing from "./pages/Landing";
import SweDashboard from "./pages/SweDashboard";
import UxUiDashboard from "./pages/UxUiDashboard";
import CreateSweResumePage from "./pages/CreateSweResumePage";
import PmDashboard from "./pages/PmDashboard.js";
import CreatePmResumePage from "./pages/CreatePmResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/swe" element={<SweDashboard />} />
        <Route exact path="/uxui" element={<UxUiDashboard />} />
        <Route
          exact
          path="/create-swe-resume"
          element={<CreateSweResumePage />}
        />
        <Route exact path="/pm" element={<PmDashboard />} />
        <Route
          exact
          path="/create-pm-resume"
          element={<CreatePmResumePage />}
        />
        <Route exact path="/view-resume" element={ViewSweResume} />
      </Routes>
    </Router>
  );
}

export default App;
