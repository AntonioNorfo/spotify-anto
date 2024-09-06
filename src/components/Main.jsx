import React from "react";
import MusicSection from "./MusicSection";

const Main = () => (
  <main className="col-12 col-md-9 offset-md-3 mainPage">
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>Rock Classics</h2>
          <MusicSection section="rock" artistName="queen" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="pop">
          <h2>Pop Culture</h2>
          <MusicSection section="pop" artistName="katyperry" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="hiphop">
          <h2>#HipHop</h2>
          <MusicSection section="hipHop" artistName="eminem" />
        </div>
      </div>
    </div>
  </main>
);

export default Main;
