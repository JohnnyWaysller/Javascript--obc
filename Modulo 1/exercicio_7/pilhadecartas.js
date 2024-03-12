let baralho = ["A","B","C","D","E"]
let menu = ""

while (menu!=="3"){
    menu = prompt(`o  baralho contem ${baralho.length} cartas ${baralho}\nO que deseja fazer?\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`)

    if(menu=="1"){
        baralho.push(prompt(`qual carta deseja adicionar?`))
    }else if(menu=="2"){
        
        if(cartaTirada=baralho.pop()){
        alert(`Voce puxou a carta ${cartaTirada}`)}else{alert(`nao possui mais cartas no baralho`)}
    }
    else if(menu=="3"){
        alert(`encerrando programa...`)
    }
}

//alert(`${baralho}`)