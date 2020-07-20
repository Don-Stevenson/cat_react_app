import React from "react";
import Result from "./Result";

const Results = ({ results })=> {
  return (
    <section className="results">
      {results ? (
        results.map(result => (
          <Result key={result.imdbID} result={result} />
        ))
      ) : (
        <header>
          <h2> No Results! Please enter another cat name. </h2>
        </header>
      )}
    </section>
  );
}

export default Results;
