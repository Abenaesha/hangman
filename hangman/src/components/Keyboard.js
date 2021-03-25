function Keyboard(props) {
  return (
    <div>
      <button onClick={pressLetter("A", props.word)}>A</button>
    </div>
  );
}
function pressLetter(letter, word) {
  let letterInWord = true;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      break;
    } else {
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
    }
  });
}

export default Keyboard;
