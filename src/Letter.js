const { Component } = require("react");

class Letter extends Component {

  selectLetter = ()=>{
    this.props.selectLetter(this.props.letter)
  }

  render() {
    return !this.props.status ? <span onClick={this.selectLetter} className="unselect">{this.props.letter}</span> : <span className="selected">{this.props.letter}</span>;
  }
}

export default Letter;
