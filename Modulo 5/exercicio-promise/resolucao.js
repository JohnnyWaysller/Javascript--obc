function imc(weight, height){
    return new Promise((resolve, reject)=>{
        if(typeof weight !== 'number' || typeof height !== 'number')
            reject('arguments must be of type number')
        else
            resolve(weight / (height * height))
    })
}

function showImc(weight, height){
    imc(weight, height).then((result)=>{
        console.log (`O resultado do IMC foi de ${result}`)
        if(result < 18.5) console.log(`Situacao: MAGREZA`)
            else if (result < 25) console.log(`Situacao: NORMAL`)
                else if(result <30) console.log('Situacao: SOBREPESO')
                    else if (result < 40) console.log(`Situacao: OBESIDADE`)
                else console.log('Situacao: OBESIDADE GRAVE')
    }).catch((erro)=>{
        console.log(erro)
    })
    console.log('calculando...')
}

showImc(71,1.75)
showImc(50,1.75)
showImc(71,"text")