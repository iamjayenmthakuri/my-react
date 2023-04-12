import React, { useState } from "react";

const Home = () => {
  const [hame, setHame] = useState("jayen");
  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };

  const handleClick = () => {
    setHame("Lihada");
    console.log(hame);
  };
  return (
    <div>
      <h2>HomePage</h2>
      <p>{hame}</p>
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
