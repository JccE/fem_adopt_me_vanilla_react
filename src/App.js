import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
// import { Router, Link } from "@reach/router";
import { Router } from "@reach/router";
// import SearchParams from "./SearchParams";
import "babel-polyfill";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// details is now a placeholder component that wont load the code till later
// parcel wraps this in a specific bundle
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>loading route ... </h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
