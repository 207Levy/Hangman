import { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        {this.props.solution.word.split("").map((l) => {
          if (this.props.letterStatus[l]) {
            return (
              <span>
                <Letter letter={l} />
              </span>
            );
          }

          return (
            <span>
              <Letter letter={"_ "} />
            </span>
          );
        })}
        <div>
          {this.props.solution.hint}
        </div>
      </div>
    );
  }
}

export default Solution;
