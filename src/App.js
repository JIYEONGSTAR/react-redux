import React, { Component } from "react";
import AddMemberRoot from "./components/AddMemberRoot";
import DisplayMemberRoot from "./components/DisplayMemberRoot";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>root</h1>
        <AddMemberRoot />
        <DisplayMemberRoot />
      </div>
    );
  }
}
