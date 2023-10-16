import React from "react";
import { useNavigate } from "react-router";

const GenreItem = ({ genreTitle, genreId }) => {
  const navigate = useNavigate();
  const fetchMovies = () => {
    navigate(`/genre/${genreId}`);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=458abd49974c87431480eef20162dab6&with_genres=${genreId}`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        document.dispatchEvent(
          new CustomEvent("dataFetched", {
            detail: { movies: jsonData, genre: genreTitle },
          })
        );
      });
  };

  return (
    <div>
      {genreTitle}
      <button onClick={() => fetchMovies()}>Fetch Data</button>
    </div>
  );
};

export default GenreItem;
