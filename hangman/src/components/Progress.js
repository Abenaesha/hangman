function UpdateProgress(props) {
  return (
    <div>
      <h3>Pick a letter!</h3>
      {props.incorrectGuessesNumber === props.maxGuesses ? (
        <p>Sorry, you lost</p>
      ) : null}
      <p>
        {props.word.split("").map((letter) => {
          if (props.correctGuesses.includes(letter.toUpperCase())) {
            return letter;
          } else {
            return " _ ";
          }
        })}
      </p>
      <h4>
        Incorrect Guesses:{" "}
        {`${props.incorrectGuessesNumber} out of ${props.maxGuesses}`}
      </h4>
      <h4> Guessed Letters: {props.allGuesses}</h4>
    </div>
  );
}

export default UpdateProgress;
