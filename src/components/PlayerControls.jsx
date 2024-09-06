import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const PlayerControls = () => {
  const currentSong = useSelector((state) => state.song.currentSong);
  const previewUrl = useSelector((state) => state.song.previewUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(previewUrl));
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (previewUrl) {
      audioRef.current.src = previewUrl;
      audioRef.current.currentTime = 0; // Inizia dall'inizio
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [previewUrl, isPlaying]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / 60) * 100); // Calcola il progresso su 60 secondi
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="playerControls">
      {currentSong && (
        <div className="current-song-details text-white text-center">
          <p className="mb-0 mt-1">
            <span className="text-info fw-bold"> Artist:</span> {currentSong.artist.name} &middot;{" "}
            <span className="text-info fw-bold"> Track:</span> "{currentSong.title}"
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
        <a href="#" className="control-icon  mb-2" onClick={handlePlayPause}>
          <img src={playIcon} alt="play/pause" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={nextIcon} alt="next" />
        </a>
        <a href="#" className="control-icon  mb-2">
          <img src={repeatIcon} alt="repeat" />
        </a>
      </div>
      <div className="progress-container d-flex align-items-center w-100 mb-3">
        <div className="progress w-100">
          <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="current-time text-white ms-2">{formatTime(currentTime)}</span>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default PlayerControls;
