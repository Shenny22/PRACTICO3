import './App.css';
import BotonReiniciar from './Componentes/BotonReiniciar';
import Enfrentamientos from './Componentes/Enfrentamientos';
import EleccionJugador from './Componentes/EleccionJugador';
import Marcador from './Componentes/Marcador';
import Nombre from './Componentes/Nombre';
import React, { useState, useEffect } from 'react';
import TituloJuego from './Componentes/TituloJuego';
import Ganador from './Componentes/Ganador';

function App() {
  const [nombre, setNombre] = useState('');
  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  const [jugadaUsuario, setJugadaUsuario] = useState('');
  const [jugadaComputadora, setJugadaComputadora] = useState('');
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  const [mensajeResultado, setMensajeResultado] = useState(''); 

  const Eleccion = (jugadaUsuario) => {
/* Se generan jugadas aleatorias de la comptadora*/
    const opcionesComputadora = ["PIEDRA", "PAPEL", "TIJERA"];
    const jugadaComputadora =
      opcionesComputadora[Math.floor(Math.random() * 3)];

/* Determino resultado de las rondas */
    let resultado = '';
    if (jugadaUsuario === jugadaComputadora) {
      resultado = "☆ EMPATE! NO HAY PUNTOS ☆" ;

    } else if (
      (jugadaUsuario === "PIEDRA" && jugadaComputadora === "TIJERA") ||
      (jugadaUsuario === "PAPEL" && jugadaComputadora === "PIEDRA") ||
      (jugadaUsuario === "TIJERA" && jugadaComputadora === "PAPEL")
    ) {
      resultado = "¡GANASTE! PUNTO PARA VOS ☆";
      setPuntosUsuario(puntosUsuario + 1); 

    } else if (
      (jugadaComputadora=== "PIEDRA" && jugadaUsuario === "TIJERA") ||
      (jugadaComputadora=== "PAPEL" && jugadaUsuario === "PIEDRA") ||
      (jugadaComputadora === "TIJERA" && jugadaUsuario === "PAPEL")
    ){
      resultado = "PERDISTE! PUNTO PARA LA COMPUTADORA ☆";
      setPuntosComputadora(puntosComputadora + 1); 
    }

/* Actualizo elecciones y rdo */
    setJugadaUsuario(jugadaUsuario);
    setJugadaComputadora(jugadaComputadora);
    setMensajeResultado(resultado); 
  };

/* reinicio el juego*/
  const reiniciarJuego = () => {
    setNombre("")
    setJugadaUsuario("");
    setJugadaComputadora("");
    setMensajeResultado(""); 
    setPuntosUsuario(0);
    setPuntosComputadora(0);
  };

  return (
    <>
      <TituloJuego />

      <main>

        <Nombre nombre={nombre} ChangeName={ChangeNameApp} />

        <Marcador
          idUsuario={nombre}
          puntosJugador={puntosUsuario}
          puntosCompu={puntosComputadora}
          nombreJugador={nombre}
        />

        <Enfrentamientos
          Jugador = {nombre}
          eleccionJugador = {jugadaUsuario}
          eleccionCompu = {jugadaComputadora}
          resultado = {mensajeResultado} 
        />
        <EleccionJugador
          choice = {Eleccion}
          setEleccionJugador = {setJugadaUsuario}
          setEleccionPC = {setJugadaComputadora}
        />
        <Ganador
        puntajeCompu={puntosComputadora}
        puntajeUsuario={puntosUsuario}
        />

        <BotonReiniciar reiniciarJuego={reiniciarJuego} />
      </main>

    </>
  );
}
export default App;