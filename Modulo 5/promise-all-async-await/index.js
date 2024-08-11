//async await com promise ALL

function waitFor(seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 5, 9, 13, 77]

//no map é passado um callback async (isso faz com que os retornos sejem as promises)
//resultado final um array de promises


// const squares = numbers.map(async (number) => {
//     await waitFor(2)
//     return number * number
// })

// console.log(squares) //isso no console imprime as promises pedentes
//com isso podemos resolver as varias promises de uma vez utilizando  Promise.all()

// Promise.all(squares).then(result => {
//     console.log(result) //resolve e imprimes as promises de square
// })


// Abaixo vamo simplificar isso colocando o promise All dentro de uma async function
// adicionamos o await para aguardar as resolucoes de promises, em seguida salve em squares
// OBS: o array number com metodo.map colocamos direto em promise.All

// OBS IMPORTANTE: o codigo abaixa executa o callback de 2 seg para cada um dos 5 numeros, porem nao leva
// 10 seg para finalizar, pois por estar usando uma async esta executando todos ao mesmo tempo
async function execute(){
    const squares = await Promise.all(numbers.map( async (number) => {
        await waitFor(2)
        return number * number
    }))
    console.log(squares)
}

execute()