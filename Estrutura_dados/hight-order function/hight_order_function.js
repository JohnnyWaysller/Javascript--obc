// h oder function, funcao que permite passar outra como parametro

// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) { // funcao calcular se torna Hight Order Function
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) // operacao se torna uma funcao
    return resultado
  }

//-- outro exemplo --
function somar (x,y){
    console.log("Realizando uma soma")
    return x + y
}
  calcular(3, 5, somar) // estamos passando somar como parametro, isso faz com que 
                        // ao inves se operacao ser executada, a somar vai no lugar





// ------ passando uma lista como parametro para uma funcao -----
// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks

function exibirElemento(elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  }
  const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
  // Forma tradicional
  for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
  }



  // Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
  // Forma funcional
lista.forEach(exibirElemento)  // executar uma funcao para cada elemento de um array
  // Também poderia ser feito:
  lista.forEach(function (elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  })