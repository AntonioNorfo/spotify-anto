import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLikeSong } from "../reducers/songActions";
import likeIcon from "../assets/playerbuttons/like.png";
import likedIcon from "../assets/playerbuttons/liked.png";

const albumCard = (singleSong, dispatch, likedSongs) => (
  <div className="col text-center album-card" key={singleSong.id}>
    <img
      className="img-fluid"
      src={singleSong.album.cover_medium}
      alt="track"
      onClick={() => dispatch(setCurrentSong(singleSong))}
    />
    <p>
      Track: "{singleSong.title}"<br />
      Artist: {singleSong.artist.name}
    </p>
    <button onClick={() => dispatch(toggleLikeSong(singleSong.id))} className="btn btn-link">
      <img src={likedSongs[singleSong.id] ? likedIcon : likeIcon} alt="like" />
    </button>
  </div>
);

const MusicSection = ({ section, artistName, songs }) => {
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.song.likedSongs);

  useEffect(() => {
    if (!songs) {
      const fetchSongs = async () => {
        try {
          let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
          if (response.ok) {
            let { data } = await response.json();
            setFetchedSongs(data.slice(0, 4));
          } else {
            throw new Error("Error in fetching songs");
          }
        } catch (err) {
          console.log("error", err);
        }
      };

      fetchSongs();
    }
  }, [artistName, songs]);

  const displaySongs = songs || fetchedSongs;

  return (
    <div id={`${section}Section`} className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {displaySongs.map((song) => albumCard(song, dispatch, likedSongs))}
    </div>
  );
};

export default MusicSection;
