import styles from "./Buttons.module.scss";
import {
  pause,
  play,
  stop,
  reset,
  submit,
  swap,
} from "./../../data/svgButtons";

const Buttons = ({ morseToEnglish, setMorseToEnglish }) => {
  let sideButtons = [styles.Button_side];
  let mainButton = [styles.Button_main];

  //clicking on reset button triggers state change for morseToEnglish

  //if morseToEnglish true, disable SpeechBubble2 buttons
  if (morseToEnglish) {
    sideButtons.push(styles.Button_disabled);
  }

  //if morseToEnglish true, flip buttons
  const Button1 = morseToEnglish ? pause : reset;
  const Button2 = morseToEnglish ? play : submit;
  const Button3 = morseToEnglish ? stop : swap;

  //
  

  return (
    <div className={ styles.Button_container }>
      <button className={ sideButtons.join(" ") }>
        { Button1 }
      </button>
      <button className={ mainButton.join(" ") }>
        { Button2 }
      </button>
      <button className={ sideButtons.join(" ") }>
        { Button3 }
      </button>
    </div>
  );
};

export default Buttons;
