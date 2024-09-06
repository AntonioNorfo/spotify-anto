// src/components/PlayerControls.jsx
import React from "react";
import { useSelector } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const PlayerControls = () => {
  const currentSong = useSelector((state) => state.song.currentSong);

  return (
    <div className="playerControls">
      {currentSong && (
        <div className="current-song-details text-white text-center">
          <p className="mb-0 mt-1">
            Artist: {currentSong.artist.name} &middot; Track: "{currentSong.title}"
          </p>
        </div>
      )}
      <div className="controls d-flex justify-content-center align-items-center">
        <a href="#" className="control-icon mb-2">
          <img src={shuffleIcon} alt="shuffle" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={prevIcon} alt="prev" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={playIcon} alt="play" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={nextIcon} alt="next" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={repeatIcon} alt="repeat" />
        </a>
      </div>
      <div className="progress w-50 mb-3">
        <div className="progress-bar " role="progressbar"></div>
      </div>
    </div>
  );
};

export default PlayerControls;
