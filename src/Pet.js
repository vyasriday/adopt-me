import React from "react";

export default function Pet(props) {
  const { name, animal, breed } = props;
  // return createElement("div", {}, [
  //   createElement("h1", {}, name),
  //   createElement("h2", {}, animal),
  //   createElement("h2", {}, breed),
  // ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
