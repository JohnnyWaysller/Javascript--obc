//encadeamento de promise

// é possível encadear as promises em sequencia da seguinte forma

//primeiro a forma normal das promisses

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

//depois chamamos a primeira funcao e o then para chamar a segunda.

getAge(birthday).then( age => {  // chamamos primeira funcao depois o resolve(retorno da promise) chama .then e nesse chamamos outra funcao checkAge com esse resultado no parametro
    checkAge(age).then(isOver18 => {
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }                 
}).catch(err => {
    console.log(err.message) // Este catch trata erros de checkAge ou do código dentro do segundo then
}).catch(err => {
    console.log(err.message) // Este catch trata erros de getAge ou do código dentro do primeiro then
})
})

//dessa forma é possivel encadear porem ao usar multiplos encadeamentos fica ruim a visualizacao e é possivek resumir 
// de outra forma

getAge(birthday).then( age =>{  
    return checkAge(age)
})
.then(isOver18 => {
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}).catch(err => {
    console.log(err.message)
})