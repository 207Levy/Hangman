const { Component } = require("react");

class Score extends Component {
  render() {
    return <div>{this.props.score}</div>;
  }
}

export default Score;
