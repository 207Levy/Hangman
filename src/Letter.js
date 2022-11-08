const { Component } = require("react");

class Letter extends Component {
  render() {
    return !this.props.status ? <span className="unselect">{this.props.letter}</span> : <span className="selected">{this.props.letter}</span>;
  }
}

export default Letter;
