
let numero = Number(prompt(`Insira um numero para tabuada`))
let mult 
let resultado = ""


for(i=1;i<=20;i++){
mult = i*numero
resultado += numero + "*" + i + "=" + mult +"\n"
//alert(`${numero} * ${i} = ${mult}`)
}
alert(`Resultados da tabuada:\n${resultado}`)