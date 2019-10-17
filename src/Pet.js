import React from "react";

// using destructuring
// pulls out the names of objects to make them avail as variable names

// name the function for ease in debugging
export default function Pet({ name, animal, breed }) {
  // throw new Error("lol");
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed)
  // ]);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

// const Pet = props => {
//   return React.createElement("div",{}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed)
//     ]);
// };
