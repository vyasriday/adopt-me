import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     name: "Trace",
  //     animal: "Dog",
  //     breed: "German"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Bernard",
  //     animal: "Cat",
  //     breed: "Spanish"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pertcy",
  //     animal: "Parrot",
  //     breed: "Helvetica"
  //   })
  // ]);
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Trace" animal="Dog" breed="German" />
      <Pet name="Bernard" animal="Cat" breed="Spanish" />
      <Pet name="Pertcy" animal="Parrot" breed="Helvetica" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
