const Address = require ("./Adress")
const Person = require ("./Person")

const addr = new Address("7 de Setembro", 99, "Centro", "Mogi", "SP")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())
