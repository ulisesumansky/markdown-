
import './App.css';
import Editor from './Components/Editor';
import Previsualizador from './Components/Previsualizador';
import { useState } from 'react';

let marked = require("marked");

function App() {
  const [entrada, setEntrada] = useState("");
    
    let cambio = (e) =>{
        setEntrada(e.target.value)
        console.log(e.target.value,marked.parse(e.target.value))
    }
  return (
    <div className="App">
      <div className="contenedor">
        <Editor cambio={cambio}></Editor>
        <Previsualizador mensaje={entrada}></Previsualizador>
      </div>  
    </div>
  );
}

export default App;
