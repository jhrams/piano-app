import React from "react";
import Key from "./Key";
import "./Piano.css"

const Piano = () => {
  return (
    <div className="piano">
      <div className="black-keys">
        <div className="C-D-key-group">
          <Key keyColor="black" keyCode="r" audioId="Csharp3" />
          <Key keyColor="black" keyCode="t" audioId="Dsharp3" />
        </div>
        <div className="F-G-A-key-group">
          <Key keyColor="black" keyCode="u" audioId="Fsharp3" />
          <Key keyColor="black" keyCode="i" audioId="Gsharp3" />
          <Key keyColor="black" keyCode="o" audioId="Asharp3" />
        </div>
      </div>
      <div className="white-keys">
        <Key keyColor="white" keyCode="d" audioId="C3" />
        <Key keyColor="white" keyCode="f" audioId="D3" />
        <Key keyColor="white" keyCode="g" audioId="E3" />
        <Key keyColor="white" keyCode="h" audioId="F3" />
        <Key keyColor="white" keyCode="j" audioId="G3" />
        <Key keyColor="white" keyCode="k" audioId="A3" />
        <Key keyColor="white" keyCode="l" audioId="B3" />
      </div>
    </div>
  )
}

export default Piano;