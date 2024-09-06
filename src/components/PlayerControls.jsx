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
        <div className="current-song-details text-white text-center mb-2">
          <p className="mb-0">
            Track: "{currentSong.title}" &middot; Artist: {currentSong.artist.name}
          </p>
        </div>
      )}
      <div className="controls d-flex justify-content-center align-items-center">
        <a href="#" className="control-icon">
          <img src={shuffleIcon} alt="shuffle" />
        </a>
        <a href="#" className="control-icon">
          <img src={prevIcon} alt="prev" />
        </a>
        <a href="#" className="control-icon">
          <img src={playIcon} alt="play" />
        </a>
        <a href="#" className="control-icon">
          <img src={nextIcon} alt="next" />
        </a>
        <a href="#" className="control-icon">
          <img src={repeatIcon} alt="repeat" />
        </a>
      </div>
      <div className="progress mt-3 w-100">
        <div role="progressbar"></div>
      </div>
    </div>
  );
};

export default PlayerControls;
