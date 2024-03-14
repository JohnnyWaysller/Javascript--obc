const nome = prompt (`Qual nome no turista:`)
let resposta = "sim"
let cidades=""
let quantidade = 0

while(resposta==="sim" && resposta !== ""){
    resposta = prompt(`${nome} já visito alguma cidade?\nDigite sim ou nao`)
    if(resposta ==="nao"){
        break
    }
    else if(resposta !== "nao" && resposta!=="sim"){
        break
    }
    let cidade = prompt(`${nome} qual nome da cidade?`)
    cidades += "\n"+cidade
    quantidade ++ 
}

if (cidades !== ""){
alert(`O turista visitou ${quantidade} cidades: ${cidades}`)}
else{alert(`O turista nao visitou nenhuma cidade`)}