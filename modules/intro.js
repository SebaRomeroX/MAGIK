/* ----------------------------------**************************************************-----------------------------------------------
    INTRO del juego
    -Tutorial 
    -Seleccion de modo de Juego

    ----------------------------------**************************************************--------------------------------------------------
*/ 

const mensajeIntro = document.getElementById('mensaje-intro')
const introContenido = document.getElementById('intro-contenido')

const seccionTutorial = document.getElementById('seccion-tutorial')
const botonTutorial = document.getElementById('boton-tutorial')

const botonMenuJuego = document.getElementById('boton-menu-juego')
botonMenuJuego.addEventListener('click', mostrarMenuJuego)

const botonSupervivencia = document.getElementById('boton-supervivencia')
const botonAventura = document.getElementById('boton-aventura')

const menuModos = document.getElementById('menu-modos')

let modoJuego = ''

//----------------------


function aleatorio(numero) {
    return Math.floor(Math.random() * numero)
}

//-------------------


function preparar() {    
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

}

//------------------------------------------------------   TUTORIAL

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


//------------------------------------------------ MENU JUEGO


function mostrarMenuJuego() {
    mensajeIntro.style.display = "none"
    botonTutorial.style.display = "none"
    botonMenuJuego.style.display = "none"

    seccionTutorial.style.display = "none"
    menuModos.style.display = ''

    botonSupervivencia.addEventListener('click', supervivencia)
    botonAventura.addEventListener('click', aventura)
}


function supervivencia() {
    modoJuego = 'supervivencia'
}

function aventura() {
    modoJuego = 'aventura'
}

export { preparar, modoJuego }