import React from 'react';

function BotonReiniciar({ reiniciarJuego }) {
  
  return (
    <button
      id="botonreiniciar" 
      onClick={reiniciarJuego}>
      Reiniciar Juego
    </button>
  );
}

export default BotonReiniciar;

