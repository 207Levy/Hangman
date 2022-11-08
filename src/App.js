import "./App.css";
import Score from "./Score";
import Letters from "./Letters";
import Solution from "./Solution";
import { Component } from "react";

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
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solution}
          letterStatus={this.state.letterStatus}
        />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
