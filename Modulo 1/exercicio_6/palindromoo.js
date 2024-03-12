let palavra = prompt(`insira uma palavra: `)
let palindromo = palavra
let palavraInvertida="";
let verifica = false


for (i=0;i<palavra.length;i++){
    
        if(palavra[i]!==palindromo[(palindromo.length-1)-i]){
        verifica=true
    }
}
// verificar bloco abaixo//
if(verifica===true){
    alert(`Essa Palavra não é um Palindromo`)
    for (i=0;i<palavra.length;i++){
    
        palavraInvertida+=palindromo[(palindromo.length-1)-i]
    }
    alert(`a palavra normal: ${palavra}\na palavra invertida: ${palavraInvertida}`)


}else{
    alert(`Essa palavra é um Palindromo`)
}


