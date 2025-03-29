import { useState } from "react";

function ValidarNumero() {
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const validar = () => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      setMensaje("Por favor, ingresa un número válido.");
    } else if (num > 10) {
      setMensaje("El número es mayor a 10");
    } else {
      setMensaje("El número es menor a 10.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={validar} style={{ marginLeft: "10px" }}>
        Validar
      </button>
      <h4>{mensaje}</h4>
    </div>
  );
}

export default ValidarNumero;
