import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLikeSong, addToPlaylist, setPreviewUrl } from "./reducers/songActions";
import likeIcon from "../assets/playerbuttons/like.png";
import likedIcon from "../assets/playerbuttons/liked.png";

const albumCard = (singleSong, dispatch, likedSongs, section) => (
  <div className={`col-3 text-center album-card ${section === "search" ? "mt-5" : ""}`} key={singleSong.id}>
    {singleSong.album && singleSong.album.cover_medium ? (
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
        onClick={() => {
          dispatch(setCurrentSong(singleSong));
          dispatch(setPreviewUrl(singleSong.preview)); // Imposta l'URL dell'anteprima
        }}
      />
    ) : (
      <div className="img-placeholder">No Image Available</div>
    )}
    <p>
      Track: "{singleSong.title}"<br />
      Artist: {singleSong.artist ? singleSong.artist.name : "Unknown Artist"}
    </p>
    <button
      onClick={() => {
        dispatch(toggleLikeSong(singleSong));
        dispatch(addToPlaylist(singleSong));
      }}
      className="btn btn-link"
    >
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
          }
        } catch (error) {
          console.error("Error fetching songs:", error);
        }
      };
      fetchSongs();
    }
  }, [artistName, songs]);

  return (
    <div className="row">
      {songs
        ? songs.map((song) => albumCard(song, dispatch, likedSongs, section))
        : fetchedSongs.map((song) => albumCard(song, dispatch, likedSongs, section))}
    </div>
  );
};

export default MusicSection;
