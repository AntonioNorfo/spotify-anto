import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../reducers/songActions";

const albumCard = (singleSong, dispatch) => (
  <div className="col text-center" key={singleSong.id} onClick={() => dispatch(setCurrentSong(singleSong))}>
    <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
    <p>
      Track: "{singleSong.title}"<br />
      Artist: {singleSong.artist.name}
    </p>
  </div>
);

const MusicSection = ({ section, artistName }) => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchSongs();
  }, [artistName]);

  return (
    <div id={`${section}Section`} className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {songs.map((song) => albumCard(song, dispatch))}
    </div>
  );
};

export default MusicSection;
