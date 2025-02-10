
import { oponentes } from "./oponentes/oponentes.js"

const sonidoIntro = new Audio('./sound/thunder-intro.mp3')
sonidoIntro.volume = .6
sonidoIntro.preload = 'auto'

const sonidoEspada = new Audio('./sound/sword.mp3')
sonidoIntro.preload = 'auto'

const sonidoMovimiento = new Audio('./sound/movement.mp3')
sonidoMovimiento.volume = .6

const sonidoMagia = new Audio('./sound/magic-spell.mp3')
sonidoMagia.volume = .3


const seccionEnemigo = document.getElementById('seccion-enemigo')

const mensaje = document.getElementById('mensaje')
const mensajeIntro = document.getElementById('mensaje-intro')
const mensajeJugador = document.getElementById('mensaje-jugador')
const mensajeEnemigo = document.getElementById('mensaje-enemigo')
const mensajeInvicto = document.getElementById('mensaje-invicto')

const seccionIntro = document.getElementById('seccion-intro')
const introContenido = document.getElementById('intro-contenido')

const seccionTutorial = document.getElementById('seccion-tutorial')

const seccionVidaEnemigo = document.getElementById('seccion-vida-enemigo')
const vidaEnemigo = document.getElementById('vida-enemigo')
const vidaEnemigoTotal = document.getElementById('vida-enemigo-total')
let vidaEnemigoActual;

const nombreEnemigo = document.getElementById('nombre-enemigo')

const seccionVidaJugador = document.getElementById('seccion-vida-jugador')
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

const botonTutorial = document.getElementById('boton-tutorial')

const botonMenuJuego = document.getElementById('boton-menu-juego')
botonMenuJuego.addEventListener('click', mostrarMenuJuego)

const botonContinuar = document.getElementById('boton-continuar')

const botonSupervivencia = document.getElementById('boton-supervivencia')
const botonAventura = document.getElementById('boton-aventura')

const menuModos = document.getElementById('menu-modos')

let invicto = 0
let record = 0

let eleccionOponente = 0

let modoJuego = ''
let nivelJugador = 1

window.addEventListener('load',preparar)

//------------------------------------------------------------------------------------------------------------------------

function preparar() {
    console.log('inicio');
    modoJuego = ''
    
    menuModos.style.display = 'none'

    botonTutorial.innerHTML = 'Ver Tutorial'
    botonTutorial.addEventListener('click', tutorial1)


    introContenido.classList.remove('oculto')
    introContenido.classList.add('visible')


    let mensajesIntro = [
        'Las sombras acechan a Magik. Solo el acero y la magia decidirán su destino en este combate sin tregua.',
        'Criaturas oscuras se interponen en el camino de Magik… pero ella no retrocederá jamas.',
        'Magik debe enfrentar a las tinieblas o ser consumida por ellas.',
        'De las sombras emergen enemigos… Magik esta lista para el combate.',
        'Magik no teme a la oscuridad. La oscuridad aprenderá a temerle a ella.',
        'El destino ha marcado su camino con sangre y fuego. Magik avanza hacia el.'
    ]
    
    mensajeIntro.innerHTML = mensajesIntro[aleatorio(mensajesIntro.length)]

    mensajeInvicto.style.display = 'none'

    boton1.disabled= true
    boton2.disabled= true
    boton3.disabled= true
    boton4.disabled= true


    botonContinuar.style.display = 'none'

    nombreEnemigo.style.display = 'none'

    seccionVidaEnemigo.style.display = 'none'
    seccionVidaJugador.style.display = 'none'

    if (localStorage.getItem("record")) {
        record = localStorage.getItem("record")
    }
}

//----------------------------------------------------------------------   TUTORIAL

function tutorial1() {
    botonTutorial.innerHTML = 'Siguiente'
    botonTutorial.addEventListener('click', tutorial2)

    mensajeIntro.style.display = 'none'
    botonMenuJuego.style.display = 'none'
    seccionTutorial.innerHTML = '<h3>Este es un juego de estilo combate por turnos.</h3>'
        +'<h3> Donde deberas enfrentarte a diversos adversarios.</h3>'
}

