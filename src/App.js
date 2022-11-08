import "./App.css";
import Score from "./Score";
import Letters from "./Letters";
import Solution from "./Solution";
import { Component } from "react";
import EndGame from "./EndGame";

const generateLetterStatuses = () => {
  let letterStatus = {};
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false;
  }
  return letterStatus;
};

export class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: generateLetterStatuses(),
      solution: {
        word: "CALM",
        hint: "Your ideal mood for coding.",
      },
      score: 100,
    };
  }

  isCorrect = (letter) => {
    let newScore = this.state.score;
    if (this.state.solution.word.includes(letter)) {
      newScore += 5;
    } else {
      newScore -= 20;
    }

    return newScore;
  };

  selectLetter = (letter) => {
    let letterStatusDup = { ...this.state.letterStatus };
    letterStatusDup[letter] = true;
    let newScore = this.isCorrect(letter);
    this.setState({ letterStatus: letterStatusDup, score: newScore });
  };

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solution}
          letterStatus={this.state.letterStatus}
        />
        <Letters
          selectLetter={this.selectLetter}
          letterStatus={this.state.letterStatus}
        />
        <EndGame
          word={this.state.solution.word}
          score={this.state.score}
          letterStatus={this.state.letterStatus}
        />
      </div>
    );
  }
}

export default App;
