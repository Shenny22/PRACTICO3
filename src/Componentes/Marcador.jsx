import React from 'react';

function Marcador({idUsuario,puntosJugador, puntosCompu}) {
  return (
    <div className="marcador">
      <p id="usuario">
        {idUsuario} : {puntosJugador} PUNTOS
      </p>

      <p id="computadora">
        COMPUTADORA : {puntosCompu} PUNTOS
      </p>
      
    </div>
  );
}
export default Marcador;