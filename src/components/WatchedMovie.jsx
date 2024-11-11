/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import CancelCircle from "../assets/CancelCircle";

const WatchedMovie = ({ movie, onRemoveMovie }) => {
  console.log(movie);

  return (
    <li className="watchedMovie">
      <img
        className="moviePoster"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <div>
        <h3 className="movieName">{movie.title}</h3>
        <div className="watchedRT">
          <p className="movieRate">
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className="userRate">
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p className="movieTime">
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
      <p onClick={() => onRemoveMovie(movie.imdbID)}>
        <CancelCircle />
      </p>
    </li>
  );
};

export default WatchedMovie;
