import styles from "./Buttons.module.scss";
import {
  pause,
  pause_disabled,
  play,
  play_disabled,
  stop,
  stop_disabled,
  reset,
  submit,
  swap,
} from "./../../data/svgButtons";

const Buttons = ({ resetText, SpeechBubbleId, morseToEnglish, setMorseToEnglish, checkConversion }) => {
  let buttons;
  let sideButtons = [styles.Button_side];
  let mainButton = [styles.Button_main];

  //SWAP BUTTON CLICKED - useEffect to also activate clearTextField? 
  const toggleMorse = () => {
    setMorseToEnglish(!morseToEnglish); //toggle between morse<=>English
    console.log(`morse => English: ${morseToEnglish}`);
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
      <button className={ sideButtons.join(" ") }>
        { morseToEnglish ? pause_disabled : pause }
      </button>
      <button className={ mainButton.join(" ") }>
        { morseToEnglish ? play_disabled : play }
      </button>
      <button className={ sideButtons.join(" ") }>
        { morseToEnglish ? stop_disabled : stop }
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
