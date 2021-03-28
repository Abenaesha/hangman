import React from "react";
import "./App.css";
import UpdateDiagram from "./components/Diagram";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import UpdateProgress from "./components/Progress";
import ResetButton from "./components/Reset";

class App extends React.Component {
  chooseRandomWord = (words) => {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
  };
  state = {
    word: this.chooseRandomWord(["hello", "there", "guys"]),
    incorrectGuessesNumber: 0,
    correctGuessesNumber: 0,
    correctGuesses: [],
    maxGuesses: 6,
    allGuesses: [],
    wordGuessedCorrectly: true,
  };

  pressLetter = (letter, word) => {
    let wordGuessed = true;
    let letterInWord = false;
    for (let i = 0; i < word.length; i++) {
      if (letter.toLowerCase() === word[i]) {
        letterInWord = true;
        break;
      }
    }
    // for (let i = 0; i < this.state.correctGuesses.length; i++) {
    //   if (!word.split("").contains(this.state.correctGuesses[i])) {
    //     wordGuessed = false;
    //   }
    // }
    console.log(wordGuessed);
    this.setState((currState) => {
      if (letterInWord === true) {
        let newAllGuesses = [...currState.allGuesses];
        newAllGuesses.push(letter);
        let newCorrectGuesses = [...currState.correctGuesses];
        newCorrectGuesses.push(letter);
        let newCorrectGuessesNumber = currState.correctGuessesNumber;
        newCorrectGuessesNumber++;

        return {
          allGuesses: newAllGuesses,
          correctGuessesNumber: newCorrectGuessesNumber,
          correctGuesses: newCorrectGuesses,
        };
      } else {
        let newAllGuesses = [...currState.allGuesses];
        newAllGuesses.push(letter);
        let newIncorrectGuessesNumber = currState.incorrectGuessesNumber;
        newIncorrectGuessesNumber++;
        return {
          allGuesses: newAllGuesses,
          incorrectGuessesNumber: newIncorrectGuessesNumber,
        };
      }
    });
  };

  resetButton = () => {
    this.setState({
      word: this.chooseRandomWord(["hello", "there", "guys"]),
      incorrectGuessesNumber: 0,
      correctGuessesNumber: 0,
      correctGuesses: [],
      maxGuesses: 6,
      allGuesses: [],
      wordGuessedCorrectly: false,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <section id="section1">
          <div id="diagram">
            <UpdateDiagram
              incorrectGuessesNumber={this.state.incorrectGuessesNumber}
            />
          </div>
          <div id="progress">
            <UpdateProgress
              word={this.state.word}
              correctGuesses={this.state.correctGuesses}
              maxGuesses={this.state.maxGuesses}
              incorrectGuessesNumber={this.state.incorrectGuessesNumber}
              resetButton={this.resetButton}
              allGuesses={this.state.allGuesses}
            />
          </div>
        </section>
        <section id="section2">
          <ResetButton resetButton={this.resetButton} />
          <div id="keyboard">
            <Keyboard
              word={this.state.word}
              pressLetter={this.pressLetter}
              correctGuesses={this.state.correctGuesses}
              allGuesses={this.state.allGuesses}
              maxGuesses={this.state.maxGuesses}
              incorrectGuessesNumber={this.state.incorrectGuessesNumber}
              wordGuessedCorrectly={this.state.incorrectGuessesNumber}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