function tutorial2() {
    botonTutorial.addEventListener('click', tutorial3)

    seccionTutorial.innerHTML = '<h3>Tu personaje tiene 4 habilidades.</h3>'
        +'<h3>Cada una con un efecto diferente.</h3>'
        +'<h3>Utilizalas para derrotar a tus oponentes.'
}

function tutorial3() {
    botonTutorial.addEventListener('click', tutorial4)

    seccionTutorial.innerHTML = '<h2>Estocada:</h2><h3> Es un ataque fisico con 20 de daño.</h3>'
        +'<h3>Los enemigos pueden bloquearla o esquivarla.</h3>'
        +'<h3>Si un enemigo bloquea un golpe recibira solo una parte del daño.</h3>'
}

function tutorial4() {
    botonTutorial.addEventListener('click', tutorial5)

    seccionTutorial.innerHTML = '<h2>Magia:</h2><h3> Es un ataque magico que no puede ser evadido por el rival.</h3>'
        +'<h3>Cauza 10 de daño.</h3>'
}

function tutorial5() {
    botonTutorial.addEventListener('click', tutorial6)

    seccionTutorial.innerHTML = '<h2>Esquivar:</h2><h3> Evade un ataque rival.</h3>'
        +'<h3>No recibiras daño.</h3>'
}

function tutorial6() {
    botonTutorial.addEventListener('click', tutorial7)

    seccionTutorial.innerHTML = '<h2>Ejecucion:</h2><h3> Realiza un daño proporcional a la vida faltante del adversario.</h3>'
        +'<h3>Puede ser bloqueado o esquivado.</h3>'
}

function tutorial7() {
    botonTutorial.addEventListener('click', tutorial8)

    seccionTutorial.innerHTML = '<h3>Si el enemigo te golpea se reducira tu vida, si esta llega a 0 perderas el combate.</h3>'
}

function tutorial8() {
    botonTutorial.style.display = 'none'
    botonMenuJuego.style.display = ''

    seccionTutorial.innerHTML = '<h3>Gana enfrentamientos para aumentar tu racha de victorias y marcar un nuevo record.</h3>'
        +'<h3>Si pierdes un combate deberas iniciar del principio.</h3>'
}


//------------------------------------------------------ MENU JUEGO


function mostrarMenuJuego() {
    mensajeIntro.style.display = "none"
    botonTutorial.style.display = "none"
    botonMenuJuego.style.display = "none"

    seccionTutorial.style.display = "none"
    menuModos.style.display = ''

    botonSupervivencia.addEventListener('click', supervivencia)
    botonSupervivencia.onclick = ()=> sonidoIntro.play()

    botonAventura.addEventListener('click', aventura)
    botonAventura.onclick = ()=> sonidoIntro.play()
}


function supervivencia() {
    console.log('supervivencia');
    modoJuego = 'supervivencia'
    
    eleccionOponente = aleatorio(oponentes.length)

    empezar(eleccionOponente)
}

function aventura() {
    console.log('aventura');
    modoJuego = 'aventura'

    if (nivelJugador == 4) {
        mostrarMenuJuego()
    }
    
    do {
        eleccionOponente = aleatorio(oponentes.length)
        
    } while (oponentes[eleccionOponente].nivel != nivelJugador);

    console.log(oponentes[eleccionOponente].nivel);
    
    empezar(eleccionOponente)
}



