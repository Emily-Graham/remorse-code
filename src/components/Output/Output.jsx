import styles from './Output.module.scss';

const Output = () => {

  //where conversion result is pushed to;
  const resultArray = [];
  //array converted to string
  let output = resultArray.join(" ");


  return (
    <p className={ styles.Output }>
      { output }
    </p>
  )
}

export default Output;
