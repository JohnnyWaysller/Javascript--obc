//para funcoes async sem uso especifico do objeto new Promise, 
//precisamos para fazer a rejeicao da promisse chamar o objeto
//global Promisse.reject no return (automaticamnte ele identifica a promisse)
//e se foi rejeitada pela condicao

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ){
        return Promise.reject('arguments for subtraction most be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ){
        return Promise.reject('arguments most be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50, 33) //necessario salver em uma variavel as promises para passar como argumento
const subtractResult = asyncSubtract(50, 30)        //dentro de um array

Promise.all([sumResult, subtractResult]).then(results => { // promise all tem como parametro receber um array de promise
    console.log(results)
}).catch(err => {
    console.log(err)
})


// const numbers = [4, 9, 5, 13, 77]

// async function asyncSquare(x) {
//        return x * x
// }

// Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
//     console.log(squares)
// }).catch(erro => {
//     console.log(erro)
// })