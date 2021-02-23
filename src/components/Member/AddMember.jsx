import React, { Component } from "react";

export default class AddMember extends Component {
  state = { name: "" };
  render() {
    return (
      <div>
        <h1>Add Member</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.name);
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.name}
          onChange={function (e) {
            this.setState({ name: e.target.value });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
