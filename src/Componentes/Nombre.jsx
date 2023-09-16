import React,  { useState }  from "react";

function Nombre(props){
    const { nombre, ChangeName } = props;

    const ChangeNombre = (e) => {
        ChangeName(e.target.value);

    };

    return(
        <label id="usuario">JUGADOR/A:
            <input 
             id="nombre" 
             type="text" 
             placeholder="Ingrese su nombre" 
             value={nombre} 
             onChange={ChangeNombre}>

            </input>
        </label>
        
    );
}     
export default Nombre;