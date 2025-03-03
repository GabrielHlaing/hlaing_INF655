import React from "react";

export default function Greeting({username}) {
  return (
    <div>
      <h1>Hello, <i>{username}</i> Welcome to React!</h1>
    </div>
  );
}
