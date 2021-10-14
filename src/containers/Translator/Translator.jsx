import SpeechBubble from "./../../components/SpeechBubble";
import styles from "./Translator.module.scss";
import code from "./../../data/code";
import { useState } from 'react';
import { useEffect } from "react";

const Translator = () => {
  const [morseToEnglish, setMorseToEnglish] = useState(false);
  const [textState, setTextState] = useState("");
  let resultString;
  

  //SUBMIT BUTTON PRESSED
  const checkConversion = () => {
    //SubmitButton activate correct conversion function 
    morseToEnglish ? convertToEnglish() : convertToMorse();
  }

  //SWAP BUTTON PRESSED - reset
  useEffect(() => {
    setTextState(textState.slice(0,0));
    console.log(`useEffectTriggered: ${textState}`);
    
  }, [morseToEnglish])

  //CONVERT TO ENGLISH 
  const convertToEnglish = () => {
    console.log(`will convert to English!`);
  }

  //CONVERT TO MORSE - evaluate at each space? 
  const convertToMorse = () => {
    console.log(`will convert to Morse!`);

    //iterate through each character, adding value to resultString
    

    //compare last character of textState to code key
    const stringKey = textState.slice(-1);
    console.log(code[0][stringKey]);

    //append value to resultString
    
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
      />
      <SpeechBubble
        id="grey"
        resultString={resultString}
        textState={ textState } 
        setTextState={ setTextState }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
      />
    </div>
  )
}

export default Translator;