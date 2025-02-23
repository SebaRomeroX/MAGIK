
/*------------------- INTRO 
    PRIMERA PANTALLA
    TUTORIAL
    Y ELECCION DE MODO JUEGO

*/


const sonidoIntro = new Audio('./sound/thunder-intro.mp3')
sonidoIntro.volume = .6
sonidoIntro.preload = 'auto'

import { preparar, modoJuego } from "./modules/intro.js";

//-------------------------------------------------------------

window.addEventListener('load',preparar)


const intervalo = setInterval(() => { 
    console.log("Esperando modo juego..."); // Espera que se eliga modo juego

    if (modoJuego != '') { 
        clearInterval(intervalo); 
        cargarPersonaje()
        sonidoIntro.play()
    }
}, 500);

/* -----------------------------------**************************************************----------------------------------------------
    JUEGO
    -Combate 



//-------------------**************************--------*****************************            PREPARAMOS ENFRENTAMIENTO              */


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

import { oponentes } from "./modules/oponentes.js"
import { protagonista } from "./modules/protagonista.js";

let invicto = 0
let record = 0

if (localStorage.getItem("record")) {
    record = localStorage.getItem("record")
}

const nombreProta = document.getElementById("nombre-protagonista")



//-----------------     -----------     ------

function cargarPersonaje() {             //------------ CARGAR PERSONAJE
    
    // if (protagonista.nivel == 1) {
    //     for (let i = 0; i < 5; i++) { // niveles q qiera
    //         protagonista.levelUp() //------------------------ TEST NIVEL
    //     }
    // }

    nombreProta.innerHTML = protagonista.nombre
    mensajeNivel.innerHTML = "Nivel " + protagonista.nivel

    seccionHabilidades.style.display = 'block'
    mensajeInvicto.style.display = 'none'
    seccionVidaJugador.style.display = 'block'
    botonContinuar.style.display = 'none'
    seccionIntro.classList.add('oculto')

    vidaJugadorActual = protagonista.vida  //----------------------- PRUEVA VIDA NIVEL
    vidaJugador.style.color = 'green'
    vidaJugador.innerHTML= vidaJugadorActual

    vidaJugadorTotal.innerHTML = vidaJugadorActual


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
    // eleccionOponente = 4 //-------------- PARA TEST

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
            
        } while (oponentes[eleccionOponente].nivel > protagonista.nivel);
    }
    console.log("oponente: "+ eleccionOponente);
    
    return eleccionOponente
}




//------****************************------------------******-------------------------**********------ACCIONES

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
    const habilidad = protagonista.habilidades[0]

    const accion= habilidad.accion
    const valor = habilidad.valor
    mensajeJugador.innerHTML = habilidad.mensaje

    console.log(valor);    

    accionJugador( accion, valor)
}


function habilidad2() {
    const habilidad = protagonista.habilidades[1]

    const accion= habilidad.accion
    const valor = habilidad.valor
    mensajeJugador.innerHTML = habilidad.mensaje

    console.log(valor);    

    accionJugador( accion, valor) 
}


function habilidad3() {
    const habilidad = protagonista.habilidades[2]

    const accion= habilidad.accion
    const valor = habilidad.valor
    mensajeJugador.innerHTML = habilidad.mensaje

    console.log("esquiva");    

    accionJugador( accion, valor) 
}


function habilidad4() {
    const habilidad = protagonista.habilidades[3]

    const accion= habilidad.accion
    const valor = habilidad.valor(vidaEnemigoActual, enemigoVidaTotal) // requiere datos para calcular
    mensajeJugador.innerHTML = habilidad.mensaje

    console.log(valor);    

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




//--------------*****************---------******------------***********-------------------*********------ CONSECUENCIAS

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




//**************---------------------------************-------------------------------------**********----------------- RESULTADO



//--------------------------------- STATS SEGUN NIVEL


let combateExp = 0

//-----------------------------------


function finCombate() {
    let mensajeRecord = `, Tu mejor marca es de ${record}`

    botonContinuar.addEventListener('click', cargarPersonaje)


    if (vidaEnemigoActual<=0) {
        victoria(mensajeRecord)
    }else {
        derrota(mensajeRecord)
    }
}


//-----------------------

function victoria(mensajeRecord) {
    console.log("victoria");    
    
    if (modoJuego == 'aventura') {
        //----      -------     ------- PRUEBA NIVEL
        let expNecesaria = 2
        combateExp++ // ---------------------------------------------- TEST NIVEL
    
        if (combateExp ==  protagonista.nivel * expNecesaria) {
            protagonista.levelUp()  //---------- Nuevo levelup en objeto prota
    
            combateExp = 0
        }
    }

    invicto ++
    
    mensaje.innerHTML='Derrotaste a tu oponente!'
    mensajeInvicto.innerHTML = `Levas ${invicto} combates ganados`+mensajeRecord
    mensajeInvicto.style.display = 'block'


    if (invicto > record) {
        record = invicto
        localStorage.setItem("record", record)
    }

    nuevo_combate(".enemigo")
}

//--------------------

function derrota(mensajeRecord) {
    console.log("derrota");

    mensaje.innerHTML='Fuiste vencido ...'

    combateExp = 0 //------------------------- PRUEBA NIVEL
    protagonista.derrota() // --- nuevo reinicio con objt Prota

    invicto = 0
    mensajeInvicto.innerHTML = `Perdiste tu racha`+mensajeRecord
    mensajeInvicto.style.display = 'block'

    nuevo_combate(".jugador")
}

function nuevo_combate(derrotado){
    //-------------------------------------------STATS
    console.log("nivel "+ protagonista.nivel)
    console.log("exp "+ combateExp)
    console.log("atq "+ protagonista.ataque)
    console.log("vida "+ protagonista.vida)

    mensajeJugador.style.display = 'none'
    mensajeEnemigo.style.display = 'none'
    botonContinuar.style.display = 'block'

    let imagen = document.querySelector(derrotado)
    imagen.classList.add('difuminado')
}



function aleatorio(numero) {
    return Math.floor(Math.random() * numero)
}