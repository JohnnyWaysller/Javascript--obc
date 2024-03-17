

function somar (a,b){
return a + b

}
// é possivel armazenar a funcao na variavel
const operacao = somar  //nesse caso nao pode colocar () no nome, pois se nao armazena o resultado de funcao soma, nao a funcao em si.

console.log(operacao(4, 5))

const subtrair = function subtracao (a,b){  // funcao normal sendo atribuida a variavel
    return a- b
}

const smultiplicar = function (a,b){  // funcao anonima sendo atribuida a variavel
    return a * b                 //Obs elas so podem ser uzadas apos a declaracao(escopo)
}