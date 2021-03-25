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

  render() {
    return (
      <div className="App">
        <Header />
        <section id="Row1">
          <div id="Diagram">
            <UpdateDiagram />
          </div>
          <div id="Progress">
            <UpdateProgress />
          </div>
        </section>
        <section id="Section2">
          <ResetButton />
          <Keyboard word={this.state.word} />
        </section>
      </div>
    );
  }
}

export default App;
