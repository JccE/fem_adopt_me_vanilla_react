import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hashError: true };
  }

  componentDidCatch(error, info) {
    // log out error and info
    console.error("ErrorBoundary caught an error", error, info);
  }

  // this gets run every time there is new state or new props
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    // whatever is contained inside the component
    // this.props.children of Link would be "Click Here"
    return this.props.children;
  }
}

export default ErrorBoundary;