function empezar(eleccionOponente) {

    //--------------------------------------  ELECCION OPONENTE-----------------------

    
    const enemigoNombre = oponentes[eleccionOponente].nombre
    const enemigoImagen = oponentes[eleccionOponente].imgagen
    const enemigovidaTotal = oponentes[eleccionOponente].vida

    //---------------

    seccionEnemigo.style.backgroundImage = `url('./img/${enemigoImagen}')`

    nombreEnemigo.style.display = 'block'
    nombreEnemigo.innerHTML = enemigoNombre

    mensajeInvicto.style.display = 'none'


    let imagen = document.querySelector('.jugador')
    if (imagen.classList.contains('difuminado')) {
        imagen.classList.remove('difuminado')
        imagen.classList.remove('filtro-rojo')
    }
    imagen = document.querySelector('.enemigo')
    if (imagen.classList.contains('difuminado')) {
        imagen.classList.remove('difuminado')
        imagen.classList.remove('filtro-rojo')
    }


    seccionVidaEnemigo.style.display = 'block'
    seccionVidaJugador.style.display = 'block'


    vidaEnemigoActual = enemigovidaTotal
    vidaEnemigo.style.color = 'green'
    vidaEnemigo.innerHTML= vidaEnemigoActual
    vidaEnemigoTotal.innerHTML= enemigovidaTotal

    vidaJugadorActual = 100;
    vidaJugador.style.color = 'green'
    vidaJugador.innerHTML= vidaJugadorActual

    boton1.innerHTML = 'Estocada'
    boton2.innerHTML = 'Magia'
    boton3.innerHTML = 'Esquivar'
    boton4.innerHTML = 'Ejecución'

    botonContinuar.style.display = 'none'

    seccionIntro.classList.add('oculto')

    turnoaccion()
}



//--------------------- - ---------- --------  HABILIDADES 

function habilidad1() {
    const accion= 'ataque'
    const valor = 20

    mensajeJugador.innerHTML = 'Jugador ataca'
    
    sonidoEspada.play()

    turnoConsecuencia( accion, valor)
}

//---------

function habilidad2() {
    const accion= 'magia'
    const valor = 10

    mensajeJugador.innerHTML = 'Jugador ataca con magia, no se puede bloqear'
    
    sonidoMagia.play()

    turnoConsecuencia( accion, valor) 
}

//----------

function habilidad3() {
    const accion= 'esquive'
    const valor = 1

    mensajeJugador.innerHTML = 'Jugador esquiva'

    sonidoMovimiento.play()

    turnoConsecuencia( accion, valor) 
}

//-----------

function habilidad4() {
    const accion= 'ataque'
    const valor = Math.floor(1500/vidaEnemigoActual) 

    mensajeJugador.innerHTML = 'Jugador ataca aprovechando debilidad'

    sonidoEspada.play()

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
    let magiaEnemigo = 0
    

    const enemigoComportamiento = () => oponentes[eleccionOponente].comportamiento()

    const [ accionEnemigo, valorEnemigo ] = enemigoComportamiento()
    
    switch (accionEnemigo) {
        case 'ataque':
            mensajeEnemigo.innerHTML = 'Enemigo ataca'
            ataqueEnemigo = valorEnemigo
            break;
        case 'esquive':
            mensajeEnemigo.innerHTML = 'Enemigo esquiva'
            esqivaEnemigo = valorEnemigo
            break;
        case 'bloqueo':
            mensajeEnemigo.innerHTML = 'Enemigo bloquea'
            bloqueoEnemigo = valorEnemigo
            break;
        case 'espera':
            mensajeEnemigo.innerHTML = 'Enemigo espera'
        break;
    }
    


    //------------------ calculo ataqe

    let sumaAtaqueJugador = ataqueJugador

    if (esqivaEnemigo == 1) {
        sumaAtaqueJugador = 0
    }

    sumaAtaqueJugador -= bloqueoEnemigo
    if (sumaAtaqueJugador <0) {
        sumaAtaqueJugador = 0
    }

    sumaAtaqueJugador += magiaJugador

    if (sumaAtaqueJugador > 0) {
        vidaEnemigoActual -= sumaAtaqueJugador

        activarEfectoDaño('.enemigo')
    }


    //-------

    let sumaAtaqueEnemigo = ataqueEnemigo

    if (esqivaJugador == 1) {
        sumaAtaqueEnemigo = 0
    }

    sumaAtaqueEnemigo -= bloqueoJugador
    sumaAtaqueEnemigo += magiaEnemigo

    if (sumaAtaqueEnemigo > 0) {
        vidaJugadorActual -= sumaAtaqueEnemigo

        activarEfectoDaño('.jugador')
    }


    //-------  ------------ ---  ---------------   Mostramos

    if (vidaEnemigoActual<100/3) {
        vidaEnemigo.style.color = 'red'
    }

    vidaEnemigo.innerHTML= vidaEnemigoActual

    if (vidaJugadorActual<100/3) {
        vidaJugador.style.color = 'red'
    }
    vidaJugador.innerHTML= vidaJugadorActual


    //--------------------------------  VELOCIDAD TURNO --------------------------------------------------

    setTimeout(evaluarVida, 1800)
}


