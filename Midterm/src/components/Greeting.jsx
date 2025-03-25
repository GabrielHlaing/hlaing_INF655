import React, { useState } from "react";

export default function Greeting({username}) {
  const date = new Date();
  let theDate = date.toDateString();

  const [greet, setGreet] = useState("Welcome to React!")

  function handleclick(){
    if(greet === "Welcome to React!")
    setGreet("Did you change the greeting message? Click again!");
    else
      setGreet("Welcome to React!");
  }

  return (
    <>
    <div>
      <h1>Hello, <i>{username}</i>, {greet}</h1>
    </div>
    <div>
    <h2>Today's Date: <span style={{ fontWeight: "normal" }}>{theDate}</span></h2>
    </div>
    <button onClick={handleclick}>Change Greeting</button>
    </>
  );
}
