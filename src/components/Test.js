import React from "react";

const Test = () => {
  let name = "Learn Programing";
  let myStyle = {
    color: "red",
    background: "black",
    padding: "0.7rem",
  };
  let myWork = {
    color: "grey",
  };

  return (
    <div>
      <h1 style={myStyle}>NAME:{name}</h1>
      <h2 style={myWork}>Atif Umer</h2>
    </div>
  );
};

export default Test;
