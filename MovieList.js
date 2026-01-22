import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading movies...</h2>; // Show loading text while fetching
  }

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
            <h3>
              <Link to={`/movie/${movie.imdbID}`}><h3 className="movie-title">{movie.Title}</h3></Link>
            </h3>
          </div>
        ))
      ) : (
        <h2>No movies found</h2>
      )}
    </div>
  );
};

export default MovieList;
