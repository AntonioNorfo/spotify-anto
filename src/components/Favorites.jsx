import React from "react";
import { useSelector } from "react-redux";
import MusicSection from "./MusicSection";

const Favorites = () => {
  const likedSongs = useSelector((state) => state.song.likedSongs);
  const favoriteSongs = Object.values(likedSongs).filter((song) => song);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-12">
          <h2 className="text-light">Favorites</h2>
          {favoriteSongs.length > 0 ? (
            <MusicSection section="favorites" songs={favoriteSongs} />
          ) : (
            <p className="text-light">No favorite songs yet.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Favorites;
