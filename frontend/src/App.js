import React from "react";
import { PopupButton } from "react-calendly";
import './App.css';
import logo from "./images/Perdomo's Painting-A1.png";

function App() {
  return (
    <div className="App">
      <header className="image-header">
        <div className="logo-container">
          <img src={logo} alt="Perdomo's Painting Logo" className="logo" />
        </div>
      </header>
      <PopupButton
        url="https://calendly.com/perdomospainting/schedulecall"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
  );
}

export default App;
