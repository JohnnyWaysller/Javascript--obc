function execute(){
   
    return new Promise((resolve, reject) => {
        console.log('A promisse esta sendo executada')
        setTimeout(() => {
            if(false){
                reject(`a promise foi rejeitada`)
            }else{
            console.log('A promisse esta sendo Resolvida')
            resolve(50) 
            } 
        }, 1000)
    })
}

// const p = execute()

//then permite lidar com a promise quando ela é resolvida
//o parametro do then é valor de retorno de resolve da promise

//cath é o tratamento de erro (quando acontece erro reject na pomise)
//sendo possivel configurar o erro dentro do catch
//obs: ao chamar then a partir do objeto apos execucao da promise
//ele retorna a propria promise, por isso é possivel continuar o acesso
//com . para o catch
// p.then((result) => {
//     console.log(`A promise foi resolvida. O resultado foi: ${result}`)
// }).catch((err) =>{
//     console.log(`A promise foi rejeitada. motivo: ${err}`)
// })

// FORMA MAIS COMUM DE ENCONTRAR 
// a criacao da function com promise devolve a propria promise, entao
// a chamada da funcao é encadeada direto com uso do then (espera pela resposta)e catch(trata erro)
//EX:
execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada. motivo: ${err}`)
}).finally(() => {
    console.log(`A promise foi finalizada`)
})