import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Event from "./Pages/Event"
import HomePage from "./Pages/HomePage"
import Team from "./Pages/Team";
function App() {
  const [count, setCount] = useState(0);

  return (
   <Router>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Event" element={<Event/>} />
    <Route path="/Team" element={<Team/>} />
    </Routes>
   </Router>
  ); 
}

export default App;
