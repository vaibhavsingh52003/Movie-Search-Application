import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

const API_KEY = "151adcfb";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query, year, type) => {
    if (!query) {
      setMovies([]);
      return;
    }

    setLoading(true);
    try {
      let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
      if (year) url += `&y=${year}`;
      if (type) url += `&type=${type}`;

      const response = await axios.get(url);
      console.log("API Response:", response.data);

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("An error occurred while fetching movies. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <nav style={{ padding: "10px", background: "#333" }}>
          <Link
            to="/"
            style={{ color: "white", margin: "10px", textDecoration: "none" }}
          >
            Home
          </Link>
        </nav>

        <h1>Movie Search App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={searchMovies} />
                <MovieList movies={movies} loading={loading} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
