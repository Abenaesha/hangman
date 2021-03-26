function Keyboard(props) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return letters.map((letter) => (
    <div key={letter} id={letter}>
      <button
        disabled={
          props.incorrectGuessesNumber === props.maxGuesses
            ? true
            : // : props.wordGuessedCorrectly
              // ? true
              false
        }
        className={
          props.correctGuesses.includes(letter)
            ? "valid"
            : props.allGuesses.includes(letter)
            ? "invalid"
            : "normal"
        }
        onClick={() => {
          props.pressLetter(letter, props.word, props.correctGuesses);
        }}
      >
        {letter}
      </button>
    </div>
  ));
}

export default Keyboard;
