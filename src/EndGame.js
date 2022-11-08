const { Component } = require("react");

class EndGame extends Component {
  render() {
    if(this.props.score === 0){
        return <div className="lose">Game Over :/ <br/>The word is {this.props.word}</div>
    }
    else{
        let counter = 0
        for (let letter of this.props.word.split("")){
            if(this.props.letterStatus[letter] !== true){
                return 
            }
        }
        return <div className="won">You guessed right! Congratulations!</div>
    }

  }
}

export default EndGame;
