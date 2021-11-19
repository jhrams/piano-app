import React from "react";
import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";
import "./Piano.css"

const Piano = () => {
  return (
    <div className="piano">
      <div className="black-keys">
        <div className="C-D-key-group">
          <BlackKey keyCode="r" audioId="Csharp3" />
          <BlackKey keyCode="t" audioId="Dsharp3" />
        </div>
        <div className="F-G-A-key-group">
          <BlackKey keyCode="u" audioId="Fsharp3" />
          <BlackKey keyCode="i" audioId="Gsharp3" />
          <BlackKey keyCode="o" audioId="Asharp3" />
        </div>
      </div>
      <div className="white-keys">
        <WhiteKey keyCode="d" audioId="C3" />
        <WhiteKey keyCode="f" audioId="D3" />
        <WhiteKey keyCode="g" audioId="E3" />
        <WhiteKey keyCode="h" audioId="F3" />
        <WhiteKey keyCode="j" audioId="G3" />
        <WhiteKey keyCode="k" audioId="A3" />
        <WhiteKey keyCode="l" audioId="B3" />
      </div>
    </div>
  )
}

export default Piano;