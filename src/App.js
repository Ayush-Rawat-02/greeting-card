import { useState } from "react";
import GreetingCard from "./GreetingCard";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [inp, setInp] = useState("");
  const [bgColor, setBgColor] = useState("skyblue");
  const generateHandler = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    setBgColor(color);
    setName(inp);
  };
  return (
    <div className="App">
      <div className="inputBox">
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={generateHandler}>Generate</button>
      </div>
      {name != "" && <GreetingCard name={name} bgColor={bgColor} />}
    </div>
  );
}

export default App;
