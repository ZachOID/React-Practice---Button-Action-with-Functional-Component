import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
     <div id="main">
         {isVisible ? (
            <p id="para">
               Hello, I've learnt to use the full-stack evaluation tool. This makes me so
               happy
            </p>
         ) : null}

      <button id="click" onClick={() => setIsVisible((prevState) => !prevState)}>
        Toggle
      </button>

    </div>
  );
}


export default App;
