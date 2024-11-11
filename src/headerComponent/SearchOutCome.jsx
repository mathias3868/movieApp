/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const SearchOutCome = ({ movies }) => {
  return (
    <div>
      <p>
        {movies.length > 0
          ? `found ${movies.length} results`
          : `found ${0} result`}
      </p>
    </div>
  );
};

export default SearchOutCome;
