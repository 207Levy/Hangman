const { Component } = require("react");
const { default: Letter } = require("./Letter");

class Letters extends Component {
  constructor() {
    super();
    this.str = "string in letters";
  }
  render() {
    return (
      <div>
        <div>{this.str}</div>
        <Letter />
      </div>
    );
  }
}

export default Letters;
