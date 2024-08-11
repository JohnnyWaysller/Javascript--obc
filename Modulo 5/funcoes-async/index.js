//funcoes async SIMPLIFICAM o uso das promisse pois elas ja retornam uma promise em seu resultado
//apenas inserimos async no inicia da funcao e o tratamento Resolve já é definido no return

// async function asyncSum(a, b) {
//     return a + b
// }

// async function asyncSubtract(a, b) {
//     return a - b
// }

// const sumResult = asyncSum(50, 33) //necessario salver em uma variavel as promises para passar como argumento
// const subtractResult = asyncSubtract(50, 33)        //dentro de um array

// Promise.all([sumResult, subtractResult]).then(results => { // promise all tem como parametro receber um array de promise
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })



//Um outro exemplo interessante onde podemos utilizar o Promise.all() é quando trabalhamos com funções assíncronas em um .map(), que retorna um array. Nesse caso ele retornará um array de promises, que poderão ser executadas em conjunto:
const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
       return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(erro => {
    console.log(erro)
})