import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./components/Label";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Label />
      </header>
    </div>
  );
}

export default App;
