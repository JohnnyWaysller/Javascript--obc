async function imc(weight, height){
        if(typeof weight !== 'number' || typeof height !== 'number')
            return Promise.reject('arguments must be of type number')
        else
             return weight / (height * height)
    }

async function showImc(weight, height){
   try{
        const result = await imc(weight, height)
        console.log (`O resultado do IMC foi de ${result}`)
        if(result < 18.5) console.log(`Situacao: MAGREZA`)
            else if (result < 25) console.log(`Situacao: NORMAL`)
                else if(result <30) console.log('Situacao: SOBREPESO')
                    else if (result < 40) console.log(`Situacao: OBESIDADE`)
                else console.log('Situacao: OBESIDADE GRAVE')
            console.log(result)
    }catch(erro){
        console.log(erro)
    }

}
showImc(71,"text")

