import { useState } from "react";

function MostrarDatos() {
  const [mostrar, setMostrar] = useState(false);

  const persona = {
    nombre: "Paula Barahona",
    correo: "paulab@outlook.com",
    telefono: "3142461421",
    edad: 18,
    direccion: "Calle54c # 45",
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Datos" : "Mostrar Datos"}
      </button>

      {mostrar && (
        <div style={{ marginTop: "15px" }}>
          <p>
            <strong>Nombre:</strong> {persona.nombre}
          </p>
          <p>
            <strong>Correo:</strong> {persona.correo}
          </p>
          <p>
            <strong>Teléfono:</strong> {persona.telefono}
          </p>
          <p>
            <strong>Edad:</strong> {persona.edad}
          </p>
          <p>
            <strong>Dirección:</strong> {persona.direccion}
          </p>
        </div>
      )}
    </div>
  );
}

export default MostrarDatos;
