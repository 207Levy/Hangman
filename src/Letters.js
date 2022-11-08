const { Component } = require("react");
const { default: Letter } = require("./Letter");

class Letters extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.letterStatus).map((l, i)=><Letter selectLetter={this.props.selectLetter} status={this.props.letterStatus[l]} key={i} letter={l} />)}
      </div>
    );
  }
}

export default Letters;
