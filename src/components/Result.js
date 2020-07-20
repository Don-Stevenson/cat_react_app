import React from "react";

const Result = ({ result }) => {
    console.log("result in result is", result)
  return (
    <div className="result">
      <h3>{result}</h3>
    </div>
  );
};

export default Result;
