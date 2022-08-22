import React, { Component } from "react";

export class SimpleHttpExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => this.setState({ post: json }));
  }

  render() {
    return (
      <div className="comp">
        <pre>{JSON.stringify(this.state.post, null, 2)}</pre>
      </div>
    );
  }
}

export default SimpleHttpExample;
