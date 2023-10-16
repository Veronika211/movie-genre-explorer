import React from "react";

const MovieItem = ({ title, rating, releaseDate, overview, imagePath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
  return (
    <div>
      {" "}
      <img src={imageUrl} alt="Movie Poster" />
      <p>{title}</p>
    </div>
  );
};

export default MovieItem;
