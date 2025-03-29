import { useState, useEffect } from "react";

function Fondo() {
  const [colorFondo, setColorFondo] = useState("white");

  const cambiarFondo = () => {
    if (colorFondo === "white") {
      setColorFondo("lightblue");
    } else if (colorFondo === "lightblue") {
      setColorFondo("lightgreen");
    } else {
      setColorFondo("white");
    }
  };

  // Aplica el color al body completo cuando cambia el estado
  useEffect(() => {
    document.body.style.backgroundColor = colorFondo;
  }, [colorFondo]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={cambiarFondo}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Cambiar Fondo
      </button>
    </div>
  );
}

export default Fondo;
