import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import "babel-polyfill";
import Details from "./Details";

const App = () => {
  // <React.StrictMode>
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
  // </React.StrictMode>;
};

render(<App />, document.getElementById("root"));
