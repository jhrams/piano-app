import React, { useState, useEffect } from "react";
import "./BlackKey.css";

const BlackKey = ({ keyCode, audioId }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.repeat) { return; }
      event.preventDefault();
      console.log("BlackKey keydown event: ", event);
      if (event.key === keyCode) {
        setIsPressed(true);
        document.getElementById(audioId).play()
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.repeat) { return; }
      event.preventDefault();
      console.log("BlackKey keyup event: ", event);
      if (event.key === keyCode) {
        setIsPressed(false);
        document.getElementById(audioId).load()
      }
    });
  }, []);

  return (
    <div className="black-key" style={ { boxShadow: isPressed ? "inset white 0px 0px 0px 5px" : "none" } }>
    </div>
  )
};

export default BlackKey;