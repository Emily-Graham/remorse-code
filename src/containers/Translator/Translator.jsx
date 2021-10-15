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

  console.log(textState);

  //SUBMIT BUTTON PRESSED
  const checkConversion = () => {
    let resolved;
    console.log(`output: ${output}`);

    //call correct conversion function 
    if (morseToEnglish){
      convertToEnglish();
    } else {
      setOutput(output + convertToMorse(textState));
    }
  }

  //SWAP BUTTON PRESSED - reset
  useEffect(() => {
    setTextState(textState.slice(0,0));
    setOutput(output.slice(0, 0));
  }, [morseToEnglish])

  // CONVERT TO ENGLISH 
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

    //error reject results, else send to Output
    errorArr.length===0 
    ? setOutput(output + resultArr.join(' ')) 
    : setOutput(output + `Sorry, can't recognise these: '${errorArr.join("' '")}'`);
  }

  //CONVERT TO MORSE
  const convertToMorse = (string) => {
    let resultArr = [];
    let stringArr;
    let errorArr = [];
    let result;
    
    //set to lower case, remove multiple spaces
    const cleanString = string.trim().toLowerCase().replace(/  +/, " ")
    //convert to array
    stringArr = cleanString.split("");
    //push coverversion to new array
    stringArr.forEach((i) => {
      code[i] ?
      resultArr.push(code[i]) :
      errorArr.push(i);
    });
    
    // if error reject results, else send to Output
    if (resultArr.length===0) {
      console.log(`Error: string was empty`);
      return `try typing something!`;
    } else if (errorArr.length===0){ 
      return resultArr.join(" ");
    } else {
      console.log(`error: input character ${result} was not valid`);
      result = errorArr.join("' '");
      return `Sorry, try without these: '${result}'`;
    }
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
        morseToEnglish={ morseToEnglish }
        setMorseToEnglish={ setMorseToEnglish }
      />
    </div>
  )
}

export default Translator;