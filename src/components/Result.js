import React from "react";

const Result = (props) => {
  return (
    <div className="result">
      <output className="input">{props.input}</output>
      <output>{props.output}</output>
    </div>
  );
};

export default Result;
