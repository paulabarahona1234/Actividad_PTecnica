import { useState } from 'react'
import "./App.css"
import Estado from "./Estado";
import String from "./String";
import Booleano from "./Booleano";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";


function App(){
  const [numero, setNumero] = useState(0);
  return(
    <div>
      <h1>Codigo React</h1>
      </div>

      <Estado/>
      <String/>
      <Booleano/>
      <Lista/>
      <Objeto/>
      <Clase/>

  )
}



export default App;
