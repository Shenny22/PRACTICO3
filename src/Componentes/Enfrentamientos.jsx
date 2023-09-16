import React from 'react';

function Enfrentamientos({ Jugador,eleccionJugador, eleccionCompu, resultado }) {
  return (

    <div className="enfrent">
      <div id="usuario">
        <p>{Jugador}: {eleccionJugador}</p>
      </div>

      <div id="computadora">
        <p>COMPUTADORA: {eleccionCompu}</p>
      </div>

      <div id="resultado">
        <p>{resultado}</p>
      </div>
      
    </div>
  );
}

export default Enfrentamientos;