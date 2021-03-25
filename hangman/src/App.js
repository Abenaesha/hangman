import React from "react";
import "./App.css";
import UpdateDiagram from "./components/Diagram";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import UpdateProgress from "./components/Progress";
import ResetButton from "./components/Reset";

class App extends React.Component {
  state = {
    word: "banana",
    incorrectGuessesNumber: 0,
    correctGuessesNumber: 0,
    correctGuesses: [],
  };

 pressLetter = (letter, word) => {
    let letterInWord = false;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        letterInWord = true
        break;
      }
    }
    this.setState((currState) => {
      if (letterInWord === true) {
        let newCorrectGuesses = [...currState.correctGuesses];
        newCorrectGuesses.push(letter);
        let newCorrectGuessesNumber = currState.correctGuessesNumber;
        newCorrectGuessesNumber++;
        return {
          correctGuessesNumber: newCorrectGuessesNumber,
          correctGuesses: newCorrectGuesses,
        };
      } else {
        let newIncorrectGuessesNumber = currState.incorrectGuessesNumber;
        newIncorrectGuessesNumber++;
        return {
          incorrectGuessesNumber: newIncorrectGuessesNumber
        }
      }
    });
  }

  resetButton = () => {
    this.setState({
      word: "banana",
      incorrectGuessesNumber: 0,
      correctGuessesNumber: 0,
      correctGuesses: [],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section id="Row1">
          <div id="Diagram">
            <UpdateDiagram />
          </div>
          <div id="Progress">
            <UpdateProgress word={this.state.word} correctGuesses={this.state.correctGuesses} />
          </div>
        </section>
        <section id="Section2">
          <ResetButton resetButton={this.resetButton}/>
          <Keyboard word={this.state.word} pressLetter={this.pressLetter} />
        </section>
      </div>
    );
  }
}

export default App;
