"use client";
import React, { useEffect, useState } from "react";
import GenreItem from "../components/GenreItem";

const LandingPage = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=458abd49974c87431480eef20162dab6"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setGenres(jsonData.genres);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  if (error) {
    throw error;
  }

  return (
    <div>
      {genres.length > 0 &&
        genres?.map((genre) => (
          <GenreItem
            genreId={genre.id}
            genreTitle={genre.name}
            key={genre.id}
          />
        ))}
    </div>
  );
};

export default LandingPage;
