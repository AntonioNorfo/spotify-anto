import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import MusicSection from "./components/MusicSection";
import Player from "./components/Player";

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
