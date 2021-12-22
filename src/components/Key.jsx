import React, { useState, useEffect } from "react";
import "./Key.css";

const Key = ({ keyColor, keyCode, audioId }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.repeat) { return; }
      event.preventDefault();
      if (event.key === keyCode) {
        setIsPressed(true);
        document.getElementById(audioId).play()
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.repeat) { return; }
      event.preventDefault();
      if (event.key === keyCode) {
        setIsPressed(false);
        document.getElementById(audioId).load()
      }
    });
  }, []);

  return (
    <div className={`key ${keyColor}-key`} style={ { boxShadow: isPressed ? "inset black 0px 0px 0px 5px" : "none" } }>
    </div>
  )
};

export default WhiteKey;