import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // special react method
  // takes in a set of props and gives back a new state
  //
  // getdirivedstatefromprops takes in a set of properties,
  // does some filtering on them, then passes on to the component
  static getDerivedStateFromProps({ media }) {
    // default image
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      // the media objects have small, medium, large, full
      // photos will be an array of strings of urls
      photos = media.map(({ large }) => large);
    }
    // return whatever object we want to be merged with the current state
    return { photos };
  }

  // for event listeners and functions passed to children,
  // convert to arrow function to get 'this' referenced to Carousel because it will not create a new context
  handleIndexClick = event => {
    this.setState({
      // use dataset to get the data on the html img tag
      // going to come back as a string, so convert it to number
      // unary '+' turns(coerce) it to a number
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        // an array of photos where if the second one is selected, for example
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          // map has two params it provides, the photo and the index
          {photos.map((photo, index) => {
            // you should use a button... dont do this in production

            // this actually disable the next line in es-lint.... cool
            // eslint-disable-next-line
            <img
              key={photo}
              // if someone clicks on the "button" we pull the index off the imgage
              onClick={this.handleIndexClick}
              data-index={index}
              scr={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
