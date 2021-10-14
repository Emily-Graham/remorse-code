import TextField from './../TextField';
import Buttons from "./../Buttons";
import styles from "./SpeechBubbles.module.scss";

const SpeechBubbles = ({ textState, setTextState, morseToEnglish, setMorseToEnglish }) => {

  //placeholder changes based on morseToEnglish true/false
  //buttons change based on morseToEnlgish true/false
  //morseToEnglish change triggered by the swap button
  //if second SpeachBubble, render 'active' or 'disabled' BEM modifier





  return (
    <div className={styles.SpeechBubbles}>
      <TextField 
          value={textState} 
          onChange={setTextState} 
          placeholder="What have you got to say?"
      />
      <Buttons 
        morseToEnglish={morseToEnglish}
        setMorseToEnglish={setMorseToEnglish}
      />
    </div>
  )
}

export default SpeechBubbles;