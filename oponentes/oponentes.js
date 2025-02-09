
function generarAtaqueAleatorio(acciones) {
    let listado = []

    for (let i = 0; i < acciones.length; i++) {
        for (let j = 0; j < acciones[i].chance; j++) {
            listado.push(i);
        }
    }

    let numRand = Math.floor(Math.random() * acciones.length)

    let accion = acciones[numRand].accion
    let valor = acciones[numRand].valor

    return [ accion, valor ]
}

export const oponentes = [
    {
        nombre: "Guerrero desconocido",
        imgagen: 'guerrero_desconocido.jpg',
        vida: 100,
        nivel: 2,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 35,
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 3
                },
                {
                    accion: 'bloqueo',
                    valor: 15,
                    chance: 2
                },
                {
                    accion: 'espera',
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ] 
        }
    },
    {
        nombre: "Wargo",
        imgagen: 'lobo.jpg',
        vida: 100,
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
                    chance: 2
                },
                {
                    accion: 'espera',
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ]
        }
    },
    {
        nombre: "Acromantula",
        imgagen: 'araña_gigante.jpg',
        vida: 130,
        nivel: 1,
        comportamiento: function() {
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 15,
                    chance: 2
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
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
                },
                {
                    accion: 'espera',
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)       
            return [ accion, valor ]
        }
    },
    {
        nombre: "Figura Misteriosa",
        imgagen: 'la_calaca.png',
        vida: 120,
        nivel: 3,
        comportamiento: function() {
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 35,
                    chance: 2
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
                },
                {
                    accion: 'bloqueo',
                    valor: 15,
                    chance: 2
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
        nivel: 2,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 40,
                    chance: 3
                },
                {
                    accion: 'esquive',
                    valor: 1,
                    chance: 2
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
        nivel: 3,
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
        vida: 140,
        nivel: 3,
        comportamiento: function() {          
            const acciones = [
                {
                    accion: 'ataque',
                    valor: 35,
                    chance: 3
                },
                {
                    accion: 'bloqueo',
                    valor: 15,
                    chance: 2
                },
                {
                    accion: 'espera',
                    chance: 1
                }
            ]

            const [ accion, valor ] = generarAtaqueAleatorio(acciones)
            return [ accion, valor ] 
        }
    }
]
