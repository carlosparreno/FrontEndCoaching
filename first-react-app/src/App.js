import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./components/Label";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Label text="This is our first component, named Label" />
        <Button>Add</Button>
      </header>
    </div>
  );
}

export default App;
