
// const squareResultAndConcat = (n) => {
//     const string = "" + n
//     let concat = ""
//     for(let i =0; i <string.length; i++){
//         concat += (string[i] * string[i])
//         console.log(string[i],concat)
//     }
//     console.log(concat)
// }

// squareResultAndConcat(24)

//alternativa:

const squareResultAndConcat = (n) => {
    const string = "" + n
    let concat = ""
    for(let i =0; i <string.length; i++){
        concat += Math.pow(Number(string[i]),2).toString()
        console.log(string[i],concat)
    }
    console.log(concat)
}

squareResultAndConcat(24)