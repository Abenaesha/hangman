function Keyboard(props) {
  const x =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  return x.map(letter => (
    <div>
    <button onClick={() => props.pressLetter(letter, props.word)}>{letter}</button>
    </div>
  ))
  // return (
  //   <div>
  //     <button onClick={() => props.pressLetter("A", props.word)}>A</button>
  //     <button onClick={() => props.pressLetter("B", props.word)}>B</button>
  //     <button onClick={() => props.pressLetter("C", props.word)}>C</button>
  //     <button onClick={() => props.pressLetter("D", props.word)}>D</button>
  //     <button onClick={() => props.pressLetter("E", props.word)}>E</button>
  //     <button onClick={() => props.pressLetter("F", props.word)}>F</button>
  //     <button onClick={() => props.pressLetter("G", props.word)}>G</button>
  //     <button onClick={() => props.pressLetter("H", props.word)}>H</button>
  //     <button onClick={() => props.pressLetter("I", props.word)}>I</button>
  //     <button onClick={() => props.pressLetter("J", props.word)}>J</button>
  //     <button onClick={() => props.pressLetter("K", props.word)}>K</button>
  //     <button onClick={() => props.pressLetter("L", props.word)}>L</button>
  //     <button onClick={() => props.pressLetter("M", props.word)}>M</button>
  //     <button onClick={() => props.pressLetter("N", props.word)}>N</button>
  //     <button onClick={() => props.pressLetter("O", props.word)}>O</button>
  //     <button onClick={() => props.pressLetter("P", props.word)}>P</button>
  //     <button onClick={() => props.pressLetter("Q", props.word)}>Q</button>
  //     <button onClick={() => props.pressLetter("R", props.word)}>R</button>
  //     <button onClick={() => props.pressLetter("S", props.word)}>S</button>
  //     <button onClick={() => props.pressLetter("T", props.word)}>T</button>
  //     <button onClick={() => props.pressLetter("U", props.word)}>U</button>
  //     <button onClick={() => props.pressLetter("V", props.word)}>V</button>
  //     <button onClick={() => props.pressLetter("W", props.word)}>W</button>
  //     <button onClick={() => props.pressLetter("X", props.word)}>X</button>
  //     <button onClick={() => props.pressLetter("Y", props.word)}>Y</button>
  //     <button onClick={() => props.pressLetter("Z", props.word)}>Z</button>
  //   </div>
  // );
}


export default Keyboard;
