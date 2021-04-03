function UpdateProgress(props) {
  return (
    <div>
      <h2><span>G</span>uess <span>T</span>he <span>Word</span> 😎</h2>
      {props.incorrectGuessesNumber === props.maxGuesses ? (
        <h3>YOU LOST 😞. START AGAIN!</h3>
      ) : null}
      <p>
        {props.word.split("").map((letter) => {
          if (props.correctGuesses.includes(letter.toUpperCase())) {
            return letter.toUpperCase();
          } else {
            return " _ ";
          }
        })}
      </p>
      <h4>
        Incorrect Guesses : {`${props.incorrectGuessesNumber} out of ${props.maxGuesses}`}
      </h4>
      <h4>Guessed Letters : {props.allGuesses}</h4>
    </div>
  );
}

export default UpdateProgress;
