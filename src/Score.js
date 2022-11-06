const { Component } = require("react");

class Score extends Component {
    score = 100;

    render(){
        return <div>{this.score}</div>
    }
}


export default Score;