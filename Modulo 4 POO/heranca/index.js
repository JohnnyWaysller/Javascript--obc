class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}

class House extends Property {} // herda todos atributos e metodos de Property

const land = new Property(200, 200000)
const someHouse = new House(150, 400000)

land.getPricePerSquareMeter()
console.log(land.getPricePerSquareMeter(),someHouse.getPricePerSquareMeter())

class Apartament extends Property{      //Herda de Property
    constructor(number,area,price){     //para criar atributos exclusivo da classe Apartament//criamos novo construtor
        super(area,price)                // Super é construtor da classe mae que chamamos dentro do nosso construtor
        this.number = number            //o construtor da classe Mae com comando Super e passamos os paramentro
    }                                   //após isso apenas definimos no construtor os parametros exclusivos

    getFLoor(){
        return this.number.slice(0, -2) // assumindo number como string o slice irá pegar parte dessa string - 2 ultimos digitos
    }
}

const apt = new Apartament ("201", 100, 160000)
console.log(apt.getFLoor())