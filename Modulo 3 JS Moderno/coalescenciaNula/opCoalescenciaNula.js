// let a = true

// let e = null

// let d = null

//op ?? verifica se espressao esq para dir é null ou undefined (se for pula p proximo)
// console.log( e ?? d ?? a)


// ------------
let a = 0
//op verifica e retorna o primeiro valor verdadeiro encontrado. Como o valor 0 é considerado falso em JavaScript, o operador || atribuirá o próximo valor verdadeiro
//entao ou pula p 42
let b = a || 42

console.log({ a, b })

// b = a ?? 42

// console.log({a, b})

// let c = false ?? 42

// console.log({c})