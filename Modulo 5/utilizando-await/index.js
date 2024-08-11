//UTILIZANDO O AWAIT

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' ){
        return Promise.reject('arguments for subtraction most be of type number')
    }
    return a + b
}

// async function execute(){
//     asyncSum( 50, 33).then(result => {
//         console.log(result)
//     })
// }

// async function execute() {
//     const result = await asyncSum(50, 30)
//     console.log(result)
// }

// execute()

//obs: await funciona apenas dentro de  funcoes criadas com uso de async
//await trava execucao do codigo até ter uma resposta

//OBS: PARA configurar um erro(tratar) utilizamos novamente o try e Catch

async function execute() {
    try{
        const result = await asyncSum(50, null)
        console.log(result)
        }catch(err){
        console.log(err)
        }
}

execute()