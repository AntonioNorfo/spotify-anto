import React, { useEffect } from "react";

const albumCard = (singleSong) => (
  <div className="col text-center">
    <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
    <p>
      Track: "{singleSong.title}"<br />
      Artist: {singleSong.artist.name}
    </p>
  </div>
);

const fillMusicSection = async (artistName, querySelector) => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
    if (response.ok) {
      let { data } = await response.json();
      let musicSection = document.querySelector(querySelector);
      for (let i = 0; i < 4; i++) {
        musicSection.innerHTML += albumCard(data[i]);
      }
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
};

const MusicSection = () => {
  useEffect(() => {
    fillMusicSection("queen", "#rockSection");
    fillMusicSection("katyperry", "#popSection");
    fillMusicSection("eminem", "#hipHopSection");
  }, []);

  return (
    <div>
      <div id="rockSection"></div>
      <div id="popSection"></div>
      <div id="hipHopSection"></div>
    </div>
  );
};

export default MusicSection;
