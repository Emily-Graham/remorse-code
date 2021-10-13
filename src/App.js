import './App.css';
import { useState } from 'react';

const TextField = ({ value, onChange, placeholder="Enter text here" }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <input type="text" value={value} onChange={handleChange} /> 
  );
}

const Form = () => {
  const [textState, setTextState] = useState("");

  console.log( textState);

  return (
    <div>
      <div>
        <TextField 
          value={textState} 
          onChange={setTextState} 
          placeholder="What have you got to say?"
        /> 
      </div>
    </div>
  )
}

function App() {
  
  return (
    <div className="App">
      <Form /> 
      {/* <ModalForm /> */}
    </div>
  );
}

export default App;