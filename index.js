/* ----------------------------------**************************************************-----------------------------------------------
    INTRO del juego
    -Tutorial 
    -Seleccion de modo de Juego

    ----------------------------------**************************************************--------------------------------------------------
*/ 
const sonidoIntro = new Audio('./sound/thunder-intro.mp3')
sonidoIntro.volume = .6
sonidoIntro.preload = 'auto'

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

window.addEventListener('load',preparar)

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

    if (localStorage.getItem("record")) {
        record = localStorage.getItem("record")
    }
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
    sonidoIntro.play()

    modoJuego = 'supervivencia'
    
    cargarPersonaje()
}

function aventura() {
    sonidoIntro.play()

    modoJuego = 'aventura'

    cargarPersonaje()
}




/* -----------------------------------**************************************************----------------------------------------------
    JUEGO
    -Combate 

    -----------------------------------**********************************************-------------------------------------------------
*/ 



//-------------------**************************-------------------------PREPARAMOS ENFRENTAMIENTO


const seccionHabilidades = document.getElementById('seccion-habilidades')
const seccionVidaJugador = document.getElementById('seccion-vida-jugador')
const seccionIntro = document.getElementById('seccion-intro')

const mensajeInvicto = document.getElementById('mensaje-invicto')

const botonContinuar = document.getElementById('boton-continuar')

const vidaJugador = document.getElementById('vida-jugador')
const vidaJugadorTotal = document.getElementById('vida-jugador-total')


const boton1 = document.getElementById('boton-1')
const boton2 = document.getElementById('boton-2')
const boton3 = document.getElementById('boton-3')
const boton4 = document.getElementById('boton-4')

boton1.addEventListener('click', habilidad1)
boton2.addEventListener('click', habilidad2)
boton3.addEventListener('click', habilidad3)
boton4.addEventListener('click', habilidad4)

let vidaJugadorActual;

const mensajeNivel = document.getElementById('nivel-jugador')


//------------------------

const seccionEnemigo = document.getElementById('seccion-enemigo')
const nombreEnemigo = document.getElementById('nombre-enemigo')
const seccionVidaEnemigo = document.getElementById('seccion-vida-enemigo')
const vidaEnemigo = document.getElementById('vida-enemigo')
const vidaEnemigoTotal = document.getElementById('vida-enemigo-total')

let eleccionOponente = 0
let vidaEnemigoActual;

import { oponentes } from "./oponentes/oponentes.js"


//-----------------     -----------     ------

function cargarPersonaje() {             //------------ CARGAR PERSONAJE
    seccionHabilidades.style.display = 'block'
    mensajeInvicto.style.display = 'none'
    seccionVidaJugador.style.display = 'block'
    botonContinuar.style.display = 'none'
    seccionIntro.classList.add('oculto')

    vidaJugadorActual = 100 + vidaPlus  //----------------------- PRUEVA VIDA NIVEL
    vidaJugador.style.color = 'green'
    vidaJugador.innerHTML= vidaJugadorActual

    vidaJugadorTotal.innerHTML = vidaJugadorActual

    mensajeNivel.innerHTML = "Nivel " + nivelStats

    let imagen = document.querySelector('.jugador')
    if (imagen.classList.contains('difuminado')) {
        imagen.classList.remove('difuminado')
    }
    
    boton1.innerHTML = 'Estocada'
    boton2.innerHTML = 'Magia'
    boton3.innerHTML = 'Esquivar'
    boton4.innerHTML = 'Ejecución'

    cargarEnemigo()
}


//---------------------

let enemigoVidaTotal

function cargarEnemigo() {    //-------------------  ELECCION OPONENTE----------------
    eleccionOponente = elegirOponente()
    // eleccionOponente = 0 //-------------- PARA TEST

    const enemigoNombre = oponentes[eleccionOponente].nombre
    const enemigoImagen = oponentes[eleccionOponente].imgagen
    enemigoVidaTotal = oponentes[eleccionOponente].vida

    seccionEnemigo.style.backgroundImage = `url('./img/${enemigoImagen}')`

    nombreEnemigo.style.display = 'block'
    nombreEnemigo.innerHTML = enemigoNombre

    let imagen = document.querySelector('.enemigo')
    if (imagen.classList.contains('difuminado')) {
        imagen.classList.remove('difuminado')
    }

    seccionVidaEnemigo.style.display = 'block'
    vidaEnemigoActual = enemigoVidaTotal
    vidaEnemigo.style.color = 'green'
    vidaEnemigo.innerHTML= vidaEnemigoActual
    vidaEnemigoTotal.innerHTML= enemigoVidaTotal

    iniciarTurno()
}

