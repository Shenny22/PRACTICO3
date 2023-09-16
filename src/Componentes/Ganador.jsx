import React from 'react';
function Ganador({puntajeCompu,puntajeUsuario}){
    let resultado= "";
    if(puntajeUsuario === 3){
       resultado = 'JUEGO FINALIZADO☆¡¡GANASTE!!☆ PARA VOLVER A JUGAR CLICKEA REINICIAR JUEGO';
    } else if(puntajeCompu=== 3){
       resultado = 'JUEGO FINALIZADO☆PERDISTE!☆ PARA VOLVER A JUGAR CLICKEA REINICIAR JUEGO';
    }
    return(
        <div id ="ganador"> {resultado} </div> 
    );
}
export default Ganador;