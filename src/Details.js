import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";
import _ from "lodash";
import moment from "moment";

console.log(_, moment);

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    // throw new Error("lol");
    pet.animal(this.props.id).then(
      ({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,

          loading: false
        });
      },

      console.error
    );
  }

  // if its true make it false, if its false make it true
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>Nopes</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// to use error boundaries, we wrap this thing here
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/*grab the props*/}
      {/*equivalent to <Details id={props.id} /> */}
      <Details {...props} />
    </ErrorBoundary>
  );
}
