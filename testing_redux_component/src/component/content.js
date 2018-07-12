import React from "react";

import List from "./list";
import Details from "./details";
// import CounterElement from "./countElement";

// const ColorEelement = styled.div`
//   color: ${props => (props.onclick ? "red" : "black")};
// `;

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <h2>phone:</h2> */}
        <List />
        <hr />
        <h2>details:</h2>
        <Details />
      </div>
    );
  }
}

export default Content;
