//promisse é um objeto que tem associado a ele uma funcao
//que sera executada de forma assincrona


//quando promisse inicia ela tem um estado 
//pending
//resolved
//rejected

//uso comum
function execute(){
    // normalmente usada dentro de uma funcao
    //ela esta sendo criada no retorno da funcao
    return new Promise((resolve, reject) => {
        console.log('A promisse esta sendo executada')
        setTimeout(() => {
            console.log('A promisse esta sendo Resolvida')
            resolve("Resultado") // returno indicando promisse resolvida
        }, 1000)
    })
}
const p = execute() //Leia tudo abaixo: criamos uma variavel chamando a funcao que contem a promisse
                    // isso nao atribui uma funcao em p, mas sim resultado da funcao que é uma promisso
                    // se tentar executada denovo oque será exibido é resultado dela apos a primeira
                    //execucao que é feita em sua criacao 

setTimeout(() => {
    console.log(p) //aqui é chamado a promisse(resultado dela que foi execurtado e salvo em p) num tempo apos sua execucao acima
}, 3000)