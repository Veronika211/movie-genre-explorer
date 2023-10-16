import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreTitle, setGenreTitle] = useState("");

  useEffect(() => {
    const handleDataFetched = (event) => {
      setMovieList(event.detail.movies.results);
      setGenreTitle(event.detail.genre);
    };

    document.addEventListener("dataFetched", handleDataFetched);

    return () => {
      document.removeEventListener("dataFetched", handleDataFetched);
    };
  }, []);

  return (
    <div>
      <h2>{genreTitle}</h2>
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
  );
};

export default MovieListPage;
