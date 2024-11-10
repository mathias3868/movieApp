/* eslint-disable react/prop-types */
import React from "react";

const SearchBox = ({ query, setQuery }) => {
  return (
    <div className="col1">
      <h1>
        <span>🚪</span> <span>Movie Room</span>
      </h1>
      <input
        type="text"
        value={query}
        placeholder="Search Movies"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
