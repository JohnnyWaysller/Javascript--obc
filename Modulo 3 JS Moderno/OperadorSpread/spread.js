const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns) // junta os elementos e imprime
console.log(...towns[0]) // ele imprime com espaços cada caracter da posicao 0

const townsCopy = towns // dessa forma mudanças no townsCopy afeta o towns(original)

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

const townsClone = [...towns] // cria uma copia real de towns

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns } // tambem pode pegar o array como objeto
const townsObjClone = { ...townsObj } 

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })