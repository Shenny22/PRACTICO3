import React, { useState } from 'react';
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';

function EleccionJugador({ choice }) {
  
  const [eleccionJugador, setEleccionJugador] = useState(null);

  const PiedraClick = () => {
    setEleccionJugador("PIEDRA");
    choice("PIEDRA"); 
  };

  const PapelClick = () => {
    setEleccionJugador("PAPEL");
    choice("PAPEL"); 
  };

  const TijeraClick = () => {
    setEleccionJugador("TIJERA");
    choice("TIJERA"); 
  };
  
  return (
    <div className="opciones">

      <button id="piedra" onClick={PiedraClick}>
        <img 
          src={piedra} 
          alt="imgpiedra" 
          width="150px" 
          height="150px" 
        />
      </button>

      <button  id="papel" onClick={PapelClick}>
        <img
          src={papel} 
          alt="imgpapel" 
          width="150px" 
          height="150px" 
        />
      </button>

      <button id="tijera" onClick={TijeraClick}>
        <img 
          src={tijera} 
          alt="imgtijera" 
          width="150px" 
          height="150px" 
        />
      </button>

    </div>
  );
}
export default EleccionJugador;