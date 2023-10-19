import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
import "./MovieListPage.css";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreTitle, setGenreTitle] = useState("");

  useEffect(() => {
    const handleDataFetched = (event) => {
      setMovieList(event.detail.movies.results);
      setGenreTitle(event.detail.genre);
    };

    document.addEventListener("fetchMovies", handleDataFetched);

    return () => {
      document.removeEventListener("fetchMovies", handleDataFetched);
    };
  }, []);

  return (
    <div className="main-container">
      <h2>{genreTitle}</h2>
      <div className="movies-container">
        {movieList.length > 0 &&
          movieList.map((movie) => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              imagePath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieListPage;
