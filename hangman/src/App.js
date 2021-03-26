import React from "react";
import "./App.css";
import UpdateDiagram from "./components/Diagram";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import UpdateProgress from "./components/Progress";
import ResetButton from "./components/Reset";


class App extends React.Component {

  state = {
    word: "northcoders",
    incorrectGuessesNumber: 0,
    correctGuessesNumber: 0,
    correctGuesses: [],
    maxGuesses: 6
  };

 pressLetter = (letter, word) => {
    let letterInWord = false;
    for (let i = 0; i < word.length; i++) {
      if (letter.toLowerCase() === word[i]) {
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
      word: "northcoders",
      incorrectGuessesNumber: 0,
      correctGuessesNumber: 0,
      correctGuesses: [],
      maxGuesses: 6
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <Header />
        </div>
        <section id="Row1">
          <div id="Diagram">
            <UpdateDiagram />
          </div>
          <div id="progress">
            <UpdateProgress 
            word={this.state.word} 
            correctGuesses={this.state.correctGuesses}
            maxGuesses={this.state.maxGuesses}
            incorrectGuessesNumber={this.state.incorrectGuessesNumber}
            resetButton={this.resetButton} />
          </div>
        </section>
        <section id="section2">
          <ResetButton resetButton={this.resetButton}/>
          <div id="keyboard">
          <Keyboard word={this.state.word} pressLetter={this.pressLetter} correctGuesses={this.state.correctGuesses}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
