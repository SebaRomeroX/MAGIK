
function generarAtaqueAleatorio(acciones) {
    let listado = [] // guardamos acciones a usar

    for (let i = 0; i < acciones.length; i++) { // acciones disponibles
        for (let j = 0; j < acciones[i].chance; j++) { // cantidad de probabilidades de cada accion
            listado.push(i);
        }
    }
    console.log(listado);
    

    let numRand = Math.floor(Math.random() * listado.length) // posicion en listado
    console.log(numRand);
    console.log(listado[numRand]);
    

    let accion = acciones[listado[numRand]].accion // posicion en acciones
    let valor = acciones[listado[numRand]].valor

    return [ accion, valor ]
}

export const oponentes = [
    {
        nombre: "Guerrero desconocido",
        imgagen: 'guerrero_desconocido.jpg',
        vida: 120,
        nivel: 4,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 30,
                    chance: 4
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
                },
                {
                    accion: 'bloqueo',
                    valor: 15,
                    chance: 1
                },
                {
                    accion: 'espera',
                    chance: 0
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ] 
        }
    },
    {
        nombre: "Wargo",
        imgagen: 'lobo.jpg',
        vida: 90,
        nivel: 2,
        comportamiento: function() {      
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 20,
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 1
                },
                {
                    accion: 'espera',
                    chance: 0
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ]
        }
    },
    {
        nombre: "Acromantula",
        imgagen: 'araña_gigante.jpg',
        vida: 120,
        nivel: 2,
        comportamiento: function() {
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 15,
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)         
            return [ accion, valor ]
        }
    },
    {
        nombre: "Murcielago Mutante",
        imgagen: 'murcielago_mutante.jpg',
        vida: 70,
        nivel: 1,
        comportamiento: function() {
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 20,
                    chance: 2
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 1
                },
                {
                    accion: 'espera',
                    chance: 0
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)       
            return [ accion, valor ]
        }
    },
    {
        nombre: "Figura Misteriosa",
        imgagen: 'la_calaca.png',
        vida: 140,
        nivel: 6,
        comportamiento: function() {
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 35,
                    chance: 4
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
                },
                {
                    accion: 'bloqueo',
                    valor: 25,
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)        
            return [ accion, valor ]
        }
    },
    {
        nombre: "Trasgo",
        imgagen: 'trasgo.jpg',
        vida: 90,
        nivel: 3,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 35,
                    chance: 4
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 1
                },
                {
                    accion: 'bloqueo',
                    valor: 10,
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ] 
        }
    },
    {
        nombre: "Lican",
        imgagen: 'lican.jpg',
        vida: 120,
        nivel: 5,
        comportamiento: function() {      
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 30,
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ]
        }
    },
    {
        nombre: "Golem",
        imgagen: 'golem.jpg',
        vida: 160,
        nivel: 5,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 25,
                    chance: 3
                },
                {
                    accion: 'bloqueo',
                    valor: 30,
                    chance: 1
                },
                {
                    accion: 'espera',
                    chance: 0
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ] 
        }
    }
]
