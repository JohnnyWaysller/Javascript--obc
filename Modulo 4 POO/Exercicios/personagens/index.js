const Character = require ("./Character")
const Thief = require ("./Thief")
const Mage = require ("./Mage")
const Warrior = require ("./Warrior")



const cavaleiro = new Character("eragon", 600, 200, 150)
const elfo = new Thief("legolas", 500, 250, 100)
const mago = new Mage("Gandalf", 300, 350, 100, 100)
const orc = new Warrior("beserker", 400, 200, 300, 150, "attack")

console.log("Antes do confronto!! ")
console.log(orc)
console.log(cavaleiro)
console.log("\n")


console.log("Depois do confronto!! ")
orc.positonMode()

// orc.attack(cavaleiro)
// console.log(cavaleiro)

console.log(orc)
orc.positonMode()

console.log(orc)


// orc.positonMode()
// orc.attack(cavaleiro)
// console.log(cavaleiro)
// cavaleiro.log(orc)
// console.log("\n")

// console.log("Curando Alvo!! ")
// mago.heal(cavaleiro)
// console.log(cavaleiro)