function UpdateProgress(props) {
  return (
    <div>
      <h3>Pick a letter!:</h3>
      {props.incorrectGuessesNumber === props.maxGuesses ? props.resetButton() : null}
      <p>

        {props.word.split("").map(letter => {
          if (props.correctGuesses.includes(letter.toUpperCase())) {
            return letter;
          }
          return " _ ";
        })}
      </p>
      <h4>Incorrect Guesses: {`${props.incorrectGuessesNumber} out of ${props.maxGuesses}`}</h4>
      </div>
  )
}

export default UpdateProgress;
