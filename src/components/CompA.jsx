import React from "react";

const compA = (props) => {
  return (
    <div>
      <h1>Props-A</h1>
      <h2>{props.first}</h2>
      <p>{props.second}</p>
      <p>{props.first}</p>
      <div className="frf">{props.tittel}</div>
    </div>
  );
};

export default compA;
