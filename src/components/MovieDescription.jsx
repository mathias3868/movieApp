/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import StarRate from "./StarRate";
import Loading from "./Loading";

const key = "7037decf";

const MovieDescription = ({ selectedId, onClose, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatchedMovie = watched
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(() => {
    setLoading(true);
    async function FetchMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
      );
      const data = await res.json();

      console.log(data);
      console.log(data.Year);

      setMovie(data);
      setLoading(false);
    }
    FetchMovieDetails();
  }, [selectedId]);

  const {
    Title: title,
    Poster: poster,
    // Year: year,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbRating,
    // userRating,
  } = movie;

  // console.log(title, year, director);

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      poster,
      title,
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
    };

    onAddWatched(newWatchedMovie);
    onClose();
  };

  return (
    <div className="descriptionBox">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="detailHead">
            <div>
              <button onClick={onClose} className="backArrow">
                &larr;
              </button>
              <img
                src={poster}
                alt={`poster of ${title}`}
                className="detailImg"
              />
            </div>
            <div className="descriptionDetail1">
              <h2>{title}</h2>
              <p>
                {released} &bull;
                {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                <span>{imdbRating} IMDB rating</span>
              </p>
            </div>
          </div>

          <div className="movieDescription2">
            {!isWatchedMovie ? (
              <StarRate
                starRate={10}
                color="#fcc419"
                onSetMovieRate={setUserRating}
              />
            ) : (
              <p className="text-to-dispay-if-aready-selected">
                you rated this movie <span>⭐</span>
                {watchedUserRating}
              </p>
            )}
            {userRating > 0 && (
              <button className="btnAdd" onClick={handleAdd}>
                + Add Movie
              </button>
            )}
            <p className="plot">{plot}</p>
            <p className="actors">starring {actors}</p>
            <p className="director">Directed By: {director}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDescription;
