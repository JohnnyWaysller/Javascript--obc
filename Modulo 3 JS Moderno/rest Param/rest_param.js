//rest Param
// nos parametros usando o Op spread ele entende que o array é varios parametros
//por spread quebrar  e ("juntar os elmentos")
// a desestruturacao com op spread permite passar quantos parametros quiser na chamada
function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
  }
  
  console.log(sum(1, 1))
  console.log(sum(2, 2, 2, 2, 2))
  console.log(sum(32, 5, 74, 7, 1, 9, 90))

  const array = [2,1,3,4,5] 
  console.log(sum(...array))

//teste convencional

// function sum(arr){
// return arr.reduce((acumulador,elementoAtual)=>acumulador + elementoAtual, 0)
// }
// // console.log(sum(1,2,3,4))

// const array = [2,1,3,4,5] 

// console.log(sum([1,2,3]))