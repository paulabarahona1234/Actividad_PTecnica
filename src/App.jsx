import { useState } from "react";
import "./App.css";
import Estado from "./Estado";
import String from "./String";
import Booleano from "./Booleano";
import Lista from "./Lista";
import Objeto from "./Objeto";
import Clase from "./Clase";

import TresTextos from "./TresTextos";
import Fondo from "./Fondo";
import ValidarNumero from "./ValidarNumero";
import MostrarDatos from "./MostrarDatos";

function App() {
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h1>Codigo React</h1>

      <Estado />
      <String />
      <Booleano />
      <Lista />
      <Objeto />
      <Clase />

      <TresTextos />
      <Fondo />
      <ValidarNumero />
      <MostrarDatos />
    </div>
  );
}

export default App;
