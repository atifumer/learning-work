import React from "react";

const compB = (Props) => {
  return (
    <div>
      <h1>Props-B</h1>
      <h2>{Props.tera}</h2>
      <h2>{Props.p}</h2>
      <h3>{Props.c}</h3>
      <p className="frf"> {Props.d}</p>
    </div>
  );
};

export default compB;
