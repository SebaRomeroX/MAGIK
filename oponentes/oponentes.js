export const oponentes = [
    {
        nombre: "Guerrero desconocido",
        imgagen: 'guerrero_desconocido.jpg',
        vida: 100,
        comportamiento: function() {
            let accionEnemigo = 9
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                case 2:
                    accion = 'ataque'
                    valor = 35
                    break;
                case 3:
                case 4:
                case 5:
                    accion = 'esquive'
                    valor = 1
                    break;
                case 6:
                case 7:
                    accion = 'bloqueo'
                    valor = 15
                    break;
                case 8:
                    accion = 'espera'
                break;
            }            

            return [ accion, valor ]
        }
    },
    {
        nombre: "Wargo",
        imgagen: 'lobo.jpg',
        vida: 100,
        comportamiento: function() {
            let accionEnemigo = 5
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                    accion = 'ataque'
                    valor = 20
                    break;
                case 2:
                case 3:
                    accion = 'esquive'
                    valor = 1
                    break;
                case 4:
                    accion = 'espera'
                break;
            }            

            return [ accion, valor ]
        }
    },
    {
        nombre: "Acromantula",
        imgagen: 'araña_gigante.jpg',
        vida: 130,
        comportamiento: function() {
            let accionEnemigo = 3
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                    accion = 'ataque'
                    valor = 15
                    break;
                case 2:
                    accion = 'esquive'
                    valor = 1
                    break;
            }            

            return [ accion, valor ]
        }
    },
    {
        nombre: "Murcielago Mutante",
        imgagen: 'murcielago_mutante.jpg',
        vida: 70,
        comportamiento: function() {
            let accionEnemigo = 6
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                case 2:
                    accion = 'ataque'
                    valor = 20
                    break;
                case 3:
                case 4:
                    accion = 'esquive'
                    valor = 1
                    break;
                case 5:
                    accion = 'espera'
                break;
            }            

            return [ accion, valor ]
        }
    },
    {
        nombre: "Figura Misteriosa",
        imgagen: 'la_calaca.png',
        vida: 130,
        comportamiento: function() {
            let accionEnemigo = 7
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                case 2:
                    accion = 'ataque'
                    valor = 35
                    break;
                case 3:
                case 4:
                    accion = 'esquive'
                    valor = 1
                    break;
                case 5:
                case 6:
                    accion = 'bloqueo'
                    valor = 15
                    break;
            }            

            return [ accion, valor ]
        }
    }
]
