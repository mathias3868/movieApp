/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched, onRemoveMovie }) => {
  return (
    <ul>
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onRemoveMovie={onRemoveMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
