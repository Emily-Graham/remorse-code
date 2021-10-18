import styles from "./Buttons.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import {
  pause,
  play,
  stop,
  reset,
  submit,
  swap,
} from "./../../data/svgButtons";

const Buttons = ({ resetText, SpeechBubbleId, morseToEnglish, setMorseToEnglish, checkConversion }) => {

  const [disable, setDisable] = useState(false);
  let sideButtons = [styles.Button, styles.Button_side];
  let mainButton = [styles.Button, styles.Button_main];
  let buttons;

  //SWAP BUTTON CLICKED
  const toggleMorse = () => {
    setMorseToEnglish(!morseToEnglish);
  }

  //disable buttons when translatig 
  useEffect(() => {
    setDisable(!disable);
    console.log(`morseToEnglish: ${morseToEnglish}`);
    console.log(`disabled: ${disable}`);
  }, [morseToEnglish])

  const logHello = () => {
    console.log(`hello, I got clicked!`);
  }

  //display text buttons for "orange" SpeechBubble, sound for "grey"
  SpeechBubbleId === "orange" 
    ? buttons = 
      <>
        <button className={ sideButtons.join(" ") } onClick={ resetText }>
          { reset }
        </button>
        <button className={ mainButton.join(" ") } onClick={ checkConversion }>
          { submit }
        </button>
        <button className={ sideButtons.join(" ") } onClick={ toggleMorse }>
          { swap }
        </button>
      </>
    : buttons = 
    <>
      <button className={ sideButtons.join(" ") } onClick={ logHello } disabled={ disable }>
        { pause }
      </button>
      <button className={ mainButton.join(" ") } onClick={ logHello } disabled={ disable }>
        { play }
      </button>
      <button className={ sideButtons.join(" ") } onClick={ logHello } disabled={ disable }>
        { stop }
      </button>
    </>
  ;

  return (
    <div className={ styles.Button_container }>
      { buttons }
    </div>
  );
};

export default Buttons;
