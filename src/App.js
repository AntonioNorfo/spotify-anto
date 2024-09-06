import React from "react";
import "./App.css";
import Main from "./components/Main";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
      <MusicSection />
      <Player />
    </div>
  );
}

export default App;
