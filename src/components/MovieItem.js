import React from "react";
import "./MovieItem.css";

const MovieItem = ({ title, rating, releaseDate, overview, imagePath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
  return (
    <div className="movie-card">
      <img className="movie-img" src={imageUrl} alt="Movie Poster" />
      <p>{title}</p>
    </div>
  );
};

export default MovieItem;
