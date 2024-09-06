import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App;
