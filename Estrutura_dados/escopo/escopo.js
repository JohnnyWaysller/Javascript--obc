// ------Variáveis no escopo mais externo podem ser-----
// usadas dentro de escopos mais internos
let pokemon = "charmander" // escopo fora

function evoluir (){
    pokemon ="Charmeleon"
}

// -----Variáveis no escopo mais interno não podem ser-----
// usadas fora dele em escopos mais internos
function criarAnimal() {
    let animal = "Gato"
  }
  
  criarAnimal()
  console.log(animal) // Gera erro