const { Component } = require("react");

class Letter extends Component {
  constructor(){
    super();
    this.letter = "z";
  }

  render() {
    return <div>{this.letter}</div>;
  }
}



export default Letter;