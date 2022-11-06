import { Component } from "react";

class Solution extends Component {
  constructor() {
    super();
    this.solution = ["_ ", "_ ", "_ ", "_ "];
  }

  render() {
    return this.solution.map((letter) => <span>{letter}</span>);
  }
}

export default Solution;
