import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// any other browser-only things

// hydrate is like render, says, i expect there to be markup in this place, take over whats there, dont rerender
hydrate(<App />, document.getElementById("root"));
