import TextField from "./../TextField";
import Output from "./../Output";
import Buttons from "./../Buttons";
import { tail_grey, tail_orange, tail_orange_small, tail_grey_small } from "../../data/tails";
import styles from "./SpeechBubbles.module.scss";

const SpeechBubbles = ({
  id,
  textState,
  setTextState,
  morseToEnglish,
  setMorseToEnglish,
  checkConversion,
  output,
}) => {
  const classes = [styles.SpeechBubbles];
  const tail_classes = [styles.SpeechBubbles_tail];
  const tail2_classes = [styles.SpeechBubbles_tail_small]
  let textbox;
  let tail;
  let tail2;

  //if second SpeachBubble, render 'active' or 'disabled' BEM modifier
  id === "orange"
    ? classes.push(styles.SpeechBubbles_active)
    : classes.push(styles.SpeechBubbles_disabled);

  //display TextField or Output
  id === "orange"
    ? (textbox = (
        <TextField
          value={textState}
          onChange={setTextState}
          morseToEnglish={morseToEnglish}
        />
      ))
    : (textbox = (
        <Output
          output={output}
          morseToEnglish={morseToEnglish}
        />
      ));

  //render correct tail colour
  id === "orange" 
  ? tail = tail_orange : tail = tail_grey;
  id === "orange" 
  ? tail2 = tail_orange_small : tail2 = tail_grey_small;

  //render correct tail classes 
  id === "orange" 
  ? tail_classes.push(styles.SpeechBubbles_tail_orange) : tail_classes.push(styles.SpeechBubbles_tail_grey);
  id === "orange" 
  ? tail2_classes.push(styles.SpeechBubbles_tail_small_orange) : tail2_classes.push(styles.SpeechBubbles_tail_small_grey);

  return (
    <div id={id} className={classes.join(" ")}>
      <div className={ tail_classes.join(" ") }>{ tail }</div>
      <div className={ tail2_classes.join(" ") }>{ tail2 }</div>
      {textbox}
      <Buttons
        SpeechBubbleId={id}
        morseToEnglish={morseToEnglish}
        setMorseToEnglish={setMorseToEnglish}
        textState={textState}
        setTextState={setTextState}
        checkConversion={checkConversion}
      />
    </div>
  );
};

export default SpeechBubbles;
