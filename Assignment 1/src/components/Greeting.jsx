import React from "react";

export default function Greeting() {
    const name = "John Doe";

    const randCol = ["red", "green", "blue", "white", "black"];

  const pickCol = () => {
    const num = Math.floor(Math.random() * randCol.length);
    return randCol[num];
  };

  return (
    <div>
      <h1>Hello, Welcome to React!</h1>
      <p>Wish you all the best, {name}.</p>
      <button onClick={() => alert(pickCol())}>Click me for a random color!</button>
    </div>
  );
}
