export const protagonista = {
    nombre: "Magik",
    nivel: 1,
    vida: 100,
    ataque: 1,
    habilidades: [
        { 
            accion: "ataque",
            get valor(){ return 20 * protagonista.ataque },
            mensaje: "Jugador ataca"            
        },
        { 
            accion: "magia",
            get valor(){ return 10 * protagonista.ataque },
            mensaje: "Jugador ataca con magia, no se puede bloqear"            
        },
        { 
            accion: "esquive",
            valor: 1,
            mensaje: "Jugador esquiva"            
        },
        { 
            accion: "ataque",
            valor(vida, vidaTotal){ 
                let porcentaje = vida *100 / vidaTotal
                let valor = (-2/5 * porcentaje) + 44 // calculamos daño del ataq
                valor = valor * vidaTotal / 100 // lo hacemos porcentaje
                return Math.floor(valor) },
            mensaje: "Jugador ataca aprovechando debilidad"            
        }
    ],

    levelUp(){
        this.nivel ++
        this.vida += 10
        this.ataque = Math.round((this.ataque + 0.1) *10) /10 
    },
    derrota(){
        this.nivel = 1
        this.vida = 100
        this.ataque = 1
    }
}