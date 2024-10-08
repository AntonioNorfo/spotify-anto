import React from "react";
import { useSelector } from "react-redux";
import MusicSection from "./MusicSection";

const Main = () => {
  const searchResults = useSelector((state) => state.song.searchResults);

  return (
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
      {searchResults.length > 0 ? (
        <div className="row">
          <div className="col-12">
            <MusicSection section="search" songs={searchResults} />
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <h2 className="text-light">Rock Classics</h2>
              <MusicSection section="rock" artistName="rock" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-light">Pop Culture</h2>
              <MusicSection section="pop" artistName="pop" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-light">Hip Hop</h2>
              <MusicSection section="hiphop" artistName="hiphop" />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
