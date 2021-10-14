import styles from "./TextField.module.scss";

const TextField = ({ value, onChange, placeholder="Enter text here" }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <textarea className={styles.TextArea} type="text" rows="60" value={value} onChange={handleChange} ></textarea> 
  );
}

export default TextField; 