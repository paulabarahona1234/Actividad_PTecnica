import { useState } from "react";

function Clase() {
  const [colorFondo, setColorFondo] = useState("white"); // color inicial

  const cambiarColor = () => {
    // Cambia entre blanco, azul y verde
    if (colorFondo === "white") {
      setColorFondo("lightblue");
    } else if (colorFondo === "lightblue") {
      setColorFondo("lightgreen");
    } else {
      setColorFondo("white");
    }
  };

  return (
    <div style={{ backgroundColor: colorFondo, padding: "50px" }}>
      <h3>El fondo actual es: {colorFondo}</h3>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
}

export default Clase;
