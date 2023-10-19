import React from "react";
import { useNavigate } from "react-router";
import "./GenreItem.css";

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
          new CustomEvent("fetchMovies", {
            detail: { movies: jsonData, genre: genreTitle },
          })
        );
      });
  };

  return (
    <div className="card">
      <h2 className="genre-title">{genreTitle}</h2>
      <button className="genre-button" onClick={() => fetchMovies()}>
        Show Movies
      </button>
    </div>
  );
};

export default GenreItem;
