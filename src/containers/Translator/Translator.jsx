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
    ? setOutput(output + convertToEnglish(textState))
    : setOutput(output + convertToMorse(textState));
  }

  //SWAP BUTTON PRESSED
  useEffect(() => {
    setTextState(textState.slice(0, 0));
    setOutput(output.slice(0, 0));
  }, [morseToEnglish])

  return (
    <div className={ styles.Translator }>
      <SpeechBubble 
        id="orange"
        textState={ textState } 
        setTextState={ setTextState }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
        checkConversion={ checkConversion }
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