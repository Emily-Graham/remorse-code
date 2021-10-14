import './App.css';
import Title from "./components/Title";
import Translator from "./containers/Translator"
import styles from "./App.module.scss";

function App() {
  
  return (
    <div className={styles.App}>
      <Title />
      <Translator /> 
    </div>
  );
}

export default App;