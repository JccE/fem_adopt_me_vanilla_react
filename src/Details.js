import React from "react";
import pet from "@frontendmasters/pet";

// class component
class Details extends React.Component {
  state = { loading: true };

  // set loading state
  // constructor(props) {
  //   // super says, call constructor on/all the way up to the React.Component
  //   super(props);

  //   // set inital state
  //   // calling this.setState will update this.state
  //   // it overrides and is additive
  //   // it is shallow by nature, deeply nested states will get entirely overridden
  //   this.state = {
  //     loading: true
  //   };
  // }

  // lifecycle methods
  // componentDidMount is very similar to useEffect in that it runs with first started up but does not run anymore afterwards
  componentDidMount() {
    // when we render the details page, render with the associated id
    // anything passed in from the parents will come from this.props.
    // this.props is immutable. cannot be changed/ read-only

    pet.animal(this.props.id).then(
      ({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          // when api comes back. set it to false
          loading: false
        });
      },
      // log errors in .then
      // write better errors than console.error!!
      console.error
    );
  }

  // every class component must have a render method
  render() {
    if (this.state.loading) {
      // eventually make all pretty
      return <h1>loading ...</h1>;
    }
    // pull attributes out of this.state
    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// function component
// const Details = props => {
//   // return <h1>Hey Bitches</h1>;
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

export default Details;
