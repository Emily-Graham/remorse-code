import TextField from './../TextField';
import Output from "./../Output";
import Buttons from "./../Buttons";
import styles from "./SpeechBubbles.module.scss";

const SpeechBubbles = ({ id, textState, setTextState, morseToEnglish, setMorseToEnglish, resultString, checkConversion }) => {
  //statechange for text 

  const classes = [styles.SpeechBubbles];
  let textbox;

  //morseToEnglish change triggered by the swap button
  

  //if second SpeachBubble, render 'active' or 'disabled' BEM modifier
  id === "orange" ? classes.push(styles.SpeechBubbles_active) : classes.push(styles.SpeechBubbles_disabled);

  //display TextField or Output
  id=== "orange" 
    ? textbox = 
      <TextField 
        value={ textState } 
        onChange={ setTextState } 
        morseToEnglish={ morseToEnglish }
      />
    : textbox = 
        <Output 
          textState={ textState } 
          morseToEnglish={ morseToEnglish }
          resultString={resultString}
        />
  ;

  return (
    <div id={ id } className={ classes.join(" ") }>
      { textbox }
      <Buttons 
        SpeechBubbleId={ id }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
        textState={ textState }
        setTextState={ setTextState }
        checkConversion={ checkConversion }
      />
    </div>
  )
}

export default SpeechBubbles;