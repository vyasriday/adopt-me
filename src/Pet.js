import { createElement } from "react";

export default function Pet(props) {
  const { name, animal, breed } = props;
  return createElement("div", {}, [
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed),
  ]);
}
