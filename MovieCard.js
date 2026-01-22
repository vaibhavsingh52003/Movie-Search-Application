import React from "react";

const MovieCard = ({ movie }) => {
  if (!movie || !movie.imdbID) return null; // Prevents error when movie is undefined

  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} 
        alt={movie.Title} 
      />
      <h3>{movie.Title} ({movie.Year})</h3>
    </div>
  );
};

export default MovieCard;
