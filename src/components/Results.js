import React from "react";
import Result from "./Result";

const Results = ({ results }) => {
  return (
    <section className="results">
      {
         <Result
          key={results}
          result={results}
        />
      }
    </section>
  );
};

export default Results;
