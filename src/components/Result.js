import React from "react";

const Result = ({ result }) => {
  return (
    <div className="result" onClick={() => result.imdbID}>
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
