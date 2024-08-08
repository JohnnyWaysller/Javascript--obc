

    function calculateImc(p, a){
        const height = a * a
        const weight = p
        const imc = (weight / height)
        return new Promise((resolve, reject) => {
            if(typeof height !== 'number' || typeof weight !== 'number'){
                reject(`Dados inseridos inválidos`)
            }else{
                resolve(imc)
            }
        })
    }

    calculateImc(60, 1.64).then((imc)=>{
        if (imc < 18.5) {
            console.log(`Seu IMC é ${imc} (Magreza)`);
        } else if (imc <= 24.9) {
            console.log(`Seu IMC é ${imc} (Normal)`);
        } else if (imc <= 29.9) {
            console.log(`Seu IMC é ${imc} (Sobrepeso)`);
        } else if (imc <= 39.9) {
            console.log(`Seu IMC é ${imc} (Obesidade)`);
        } else {
            console.log(`Seu IMC é ${imc} (Obesidade Grave)`);
        }
    }).catch((erro)=>{
        console.log(`Erro: ${erro}`)
    }).finally(()=>{
        console.log("a Promise foi encerrada")
    })

    // calculateImc(70, 1.64)
    showImc(70, 1.64)

    function showImc(p, a){
            const result = calculateImc(p, a)
            console.log(`exibindo:`)
            console.log(result)
            console.log('Finalizando a Exibicao do Imc') 
       

    }

