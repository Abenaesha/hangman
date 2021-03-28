import image1 from "../images/0.jpg";
import image2 from "../images/1.jpg";
import image3 from "../images/2.jpg";
import image4 from "../images/3.jpg";
import image5 from "../images/4.jpg";
import image6 from "../images/5.jpg";
import image7 from "../images/6.jpg";

function UpdateDiagram(props) {
  
    if (props.incorrectGuessesNumber === 0) {
      return <img src={image1} alt={"post"}></img>;
    } else if (props.incorrectGuessesNumber === 1) {
      return <img src={image2} alt={"head"}></img>;
    } else if (props.incorrectGuessesNumber === 2) {
      return <img src={image3} alt={"body"}></img>;
    } else if (props.incorrectGuessesNumber === 3) {
      return <img src={image4} alt={"left arm"}></img>;
    } else if (props.incorrectGuessesNumber === 4) {
      return <img src={image5} alt={"right arm"}></img>;
    } else if (props.incorrectGuessesNumber === 5) {
      return <img src={image6} alt={"left leg"}></img>;
    } else if (props.incorrectGuessesNumber === 6) {
      return <img src={image7} alt={"right leg"}></img>;
    }
    return <img src={image1} alt={"post"}></img>;

}

export default UpdateDiagram;
