import express from "express";
import React from "react";
import { renderTopString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

//// Basically we render on the server, then send down to the client as complete markup...

// if they dont set the env variable, return 3000
const PORT = process.env.PORT || 3000;

// read the output html to use in server side rendering
const html = fs.readFileSync("dist/index.html").toString();

// split it into 2 parts. on index.html, right before and after "not rendered"... clever
const parts = html.split("not rendered");

const app = express();

// staticly serve everything in the dist directory
app.use("/dist", express.static("dist"));
// middleware runs everything its given a request
app.use((req, res) => {
  const reactMarkup = (
    // from reach router
    // so if somebody requests 'details/200', it will be the url coming in from express
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  // first part of html, rendered markup, second part of html
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

console.log("listening on " + PORT);
app.listen(PORT);
