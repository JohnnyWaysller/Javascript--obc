console.log("Programa Iniciado")

// setTimeout(() => {
//     console.log('3 segundos se passaram apos iniciar')
// }, 1000 * 3)

// é possivel armazenar o retorno
// const timeoutId = setTimeout(() => {
//     console.log('3 segundos se passaram apos iniciar')
// }, 1000 * 3)

//o timeoutId é um identificador do timeout
//alem de identicar serve para chamar outra funcao

// clearTimeout(timeoutId) //passando o id para clear
//isso faz com que ele "limpe" o timeout nao executando bloco apos tempo

let seconds = 0
// set interval ele executa repetidamente entre um intervalo
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log("Tempo esgotado! Encerrando... ")
    }
}, 1000 * 3)

//o set interval tmb retorna o id  sendo possivel colocar no clearinterval