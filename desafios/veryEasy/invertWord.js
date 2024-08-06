

// const invertWordAndLowCase = (string) => {
//     let invert = ""
//     let invertWords = ""
//     let invertFinally = ""
    
//     for(let i=0; i<string.length; i++){
//         invert += string[string.length - 1 - i]
//     }    

//     invertWords = invert.split(' ')

//     for(let i=0; i<invertWords.length; i++){
//         invertFinally += invertWords[invertWords.length - 1 - i] + " "
//     }
    
//     let result = invertFinally.slice(0, invertFinally.length-1)

    
//     return result.toLowerCase()
// // return invert.toLowerCase()
// console.log(invert.length)

// return invert

// }

// console.log(invertWordAndLowCase("Testando inVercao"))

const invertWordString = (string) => {
    const invert = string.toLowerCase().split(" ")
    const invertedWord = invert.map((word) => word.split('').reverse().join(''))
     
    return invertedWord.join(' ')
}
console.log(invertWordString("Teste Oficial"))

