import React, { Component } from "react";

export default class ControlledFormDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div className="comp">
        {/* -------------------------------------------------------------- */}
        {/* -------------------------------------------------------------- */}
        <label>uncontrolled input</label> <br />
        <input
          onChange={(event) => {
            console.log("event1 value: ", event.target.value);
          }}
        ></input>
        <br />
        {/* -------------------------------------------------------------- */}
        {/* -------------------------------------------------------------- */}
        <label>input const value</label> <br />
        <input
          value="5"
          onChange={(event) => {
            console.log("event2 value: ", event.target.value);
          }}
        ></input>
        <br />
        {/* -------------------------------------------------------------- */}
        {/* -------------------------------------------------------------- */}
        <label>controlled input</label> <br />
        <input
          value={this.state.value}
          onChange={(event) => {
            console.log("event2 value: ", event.target.value);
            let value = event.target.value;
            // value = value.length > 5 ? value.slice(0, 5) : value;
            this.setState({ value: value });
          }}
        ></input>
        {/* -------------------------------------------------------------- */}
        {/* -------------------------------------------------------------- */}
      </div>
    );
  }
}
