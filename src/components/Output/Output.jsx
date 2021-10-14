import styles from './Output.module.scss';

const Output = ( { output, morseToEnglish } ) => {

  let display = ``;
  //display correct placeholder depending on morseToEnglish
  const placeholder = morseToEnglish ? "Type your morse code message" : "- -.-- .--. . / -.-- --- ..- .-. / . -. --. .-.. .. ... .... / -- . ... ... .- --. . / .... . .-. .";

  //display output
  output ? display = output : display = placeholder;

  return (
    <p className={ styles.Output }>
      { display }
    </p>
  )
}

export default Output;