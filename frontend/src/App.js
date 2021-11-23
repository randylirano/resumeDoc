import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import SweDashboard from "./pages/SweDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/swe" element={<SweDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
