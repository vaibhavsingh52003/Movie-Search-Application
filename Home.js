import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const API_KEY = "151adcfb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const searchMovies = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      console.log("API Response:", response.data);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  const handleMovieSelect = (imdbID) => {
    navigate(`/movie/${imdbID}`); // Navigate to movie details page
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
    </div>
  );
};

export default Home;
