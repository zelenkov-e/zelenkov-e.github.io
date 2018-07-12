import React from "react";
import List from "./list";
import Details from "./details";
import CounterElement from "./countElement";

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>phone:</h2>
        <List />
        <hr />
        <h2>details:</h2>
        <Details />
        <hr />
        <CounterElement />
      </div>
    );
  }
}

export default Content;
