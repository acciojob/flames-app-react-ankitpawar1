import React, { Component, useState } from "react";
import "../styles/App.css";
import FlameGame from "./FlameGame";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <h1>FLAMES Game</h1>
        <FlameGame />
      </div>
    );
  }
}

export default App;
