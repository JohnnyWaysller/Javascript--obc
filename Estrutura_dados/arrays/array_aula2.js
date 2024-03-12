const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos - usando push
// arr.push("NuncaMorto")
// console.log(arr)

// colocar no final da lista
// arr.unshift("Boromir")
// console.log(arr)
// colocar no começo da lista

//removendo elementos no final do array- pop
// const elemento =arr.pop(arr)
// console.log(arr)
// console.log(elemento) // imprime o elemento removido

//removendo valores no começo do array - shift
// removendoElemento = arr.shift()
// console.log(removendoElemento) // imprime o elemento removido
// console.log(arr)


//pesquisar por um elemento - includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//pesquisar por um elemento pelo indice
const indice = arr.indexOf("Gandalf")
console.log (indice)

//cortar o array - Slice
const hobbits = arr.slice(0,4) // pega os elementos da posicao 0 ao 3
console.log(arr)
console.log(hobbits)

const outraParte = arr.slice(-4) // pega do quarto elemento em diante
console.log(outraParte)

//concat
const sociedade = hobbits.concat(outraParte, "maiselemento")
console.log(sociedade)// pega todos elementos de hobbits + todos de outraParte e ainda pode adicionar mais elementos, junta tudo em sociedade.

//substituicao dos elementos - splice 
const elementoRemovidos = sociedade.splice (4, 1, "Gandalf o cinzento")
//remove um elemento e coloca outro no lugar
//(primeirovalor é o indice removido, segundo quantidade, terceiro o valor colocado no lugar) OBS:splice usa referencia e muda arrayoriginal
console.log(sociedade)
console.log(elementoRemovidos) // imprime o valor que foi removido

//iterar sobre elementos