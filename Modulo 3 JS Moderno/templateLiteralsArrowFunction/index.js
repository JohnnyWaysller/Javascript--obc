
    //funcao normal
    
    function normalSoma (a,b){
        return a + b
    }
    
    
    //funcao anonima
    const anonimousSoma = function (a, b) {
        return a + b
    }
    
    //arrow function
    const arrowSoma = (a, b) => {
        return a + b
    }

    // expressao em linha unica
    const arrowMulti = (a, b) => a * b
    

    // se a arrow function tiver apenas 1 parametro
    // nao é preciso o uso dos parenteses

    const double = a => a * 2

    console.log(`Soma: ${double(10)}`)
   

    // exemplo uso da arrow function em uma hight Order function

    const arrWords = ["Brasil","Boxe","Bota","bravo"]

    const filtred = arrWords.filter (word => word[0] === 'b')

    console.log(filtred)