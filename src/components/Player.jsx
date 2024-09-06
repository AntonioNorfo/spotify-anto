import React from "react";
import PlayerControls from "./PlayerControls";

const Player = () => (
  <div className="player-container fixed-bottom bg-container pt-1">
    <div className="row h-100">
      <div className="col-12">
        <div className="row h-100 flex-column justify-content-center align-items-center">
          <PlayerControls />
        </div>
      </div>
    </div>
  </div>
);

export default Player;
