/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import MovieBox from "./MovieBox";

const MovieLists = ({ movies, onSelection }) => {
  return (
    <ul className="list-movies">
      {movies?.map((movie) => (
        <MovieBox movie={movie} key={movie.imdbID} onSelection={onSelection} />
      ))}
    </ul>
  );
};

export default MovieLists;
