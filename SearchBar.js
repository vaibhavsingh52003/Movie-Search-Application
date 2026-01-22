import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    onSearch(query, year, type);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Year (e.g. 2020)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ padding: "10px", marginRight: "10px", width: "120px" }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>

      <button onClick={handleSearch} style={{ padding: "10px", marginRight: "10px" }}>Search</button>

      <div style={{ marginTop: "10px" }}>
        <span style={{ marginRight: "10px", fontWeight: "bold" }}>Quick Search:</span>
        <button 
          onClick={() => onSearch("Hindi", year, type)} 
          style={{ padding: "5px 10px", marginRight: "5px", background: "#f0ad4e", border: "none", color: "white", cursor: "pointer", borderRadius: "4px" }}
        >
          Bollywood (Hindi)
        </button>
        <button 
          onClick={() => onSearch("Telugu", year, type)} 
          style={{ padding: "5px 10px", background: "#5bc0de", border: "none", color: "white", cursor: "pointer", borderRadius: "4px" }}
        >
          Tollywood (Telugu)
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
