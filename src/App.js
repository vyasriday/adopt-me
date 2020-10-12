import React, { createElement } from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  const { name, animal, breed } = props;
  return createElement("div", {}, [
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Stray",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