function elegirOponente() {
    if (modoJuego == 'supervivencia') {
        eleccionOponente = aleatorio(oponentes.length)
    }else{
        do {
            eleccionOponente = aleatorio(oponentes.length)
            
        } while (oponentes[eleccionOponente].nivel != nivelJugador);
    }
    return eleccionOponente
}













//------****************************------------------****************------ACCIONES

const mensaje = document.getElementById('mensaje')
const mensajeJugador = document.getElementById('mensaje-jugador')
const mensajeEnemigo = document.getElementById('mensaje-enemigo')


function iniciarTurno() {
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


//---------------- --------  HABILIDADES 

function habilidad1() {
    const accion= 'ataque'

    let valor = 20 //---- valor base
    // console.log("atq base "+ valor);

    valor *= ataque // -------------------- PRUEBA ATAQUE NIVEL
    // console.log("atq + nivel "+ valor);

    // valor += (nivelStats-1) * 5   // -------------------- PRUEBA upgrade skill
    console.log("atq upgrade "+ valor);
    

    mensajeJugador.innerHTML = 'Jugador ataca'

    accionJugador( accion, valor)
}


function habilidad2() {
    const accion= 'magia'
    let valor = 10 * ataque // -------------------- PRUEBA ATAQUE NIVEL

    mensajeJugador.innerHTML = 'Jugador ataca con magia, no se puede bloqear'

    accionJugador( accion, valor) 
}


function habilidad3() {
    const accion= 'esquive'
    const valor = 1

    mensajeJugador.innerHTML = 'Jugador esquiva'

    accionJugador( accion, valor) 
}


function habilidad4() {
    const accion= 'ataque'
    // const valor = Math.floor(1500/vidaEnemigoActual) 

    let porcentaje = vidaEnemigoActual *100 / enemigoVidaTotal
    let valor = (-2/5 * porcentaje) + 44

    valor =  Math.floor(valor)

    console.log(valor);
    


    // const valor = 100  //--------------------- VALOR TEST


    mensajeJugador.innerHTML = 'Jugador ataca aprovechando debilidad'

    accionJugador( accion, valor)
}

//--------------------------- accion jugador

let ataqueJugador
let magiaJugador
let esqivaJugador
let bloqueoJugador

function accionJugador(accion, valor) {  
    boton1.disabled= true
    boton2.disabled= true
    boton3.disabled= true
    boton4.disabled= true

    mensaje.innerHTML='Combate'

    ataqueJugador = 0
    magiaJugador = 0
    esqivaJugador = 0
    bloqueoJugador = 0

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

    accionRival()
}


//------  -----------       --------- accion enemigo

let ataqueEnemigo
let bloqueoEnemigo
let esqivaEnemigo
let magiaEnemigo

function accionRival() {      

    const enemigoComportamiento = () => oponentes[eleccionOponente].comportamiento()
    const [ accionEnemigo, valorEnemigo ] = enemigoComportamiento()

    // const accionEnemigo = 'espera' // --------- TEST 
    
    ataqueEnemigo = 0
    bloqueoEnemigo = 0
    esqivaEnemigo = 0
    magiaEnemigo = 0

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

    turnoJugador()
}




//--------------*****************---------******------------********************------ CONSECUENCIAS

function turnoJugador() {
    //--    ---   - - - - ----------------- turno jugador
    // console.log("turno jugador")
    // mensajeJugador.style.display = 'block'


    if (esqivaEnemigo == 1) {
        ataqueJugador = 0
    }
    sonidoMovimiento.play()  // ------------esquiva

    ataqueJugador -= bloqueoEnemigo
    if (ataqueJugador <0) {
        ataqueJugador = 0
    }


    if (ataqueJugador > 0) {
        vidaEnemigoActual -= ataqueJugador

        activarEfectoDaño('.enemigo')
        sonidoEspada.play() //--------------- ataq fisico
    }

    if (magiaJugador > 0) {
        vidaEnemigoActual -= magiaJugador

        activarEfectoDaño('.enemigo')
        sonidoMagia.play() //--------------- ataq fisico
    }

    if (vidaEnemigoActual<100/3) {
        vidaEnemigo.style.color = 'red'
    }

    vidaEnemigo.innerHTML= vidaEnemigoActual

    if (vidaEnemigoActual <= 0) {
        finCombate()
    }else{
        setTimeout(turnoRival, 600) //--------------------- velocidad tirno
    }
}


function turnoRival() {
    // console.log("turno rival")
    // mensajeEnemigo.style.display = 'block'


    if (esqivaJugador == 1) {
        ataqueEnemigo = 0
    }

    ataqueEnemigo -= bloqueoJugador

    if (ataqueEnemigo > 0) {
        vidaJugadorActual -= ataqueEnemigo

        sonidoGolpe.play()
        activarEfectoDaño('.jugador')
    }
    
    if (vidaJugadorActual<100/3) {
        vidaJugador.style.color = 'red'
    }
    vidaJugador.innerHTML= vidaJugadorActual


    if (vidaJugadorActual <= 0) {
        finCombate()
    }else{
        setTimeout(iniciarTurno, 600) //--------------------- velocidad tirno
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


const sonidoEspada = new Audio('./sound/sword.mp3')
sonidoIntro.preload = 'auto'

const sonidoMovimiento = new Audio('./sound/movement.mp3')
sonidoMovimiento.volume = .6

const sonidoMagia = new Audio('./sound/magic-spell.mp3')
sonidoMagia.volume = .3

const sonidoGolpe = new Audio('./sound/punch.mp3')
sonidoGolpe.volume = .6




//**************---------------------------**********************----------------- RESULTADO

let invicto = 0
let record = 0
let nivelJugador = 1


//--------------------------------- STATS SEGUN NIVEL
let nivelStats = 1
let combateExp = 0
let ataque = 1
let vidaPlus = 0

//-----------------------------------


function finCombate() {
    let mensajeRecord = `, Tu mejor marca es de ${record}`

    botonContinuar.addEventListener('click', cargarPersonaje)

    if (modoJuego == 'aventura') {
        if (nivelJugador == 1) {
            mensajeRecord = '. Necesitas una racha de 3 para avanzar'
        }else if(nivelJugador == 2){
            mensajeRecord = '. Necesitas una racha de 2 para avanzar'
        }else if(nivelJugador == 3){
            mensajeRecord = '. Necesitas vencer solo a 1 para ganar'
        }
    } 


    if (vidaEnemigoActual<=0) {
        victoria(mensajeRecord)
    }else {
        derrota(mensajeRecord)
    }
}


//-----------------------

function victoria(mensajeRecord) {
    console.log("victoria");

    let imagen = document.querySelector('.enemigo')
    imagen.classList.add('difuminado')
    
    
    //----      -------     ------- PRUEBA NIVEL
    let expNecesaria = 2
    combateExp++

    if (combateExp ==  nivelStats * expNecesaria) {
        nivelStats++
        combateExp = 0

        ataque = Math.round((ataque + 0.1) *10) /10 
    
        vidaPlus += 10
    }
    console.log("nivel "+ nivelStats)
    console.log("exp "+ combateExp)
    console.log("atq "+ ataque)
    console.log("vida "+ vidaPlus)

    //----------------

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

    mensajeJugador.style.display = 'none'
    mensajeEnemigo.style.display = 'none'
}

//--------------------

function derrota(mensajeRecord) {
    console.log("derrota");

    mensaje.innerHTML='Fuiste vencido ...'

    combateExp = 0 //------------------------- PRUEBA NIVEL
    nivelStats = 1
    ataque = 1
    vidaPlus = 0

    console.log("nivel "+ nivelStats)
    console.log("exp "+ combateExp)
    console.log("atq "+ ataque)
    console.log("vida "+ vidaPlus)
    
    invicto = 0
    mensajeInvicto.innerHTML = `Perdiste tu racha`+mensajeRecord
    mensajeInvicto.style.display = 'block'

    let imagen = document.querySelector('.jugador')
    imagen.classList.add('difuminado')
    
    mensajeJugador.style.display = 'none'
    mensajeEnemigo.style.display = 'none'
    botonContinuar.style.display = 'block'
}


function aleatorio(numero) {
    return Math.floor(Math.random() * numero)
}