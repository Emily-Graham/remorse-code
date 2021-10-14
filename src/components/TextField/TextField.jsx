import styles from "./TextField.module.scss";

const TextField = ({ value, onChange, morseToEnglish }) => {
  
  //placeholder changes based on morseToEnglish true/false
  let placeholder = morseToEnglish ? "- -.-- .--. . / -.-- --- ..- .-. / . -. --. .-.. .. ... .... / -- . ... ... .- --. . / .... . .-. ." : "Type your English message here";
  
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <textarea className={styles.TextArea} type="text" value={value} onChange={handleChange} placeholder={placeholder}></textarea> 
  );
}

export default TextField; 