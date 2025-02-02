
const mensaje = document.getElementById('mensaje')
const mensajeJugador = document.getElementById('mensaje-jugador')
const mensajeEnemigo = document.getElementById('mensaje-enemigo')

const vidaEnemigo = document.getElementById('vida-enemigo')
let vidaEnemigoActual;

const nombreEnemigo = document.getElementById('nombre-enemigo')

const vidaJugador = document.getElementById('vida-jugador')
let vidaJugadorActual;

const boton1 = document.getElementById('boton-1')
const boton2 = document.getElementById('boton-2')
const boton3 = document.getElementById('boton-3')
const boton4 = document.getElementById('boton-4')

boton1.addEventListener('click', habilidad1)
boton2.addEventListener('click', habilidad2)
boton3.addEventListener('click', habilidad3)
boton4.addEventListener('click', habilidad4)

const botonInicio = document.getElementById('boton-inicio')
botonInicio.addEventListener('click', empezar)


window.addEventListener('load',preparar)

//------------------------------------------------

function preparar() {
    mensaje.innerHTML='Dale al boton para empezar'

    boton1.disabled= true
    boton2.disabled= true
    boton3.disabled= true
    boton4.disabled= true


    nombreEnemigo.style.display = 'none'
    vidaEnemigo.style.display = 'none'

    vidaJugador.style.display = 'none'

}


function empezar() {
    nombreEnemigo.style.display = 'block'
    nombreEnemigo.innerHTML = 'Guerrero desconocido'

    vidaEnemigo.style.display = 'block'

    vidaEnemigoActual = 100;
    vidaEnemigo.innerHTML= `Vida ${vidaEnemigoActual}/100`


    vidaJugador.style.display = 'block'

    vidaJugadorActual = 100;
    vidaJugador.innerHTML= `Vida ${vidaJugadorActual}/100`

    boton1.innerHTML = 'Estocada'
    boton2.innerHTML = 'Magia'
    boton3.innerHTML = 'Esquivar'
    boton4.innerHTML = 'Ejecución'

    botonInicio.style.display= 'none'

    turnoaccion()
}


//---------------------------------






//--------------------- - ---------- --------  HABILIDADES 

function habilidad1() {
    const accion= 'ataque'
    const valor = 20

    mensajeJugador.innerHTML = 'Jugador ataca'
    

    turnoConsecuencia( accion, valor)
}

//---------

function habilidad2() {
    const accion= 'magia'
    const valor = 15

    mensajeJugador.innerHTML = 'Jugador ataca con magia, no se puede bloqear'
    

    turnoConsecuencia( accion, valor) 
}

//----------

function habilidad3() {
    const accion= 'esquive'
    const valor = 1

    mensajeJugador.innerHTML = 'Jugador esquiva'
    

    turnoConsecuencia( accion, valor) 
}

//-----------

function habilidad4() {
    const accion= 'ataque'
    const valor = Math.floor(1200/vidaEnemigoActual) 

    mensajeJugador.innerHTML = 'Jugador ataca aprovechando debilidad'
    

    turnoConsecuencia( accion, valor)
}


//---------------------------- ------- ------  COMBATE

function turnoaccion() {
    mensaje.innerHTML='Elige accion . . .'
    mensajeJugador.innerHTML = ''
    mensajeEnemigo.innerHTML = ''
    mensajeJugador.style.display = 'block'
    mensajeEnemigo.style.display = 'block'

    boton1.disabled= false
    boton2.disabled= false
    boton3.disabled= false
    boton4.disabled= false
}


function turnoConsecuencia(accion, valor) {
    boton1.disabled= true
    boton2.disabled= true
    boton3.disabled= true
    boton4.disabled= true

    mensaje.innerHTML='Combate'



    //--------- accion jugador
    
    let ataqueJugador = 0
    let magiaJugador = 0
    let esqivaJugador = 0

    let bloqueoJugador = 0

    switch (accion) {
        case 'ataque':
            ataqueJugador = valor
            break;
        case 'magia':
            magiaJugador = valor
            break;
        case 'esquive':
            esqivaJugador = valor
            break;            
    }


    //----------- accion enemigo

    let ataqueEnemigo = 0
    let bloqueoEnemigo = 0
    let esqivaEnemigo = 0
    

    let accionesEnemigo = 4
    let accionEnemigo = Math.floor(Math.random() * (accionesEnemigo) + 1)
    switch (accionEnemigo) {
        case 1:
            mensajeEnemigo.innerHTML = 'Enemigo ataca'
            ataqueEnemigo = 40
            break;
        case 2:
            mensajeEnemigo.innerHTML = 'Enemigo esquiva'
            esqivaEnemigo = 1
            break;
            
        case 3:
            mensajeEnemigo.innerHTML = 'Enemigo bloquea'
            bloqueoEnemigo = 10
            break;
        case 4:
            mensajeEnemigo.innerHTML = 'Enemigo espera'
        break;
    }
    


    //------------------ calculo ataqe

    let sumaAtaqueJugador = ataqueJugador

    if (esqivaEnemigo == 1) {
        sumaAtaqueJugador = 0
    }

    sumaAtaqueJugador -= bloqueoEnemigo

    if (sumaAtaqueJugador > 0) {
        vidaEnemigoActual -= sumaAtaqueJugador
    }

    vidaEnemigoActual -= magiaJugador

    //-------

    let sumaAtaqueEnemigo = ataqueEnemigo

    if (esqivaJugador == 1) {
        sumaAtaqueEnemigo = 0
    }

    sumaAtaqueEnemigo -= bloqueoJugador

    if (sumaAtaqueEnemigo > 0) {
        vidaJugadorActual -= sumaAtaqueEnemigo
    }


    //-------  ------------ ---  ---------------   Mostramos

    

    vidaEnemigo.innerHTML= `Vida ${vidaEnemigoActual}/100`
    vidaJugador.innerHTML= `Vida ${vidaJugadorActual}/100`


    setTimeout(evaluarVida, 2000)
}


function evaluarVida() {
    
    if (vidaEnemigoActual<=0) {
        mensaje.innerHTML='Derrotaste a tu oponente!'
        mensajeJugador.style.display = 'none'
        mensajeEnemigo.style.display = 'none'
        botonInicio.style.display = 'block'

    }else if (vidaJugadorActual <= 0) {
        mensaje.innerHTML='Fuiste vencido ...'
        mensajeJugador.style.display = 'none'
        mensajeEnemigo.style.display = 'none'
        botonInicio.style.display = 'block'

    }else {
        turnoaccion()
    }
    
}