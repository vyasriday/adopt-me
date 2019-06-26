import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Trace",
      animal: "Dog",
      breed: "German"
    }),
    React.createElement(Pet, {
      name: "Bernard",
      animal: "Cat",
      breed: "Spanish"
    }),
    React.createElement(Pet, {
      name: "Pertcy",
      animal: "Parrot",
      breed: "Helvetica"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
