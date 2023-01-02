import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Event from "./Pages/Event"
import HomePage from "./Pages/HomePage"
import Team from "./Pages/Team";
import ContactUs from "./Pages/ContactUs";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  return (
   <Router>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Event" element={<Event/>} />
    <Route path="/Team" element={<Team/>} />
    <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
   </Router>
  ); 
}

export default App;
