/* eslint-disable react/prop-types */

import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched }) => {
  return (
    <ul>
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
