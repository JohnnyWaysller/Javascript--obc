// const Address = require ("./Adress") // para introduzir classe address em person codigo comentado abaixo

class Person {
    constructor(name, address){
        this.name = name
        this.address = address
    }
}

module.exports = Person

//abaixo modo de fazer a classe Adress estar em Person (Person)

// class Person {
//     constructor(name, street, number, neighborhood, city, state){
//         this.name = name
//         this.address = new Address(street, number, neighborhood, city, state)
//     }
// }