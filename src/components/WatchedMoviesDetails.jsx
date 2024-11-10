/* eslint-disable react/prop-types */
import React from "react";

const WatchedMoviesDetails = ({ watched }) => {
  console.log(watched);

  const avgImdbRating = watched.map((movie) =>
    Math.round(movie.imdbRating / watched.length)
  );
  console.log(avgImdbRating);

  // const avgImdbrating = solveImdbRating / movie.length
  const avgUserRating = watched.map((movie) =>
    Math.round(movie.userRating / watched.length)
  );
  const avgRuntime = watched.map((movie) =>
    Math.round(movie.runtime / watched.length)
  );

  // const { imdbRating, runtime } = watched;

  return (
    <div className="wrapDetails">
      <h3>Movies You Watched</h3>
      <div className="details">
        <p>
          <span>📽</span>
          <span> {watched.length} movie</span>
        </p>
        <p>
          <span>🌟 </span> <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>✨ </span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳ </span> <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedMoviesDetails;
