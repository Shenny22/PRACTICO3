<h1 align="center"> JUEGO PIEDRA-PAPEL-TIJERA </h1>

El objetivo del proyecto es convertir el juego realizado para el práctico 2 a una aplicación React.


# Intrucciones del juego

    Como aclaración inicial, el juego tiene las mismas reglas que el tradicional "Piedra,papel o tijera", es decir:
    ☆ Piedra le gana a tijera.
    ☆ Papel le gana a piedra.
    ☆ Tijera le gana a papel.

    Para poder jugarlo, siga las siguientes intrucciones:
    ☆ Ejecute el programa.
    ☆ El primero que consiga 3 puntos GANA el juego.
    ☆ Ingrese su nombre en la casilla que contiene la leyenda "Ingrese su nombre".
    ☆ Seleccione con un click una de las tres imagenes para realizar su primera jugada.
    ☆ Seleccione otra imagen para ejecutar su segunda jugada y así sucesivamente hasta conseguir un ganador/a.
    ☆ En la parte inferior de las imagenes, puede visualizar un contador que muestra sus puntos y los de la computadora, como así tambien la elección que se realizó en cada jugada.
    ☆ Puede observar un mensaje que declara al ganador/a de la jugada o si resultó en empate.
    ☆ Se emitirá un mensaje cuando el ganador/a obtenga 3 puntos,  dando por finalizado el juego.
    ☆ Para volver a jugar, haga click en el boton "REINICIAR JUEGO".


# Pruebas 

A continuación, se detallan los casos de prueba:

    ☆ PRIMERA JUGADA
    ☆ "Nombre Jugador": PIEDRA.
    ☆ COMPUTADORA: PAPEL.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA: 1 PUNTOS.
    ☆ RESULTADO OBTENIDO: PERDISTE! PUNTO PARA LA COMPUTADORA ☆. ✓ ✓

    ☆ SEGUNDA JUGADA
    ☆ "Nombre Jugador": PAPEL.
    ☆ COMPUTADORA: PAPEL.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA: 1 PUNTOS.
    ☆ RESULTADO OBTENIDO: ☆ EMPATE! NO HAY PUNTOS ☆. ✓ ✓

    ☆ TERCERA JUGADA
    ☆ "Nombre Jugador": TIJERA.
    ☆ COMPUTADORA : PIEDRA.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA : 2 PUNTOS.
    ☆ RESULTADO OBTENIDO: PERDISTE! PUNTO PARA LA COMPUTADORA ☆. ✓ ✓

    ☆ CUARTA JUGADA
    ☆ "Nombre Jugador": PAPEL.
    ☆ COMPUTADORA : TIJERA.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA : 3 PUNTOS.
    ☆ RESULTADO OBTENIDO: ☆EN 4 RONDAS-JUEGO FINALIZADO☆ GANÓ LA COMPUTADORA! ✓ ✓

    ☆PRESIONO "REINICIAR JUEGO" ✓ ✓
    
    ☆ PRIMERA JUGADA
    ☆ "Nombre Jugador": PIEDRA.
    ☆ COMPUTADORA : PIEDRA.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA : 0 PUNTOS.
    ☆ RESULTADO OBTENIDO: ☆ EMPATE! NO HAY PUNTOS ☆. ✓ ✓

    ☆ SEGUNDA JUGADA
    ☆ "Nombre Jugador": PIEDRA.
    ☆ COMPUTADORA: PAPEL.
    ☆ "Nombre Jugador": 0 PUNTOS.
    ☆ COMPUTADORA: 1 PUNTOS.
    ☆ RESULTADO OBTENIDO: PERDISTE! PUNTO PARA LA COMPUTADORA ☆. ✓ ✓

    ☆ TERCERA JUGADA
    ☆ "Nombre Jugador": TIJERA.
    ☆ COMPUTADORA : PAPEL.
    ☆ "Nombre Jugador": 1 PUNTOS.
    ☆ COMPUTADORA : 1 PUNTOS.
    ☆ RESULTADO OBTENIDO: GANASTE! PUNTO PARA VOS ☆. ✓ ✓

    ☆ CUARTA JUGADA
    ☆ "Nombre Jugador": TIJERA.
    ☆ COMPUTADORA : PIEDRA.
    ☆ "Nombre Jugador": 1 PUNTOS.
    ☆ COMPUTADORA : 2 PUNTOS.
    ☆ RESULTADO OBTENIDO: PERDISTE! PUNTO PARA LA COMPUTADORA ☆. ✓ ✓

    ☆ QUINTA JUGADA
    ☆ "Nombre Jugador": PIEDRA.
    ☆ COMPUTADORA : TIJERA.
    ☆ "Nombre Jugador": 2 PUNTOS.
    ☆ COMPUTADORA : 2 PUNTOS.
    ☆ RESULTADO OBTENIDO: GANASTE! PUNTO PARA VOS ☆. ✓ ✓

    ☆ SEXTA JUGADA
    ☆ "Nombre Jugador": PAPEL.
    ☆ COMPUTADORA : PIEDRA.
    ☆ "Nombre Jugador": 3 PUNTOS.
    ☆ COMPUTADORA : 2 PUNTOS.
    ☆ RESULTADO OBTENIDO: ☆EN 6 RONDAS-JUEGO FINALIZADO☆ SOS GANADOR/A DEL JUEGO!.✓ ✓

# Autor
    ☆ GODOY JENNIFER
