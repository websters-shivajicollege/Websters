import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Event from "./Pages/Event"
function App() {
  const [count, setCount] = useState(0);

  return (
   <>
   <Event/>
   </>
  );
}

export default App;
