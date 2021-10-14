import styles from './Output.module.scss';

const Output = ( { morseToEnglish, resultString } ) => {

  //where conversion result is pushed to;
  const placeholder = morseToEnglish ? "Type your morse code message" : "- -.-- .--. . / -.-- --- ..- .-. / . -. --. .-.. .. ... .... / -- . ... ... .- --. . / .... . .-. .";
  //array converted to string
  let output = resultString !== 'undefined' ? resultString : placeholder;


  return (
    <p className={ styles.Output }>
      { output }
    </p>
  )
}

export default Output;
