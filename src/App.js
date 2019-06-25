const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
