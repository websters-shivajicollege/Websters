import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Event from "./Pages/Event";
import Homepage from "./Pages/Homepage";
import Team from "./Pages/Team";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
