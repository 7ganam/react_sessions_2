import React, { Component } from "react";

export default class CompleteHttpExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "",
      isLoading: false,
      error: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true, error: "" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ post: json, isLoading: false, error: "" });
      })
      .catch((error) => {
        this.setState({ isLoading: false, error: "something went wrong" });
      });
  }

  render() {
    return (
      <div className="comp">
        {this.state.isLoading ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.error ? (
              <div>{this.state.error}</div>
            ) : (
              <pre>{JSON.stringify(this.state.post, null, 2)}</pre>
            )}
          </div>
        )}
      </div>
    );
  }
}
