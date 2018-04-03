import React from "react";
import styled from "styled-components";
import axios from "axios";

const INPUT = styled.input`
  width: 150px;
  margin: 15px;
`;

class ComponentFormSend extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);

    axios
      .post("/", {
        name,
        email,
        message
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error.response));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
          <p>
            <label>name:</label>
            <br />
            <INPUT type="text" id="name" />
          </p>
          <p>
            <label>email:</label>
            <br />
            <INPUT type="text" id="email" />
          </p>
          <p>
            <label>phone:</label>
            <br />
            <INPUT type="text" id="phone" />
          </p>
          <p>
            <label>message:</label>
            <br />
            <INPUT type="text" id="message" />
          </p>
          <INPUT type="submit" />
        </form>
      </div>
    );
  }
}
export default ComponentFormSend;
