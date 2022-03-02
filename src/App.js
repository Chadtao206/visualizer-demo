import { useState, useEffect } from "react";
import Wave from "@foobar404/wave";
import song from './human.mp3';
import "./App.css";
console.log(song);

function App() {
  const [wave] = useState(new Wave());
  useEffect(() => {
    const options = { type: "orbs" };
    wave.fromElement("player", "output", options);
  }, [wave]);
  return (
    <div className="App">
      <canvas id="output" height="500" width="500"></canvas>
      <audio id="player" controls src={song}>
      </audio>
    </div>
  );
}

export default App;
