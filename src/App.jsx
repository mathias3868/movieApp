import { useState, useEffect } from "react";
import "./App.css";
import Header from "./headerComponent/Header";
import Box from "./components/Box";
import WatchedMoviesList from "./components/WatchedMoviesList";
import SearchBox from "./headerComponent/SearchBox";

import ErrorMessage from "./components/ErrorMessage";
import MovieLists from "./components/MovieLists";
import SearchOutCome from "./headerComponent/SearchOutCome";
import MovieDescription from "./components/MovieDescription";
import WatchedMoviesDetails from "./components/WatchedMoviesDetails";
import Loading from "./components/Loading";

const key = "7037decf";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError("");
    async function fetchMovies() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`
        );
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        console.log(data.Search);

        // if(movies.length === 0){
        //   setMovies([])
        // }
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      setIsLoading(false);
      return;
    }

    fetchMovies();
  }, [query]);

  const handleSelection = (id) => {
    // setSelectedId((cur) => !cur === id);
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleClose = () => {
    setSelectedId(null);
  };
  const handleAddWatched = (movie) => {
    setWatched([...watched, movie]);
  };
  return (
    <>
      <Header>
        <SearchBox query={query} setQuery={setQuery} />
        <SearchOutCome movies={movies} />
      </Header>
      <div className="section">
        <Box>
          {query.length == 0 || query.length < 3 ? "add movies" : " "}
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieLists movies={movies} onSelection={handleSelection} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDescription
              selectedId={selectedId}
              onClose={handleClose}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedMoviesDetails watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </div>
    </>
  );
}

export default App;
