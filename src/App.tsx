import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Event from "./Pages/Event"
import HomePage from "./Pages/HomePage"
function App() {
  const [count, setCount] = useState(0);

  return (
   <>
   <HomePage/>
   </>
  );
}

export default App;
