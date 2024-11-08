import Square from "./Square";
import Input from "./Input";
import {useState} from 'react'
function App() {
  const [colorValue,setColorValue]=useState('')
  const [hexValue,setHexValue]=useState('')
  const [isDarkTest,setIsDarkTest]=useState('true')
  return (
    <div className="App">
    <Square 
    colorValue={colorValue}
    setColorValue={setColorValue}
    hexValue={hexValue}
    isDarkTest={isDarkTest}
    />
    <Input
     colorValue={colorValue}
    setColorValue={setColorValue}
    setHexValue={setHexValue}
    isDarkTest={isDarkTest}
    setIsDarkTest={setIsDarkTest}
     />
    </div>
  );
}

export default App;
