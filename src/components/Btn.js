import React from "react";

const Btn = () => {
  const handleClick = () => {
    alert("you'r Clicked! Sucssces");
  };
  return (
    <>
      <div className="continer">
        <button onClick={handleClick}>Click me</button>
        <span>Alert box</span>
      </div>
    </>
  );
};

export default Btn;
