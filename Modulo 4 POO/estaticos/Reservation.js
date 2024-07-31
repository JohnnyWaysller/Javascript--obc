class Reservation {
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee //utilizando metodo estático
    }

    static baseFee = 150 // criamos metodo estático que sera utilizado para todas instancias podendo ser acessado
                            //atravéz da classe Ex: acima
    static showBaseFee(){       //definindo metodos estáticos
        console.log(`Base fee is ${Reservation.baseFee}`)
    }
    static get premiumFee(){    // definindo get estático
        return Reservation.baseFee * 1.5
    }
}

// Reservation.baseFee = 100    //apos instancias definidas podemos mudar atributo(isso muda calculo de todas classes)
Reservation.showBaseFee() // chamando o metodo estático a partir do nome da Classe

const r1 = new Reservation(2, '190', 2) // reserva criada saida esperada 300 (sem mudar baseFee)
console.log(r1)

console.log(`A taxa premium é de $${Reservation.premiumFee}`) //utilizando get statico (Chamamos classe tambem)

Reservation.baseFee = 100

console.log(`A taxa premium é de $${Reservation.premiumFee}`) // utilizando get estático