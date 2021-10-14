import TextField from './../TextField';
import Output from "./../Output";
import Buttons from "./../Buttons";
import styles from "./SpeechBubbles.module.scss";

const SpeechBubbles = ({ id, textState, setTextState, morseToEnglish, setMorseToEnglish }) => {

  const classes = [styles.SpeechBubbles];
  let textbox;
  //placeholder changes based on morseToEnglish true/false
  //buttons change based on morseToEnlgish true/false
  //morseToEnglish change triggered by the swap button

  //if second SpeachBubble, render 'active' or 'disabled' BEM modifier
  id === "orange" ? classes.push(styles.SpeechBubbles_active) : classes.push(styles.SpeechBubbles_disabled);

  //display TextField or Output
  id=== "orange" 
    ? textbox = 
      <TextField 
        value={textState} 
        onChange={setTextState} 
        placeholder="What have you got to say?"
      />
    : textbox = 
        <Output 
          value={textState} 
          onChange={setTextState} 
          placeholder="What have you got to say?"
        />;

  return (
    <div id={id} className={ classes.join(" ") }>
      { textbox }
      <Buttons 
        morseToEnglish={morseToEnglish}
        setMorseToEnglish={setMorseToEnglish}
      />
    </div>
  )
}

export default SpeechBubbles;