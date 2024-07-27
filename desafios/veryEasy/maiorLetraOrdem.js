

// const maiorLetra = (param) =>{

//     const string = param

//     let letter = ""

//     for(let i=0; i<string.length; i++){



//     }


function maiorLetra(string) {
    const letter = string
    let init = letter[0] 
    
    for (let i = 0; i<letter.length; i++) {
        if (letter[i]> letter[i+1] && letter[i]>=init) {
            init = letter[i]
        }else if(letter[i]<letter[i+1] && letter[i+1]>=init){
            init = letter[i+1]
        }
        // console.log(letter[i])
    }
    return init
}

// const a = 'c';
// const b = 'b';

console.log(maiorLetra("azaaa  teeto de teste ojsoap iegik mcberniassdjopwpokdpfe dikdiwedeiopoirrb"))


// simplificado
// function maiorLetra(string) {
//     if (string.length === 0) return ''; // Verifica se a string está vazia

//     let init = string[0]; // Inicializa com o primeiro caractere da string

//     for (let i = 1; i < string.length; i++) { // Começa o loop do segundo caractere
//         if (string[i] > init) {
//             init = string[i]; // Atualiza o maior caractere encontrado
//         }
//     }

//     return init; // Retorna o maior caractere
// }