import SpeechBubble from "./../../components/SpeechBubble";
import styles from "./Translator.module.scss";
import code from "./../../data/code";
import { useState } from 'react';
import { useEffect } from "react";

const Translator = () => {
  const [morseToEnglish, setMorseToEnglish] = useState(false);
  const [textState, setTextState] = useState("");
  const [output, setOutput] = useState("");
  let errorArr = [];
  let resultString;
  

  //SUBMIT BUTTON PRESSED
  const checkConversion = () => {
    console.log(`output: ${output}`);
    //SubmitButton activate correct conversion function 
    morseToEnglish ? convertToEnglish() : convertToMorse();
    return resultString;
  }

  //SWAP BUTTON PRESSED - reset
  useEffect(() => {
    setTextState(textState.slice(0,0));
    setOutput(output.slice(0, 0));
  }, [morseToEnglish])

  //CONVERT TO ENGLISH 
  const convertToEnglish = () => {
    let resultArr = [];
    let reverseCode = {};
    errorArr = [];

    //reverse code
    Object.keys(code).forEach((i) => {
      reverseCode[code[i]] = i;
    });
    
    console.log(`will convert to English!`);
    const stringArr = textState.trim().split(" ");
    stringArr.forEach((i) => {
      reverseCode[i] ?
      resultArr.push(reverseCode[i]) :
      errorArr.push(i);
    });
    console.log(reverseCode);

    //error reject results, else send to Output
    errorArr.length===0 
    ? setOutput(output + resultArr.join(' ')) 
    : setOutput(output + `Sorry, can't recognise these: '${errorArr.join("' '")}'`);
  }

  //CONVERT TO MORSE
  const convertToMorse = () => {
    let resultArr = [];
    errorArr = [];
    
    //set to lower case, convert to array
    const stringArr = textState.trim().toLowerCase().split("");
    stringArr.forEach((i) => {
      code[i] ?
      resultArr.push(code[i]) :
      errorArr.push(i);
    });
    console.log(resultArr);
    
    //error reject results, else send to Output
    errorArr.length===0 
    ? setOutput(output + resultArr.join(' ')) 
    : setOutput(output + `Sorry, try without these: '${errorArr.join("' '")}'`);
    
    //append value to resultString
    ;
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
        output={ output }
        resultString={ resultString }
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
      />
    </div>
  )
}

export default Translator;