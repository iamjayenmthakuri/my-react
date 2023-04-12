import React from "react";

const Home = () => {
  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };

  const handleClick = (e) => {
    console.log("Hello, hinjas", e.target);
  };
  return (
    <div>
      <h2>HomePage</h2>
      <button onClick={handleClick}>clickMe</button>
      <button
        onClick={(e) => {
          handleClickAgain(" jayen", e);
          //   console.log("hello");
        }}
      >
        Click Me again
      </button>
    </div>
  );
};

export default Home;
