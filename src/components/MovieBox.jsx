/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const MovieBox = ({ movie, onSelection }) => {
  return (
    <li className="movie" onClick={() => onSelection(movie.imdbID)}>
      <img
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
        className="moviePoster"
      />

      <div>
        <h4 className="movieName">{movie.Title}</h4>
        <p className="movieYear">
          <span>♋</span> <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieBox;
