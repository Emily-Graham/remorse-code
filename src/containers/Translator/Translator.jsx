import SpeechBubble from "./../../components/SpeechBubble";
import styles from "./Translator.module.scss";
import { useState } from 'react';

const Translator = () => {
  const [morseToEnglish, setMorseToEnglish] = useState(false);
  const [textState, setTextState] = useState("");

  console.log( textState);

  return (
    <div className={styles.Translator}>
      <SpeechBubble 
        textState={textState} 
        setTextState={setTextState}
        morseToEnglish={morseToEnglish}
        setMorseToEnglish={setMorseToEnglish}
      />
      <SpeechBubble 
        morseToEnglish={morseToEnglish}
        setMorseToEnglish={setMorseToEnglish}
      />
    </div>
  )
}

export default Translator;