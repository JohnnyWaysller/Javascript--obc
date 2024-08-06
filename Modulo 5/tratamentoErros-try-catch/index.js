function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try{
console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22)) // erro esperado
console.log(sum(18, "0"))
console.log(sum(39, null))
console.log(sum(13, "zero")) //erro esperado
}catch(error){ // parametro é erro capturado ao tentar o try
    console.log(error.message) // mostra apenas erro da mensagem de erro
}finally{
    console.log("calculos finalizados")
}