import { useState } from "react";

function TresTextos() {
  const [texto1, setTexto1] = useState("HOLAAAA");
  const [texto2, setTexto2] = useState("Futbol");
  const [texto3, setTexto3] = useState("Leon");

  return (
    <div>
      <h3>{texto1}</h3>
      <button onClick={() => setTexto1("CHAOOO")}>Cambiar Texto 1</button>

      <h3>{texto2}</h3>
      <button onClick={() => setTexto2("Tenis")}>Cambiar Texto 2</button>

      <h3>{texto3}</h3>
      <button onClick={() => setTexto3("Rojoooo")}>Cambiar Texto 3</button>
    </div>
  );
}

export default TresTextos;
