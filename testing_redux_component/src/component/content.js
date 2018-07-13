import React from "react";

import List from "./list";
import Details from "./details";

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <List />
        <hr />
        <h2>details:</h2>
        <Details />
      </div>
    );
  }
}

export default Content;
