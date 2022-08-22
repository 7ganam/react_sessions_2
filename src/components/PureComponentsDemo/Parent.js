import React, { Component } from "react";
import Pure from "./Pure";
import UnPure from "./UnPure";
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "ahmed" };
  }

  changeName = () => {
    this.setState({ name: "kaled" });
  };

  render() {
    return (
      <div className="comp">
        <Pure name={this.state.name} />
        <UnPure name={this.state.name} />
        <button onClick={this.changeName}>change state </button>
      </div>
    );
  }
}
