import logo from './logo.svg';

import Piano from './components/Piano';
import WhiteKey from './components/WhiteKey';

import './App.css';

function App() {
  document.addEventListener("keydown", (event) => {
    if (event.repeat) { return; }
    event.preventDefault();
    if (event.key === "d") {
      document.getElementById("C3").play()
    } else if (event.key === "f") {
      document.getElementById("D3").play()
    } else if (event.key === "g") {
      document.getElementById("E3").play()
    } else if (event.key === "h") {
      document.getElementById("F3").play()
    } else if (event.key === "j") {
      document.getElementById("G3").play()
    } else if (event.key === "k") {
      document.getElementById("A3").play()
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.repeat) { return; }
    event.preventDefault();
    if (event.key === "d") {
      document.getElementById("C3").load()
    } else if (event.key === "f") {
      document.getElementById("D3").load()
    } else if (event.key === "g") {
      document.getElementById("E3").load()
    } else if (event.key === "h") {
      document.getElementById("F3").load()
    } else if (event.key === "j") {
      document.getElementById("G3").load()
    } else if (event.key === "k") {
      document.getElementById("A3").load()
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <audio id="C3">
          <source src="C3.ogg" type="audio/ogg" />
        </audio>
        <audio id="Csharp3">
          <source src="Csharp3.ogg" type="audio/ogg" />
        </audio>
        <audio id="D3">
          <source src="D3.ogg" type="audio/ogg" />
        </audio>
        <audio id="Dsharp3">
          <source src="Dsharp3.ogg" type="audio/ogg" />
        </audio>
        <audio id="E3">
          <source src="E3.ogg" type="audio/ogg" />
        </audio>
        <audio id="F3">
          <source src="F3.ogg" type="audio/ogg" />
        </audio>
        <audio id="Fsharp3">
          <source src="Fsharp3.ogg" type="audio/ogg" />
        </audio>
        <audio id="G3">
          <source src="G3.ogg" type="audio/ogg" />
        </audio>
        <audio id="Gsharp3">
          <source src="Gsharp3.ogg" type="audio/ogg" />
        </audio>
        <audio id="A3">
          <source src="A3.ogg" type="audio/ogg" />
        </audio>
        <audio id="Asharp3">
          <source src="Asharp3.ogg" type="audio/ogg" />
        </audio>
        <audio id="B3">
          <source src="B3.ogg" type="audio/ogg" />
        </audio>
        <Piano />
      </header>
    </div>
  );
}

export default App;
