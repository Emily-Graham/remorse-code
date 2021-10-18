import SpeechBubble from "./../../components/SpeechBubble";
import styles from "./Translator.module.scss";
import { convertToEnglish, convertToMorse } from "./utils";
import { useState } from 'react';
import { useEffect } from "react";

const Translator = () => {
  const [morseToEnglish, setMorseToEnglish] = useState(false);
  const [textState, setTextState] = useState("");
  const [output, setOutput] = useState("");

  //SUBMIT BUTTON PRESSED
  const checkConversion = () => {
    //call correct conversion function 
    morseToEnglish 
    ? setOutput(convertToEnglish(textState))
    : setOutput(convertToMorse(textState));
  }

  //SWAP BUTTON PRESSED
  useEffect(() => {
    resetText();
  }, [morseToEnglish])

  //RESET BUTTON PRESSED
  const resetText = () => {
    setTextState("");
    setOutput("");
  }

  return (
    <div className={ styles.Translator }>
      <SpeechBubble 
        id="orange"
        textState={ textState } 
        setTextState={ setTextState }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
        checkConversion={ checkConversion }
        resetText = { resetText }
      />
      <SpeechBubble
        id="grey"
        output={ output }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
      />
    </div>
  )
}

export default Translator;