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
  //if morseToEnglish true, flip buttons
  const Button1 = morseToEnglish ? pause : reset;
  const Button2 = morseToEnglish ? play : submit;
  const Button3 = morseToEnglish ? stop : swap;

  //clicking on reset button triggers state change for morseToEnglish

  return (
    <div className={styles.Button_container}>
      <button className={styles.Button_side}>{Button1}</button>
      <button className={styles.Button_main}>{Button2}</button>
      <button className={styles.Button_side}>{Button3}</button>
    </div>
  );
};

export default Buttons;
