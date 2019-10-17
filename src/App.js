import React from "react";
import { render } from "react-dom";

// const Pet = props => {
//   return React.createElement("div",{}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed)
//     ]);
// };

// using destructuring
// pulls out the names of objects to make them avail as variable names
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

// just like puts or Rails.info
// throw new Error("lol");
// const App = () => {
//   return React.createElement(
//     "div",
//     // the attributes to pass in
//     {id: "something-important"},
//     // the children of the div. one or more
//     // React.createElement("h1", {}, "Adopt Me!")
//     [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {}, []),
//       React.createElement(Pet),
//       React.createElement(Pet)
//     ]
//  );
// };

const App = () => {
  return React.createElement(
    "div",
    // the attributes to pass in
    { id: "something-important" },
    // the children of the div. one or more
    // React.createElement("h1", {}, "Adopt Me!")
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
