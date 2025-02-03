export const oponentes = [
    {
        nombre: "Guerrero desconocido",
        imgagen: 'guerrero_desconocido.jpg',
        vida: 100,
        comportamiento: function() {
            let accionEnemigo = 7
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                case 1:
                    accion = 'ataque'
                    valor = 25
                    break;
                case 2:
                case 3:
                    accion = 'esquive'
                    valor = 1
                    break;
                case 4:
                case 5:
                    accion = 'bloqueo'
                    valor = 10
                    break;
                case 6:
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
        vida: 120,
        comportamiento: function() {
            let accionEnemigo = 2
            accionEnemigo = Math.floor(Math.random() * accionEnemigo)

            let accion = ''
            let valor = 0

            switch (accionEnemigo) {
                case 0:
                    accion = 'ataque'
                    valor = 10
                    break;
                case 1:
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
            let accionEnemigo = 5
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
    }
]