function evaluarVida() {
    let mensajeRecord = `, Tu mejor marca es de ${record}`
    if (modoJuego == 'supervivencia') {
        botonContinuar.addEventListener('click', supervivencia)
    }


    if (modoJuego == 'aventura') {
        botonContinuar.addEventListener('click', aventura)

        if (nivelJugador == 1) {
            mensajeRecord = '. Necesitas una racha de 3 para avanzar'
        }else if(nivelJugador == 2){
            mensajeRecord = '. Necesitas una racha de 2 para avanzar'
        }else if(nivelJugador == 3){
            mensajeRecord = '. Necesitas vencer solo a 1 para ganar'
        }
    } 

    

    if (vidaEnemigoActual<=0) {
        mensaje.innerHTML='Derrotaste a tu oponente!'

        botonContinuar.style.display = 'block'
        
        invicto ++
        
        mensajeInvicto.innerHTML = `Levas ${invicto} combates ganados`+mensajeRecord
        mensajeInvicto.style.display = 'block'
    

        if (modoJuego == 'aventura') {
            if (nivelJugador == 1 && invicto == 3) {
                nivelJugador ++
                invicto = 0
                mensajeInvicto.innerHTML = 'Pasas al siguiente nivel'
                mensajeRecord = ''
                
            }else if (nivelJugador == 2 && invicto == 2) {
                nivelJugador ++
                invicto = 0
                mensajeInvicto.innerHTML = 'Pasas al siguiente nivel'
                mensajeRecord = ''
                
            }else if (nivelJugador == 3 && invicto == 1) {
                mensajeInvicto.innerHTML = 'Ganaste !!'
                mensajeRecord = ''

                botonContinuar.style.display = 'none'
            }
        }

        if (invicto > record) {
            record = invicto
            localStorage.setItem("record", record)
        }


        let imagen = document.querySelector('.enemigo')
        imagen.classList.add('difuminado')
        imagen.classList.add('filtro-rojo')

        mensajeJugador.style.display = 'none'
        mensajeEnemigo.style.display = 'none'


    }else if (vidaJugadorActual <= 0) {
        mensaje.innerHTML='Fuiste vencido ...'

        invicto = 0
        mensajeInvicto.innerHTML = `Perdiste tu racha`+mensajeRecord
        mensajeInvicto.style.display = 'block'

        let imagen = document.querySelector('.jugador')
        imagen.classList.add('difuminado')
        imagen.classList.add('filtro-rojo')

        mensajeJugador.style.display = 'none'
        mensajeEnemigo.style.display = 'none'
        botonContinuar.style.display = 'block'

    }else {
        turnoaccion()
    }
    
}


//--------------- efecto daño

function activarEfectoDaño(objetivo) {
    let imagen = document.querySelector(objetivo)
    imagen.classList.add('filtro-rojo')
    
    setTimeout(() => {
        imagen.classList.remove('filtro-rojo')
    }, 100)
}

function aleatorio(numero) {
    return Math.floor(Math.random() * numero)
}