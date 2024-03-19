const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//----------pegando itens de array e colocando em outro ----------
//   const nomes = []

//   for (let i = 0; i<personagens.length; i++){
//     nomes.push(personagens[i].nome) //forma manual
//   } 

//-----fazendo a mesma coisa porem com----- MAP-----------
// const nomes = personagens.map(function (personagem){
//     return personagem.nome       // usando map
// })

//   console.log(nomes)



  //------Filter--------
// comportamento sem filter

 const orcs =[]
 for (let i = 0; i < personagens.length; i++) {
     if(personagens[i].raca === "Orc"){
         orcs.push(personagens[i]) // forma manual
     }
 }
 console.log(orcs)

// ------------utilizando o filter -------
 const orcs = personagens.filter(function(personagem){
         return personagem.raca === "Orc"
 })

 console.log(orcs)

//------------Reduce ----------
//Comportamento 

const nivelTotal = personagens.reduce(function(ValorAcumulado, personagem){
    return ValorAcumulado + personagem.nivel
// reduce o (primeiro valor) vem da iteracao anterior
//o return passa ele para iteracao seguinte
},0)// necessario informar o valor do primeiro elemento na iteracao
// console.log(nivelTotal)

const racas = personagens.reduce(function(ValorAcumulado, personagem){
    if (ValorAcumulado[personagem.raca]){
        ValorAcumulado[personagem.raca].push(personagem)
    }else{
        ValorAcumulado[personagem.raca] = [personagem]
    }
return ValorAcumulado
},{})
 console.log(racas)

//--------Sort---------------
//o sort modifica array original
personagens.sort(function (a, b){
    return a.nivel - b.nivel // para ordernar por metodo decrescrente apenas inverter os parametros do return.

})
console.log(personagens)

// dica para nao modificar é possivel utilizar o metodo slice()
// ex: const arrayOrdenado=personagens.slice()sort(function (a, b)
// o slice vai sem parametros.