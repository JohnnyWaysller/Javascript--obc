// const media = (...numbers) => numbers.reduce((acuml, number) => acuml + number, 0) / numbers.length


// console.log(media(1,12,3,4,5,6,7))


// const funcMediaPond = (...numbers) => {
    
//    let result = 0
//       let weight = 0
//     numbers.forEach(num=>{
//         let produto = num.n * num.p
//             weight = weight + num.p
//         result = result + produto
//     })
    
//    return result/weight

// }

//   console.log(funcMediaPond({n: 9, p:3},{n: 7, p:1},{n: 10, p:1}))



//   const mediana = (...userEntry) => {
//     let arr = userEntry.sort((a, b) => b - a)
//     let result = 0
//         if (arr.length % 2 === 0){
//             result = (arr[(arr.length)/2] + arr[((arr.length)/2)-1])/2
//         }else{
//             result = arr[Math.floor((arr.length -1 )/2)] 
//         }
//         return result
//   }

//   console.log(mediana(1,4,7,3,3,4))



const moda = (...moda) => {
    let arrRepeat = [];
    let countElement = 0;
    
    // Contagem de ocorrências de cada número
    moda.forEach(num => {
        let count = 0;
        for (let i = 0; i < moda.length; i++) {
            if (num === moda[i]) {
                count++;
            }
        }
        arrRepeat.push(count);
    });

    // Copia os números para um novo array userNum
    let userNum = [...moda];

    // Cria um array com pares [número, frequência]
    for (let i = 0; i < arrRepeat.length; i++) {
        userNum[i] = [userNum[i], arrRepeat[i]];
    }

    // Encontra a moda (o número com maior frequência)
    let maiorSegundoValor = -Infinity;
    let indiceSegundoValor = 0;
    for (let key in userNum) {
        let segundoValor = userNum[key][1]; // Acessa o segundo valor do array [número, frequência]
        if (segundoValor > maiorSegundoValor) {
            maiorSegundoValor = segundoValor; // Atualiza o maior segundo valor encontrado
            indiceSegundoValor = userNum[key][0]; // Atribui o número correspondente à moda
        }
    }

    return "A moda entre os números é: " + indiceSegundoValor;
}

console.log(moda(1, 1, 4, 4, 4, 4, 1, 3, 1, 3, 3, 3, 3));


