let opcao= ""
const imoveis =[]

do{
    opcao = prompt(`Existe ${imoveis.length} imoveis cadastrados, O que deseja fazer?\n1 - Salvar novo imovel\n2 - Exibir Imoveis\n3 - Sair`)
    
    switch(opcao){
        case "1":
        const novoImovel ={}
        novoImovel.proprietario=prompt(`Digite o nome do proprietario`)
        novoImovel.quarto=prompt(`Quantos quartos possui?`)
        novoImovel.banheiro=prompt(`Quantos banheiros possui?`)
        novoImovel.garagem=prompt(`O imovel possui garagem?`)
        
        const confirmacao = confirm(
            "Confira as informacoes, deseja salvar este imóvel?\n"+
            "\nProprietario: "+novoImovel.proprietario+
            "\nQuartos: "+novoImovel.quarto+
            "\nBanheiros: "+novoImovel.banheiro+
            "\nPossui Garagem: "+novoImovel.garagem)

        if(confirmacao){
            imoveis.push(novoImovel)
            alert("Informações foram Salvas com Sucesso ")
        }
        break
 
        case "2":
            let lista= ""
            for(i=0;i<imoveis.length;i++){
                lista+="nome: "+imoveis[i].proprietario+
                ", "+imoveis[i].quarto+" quartos, "+
                imoveis[i].banheiro+" banheiros, "+
                "possui garagem: "+imoveis[i].garagem+"\n"
             }
             alert(`Proprietarios\n${lista}`)
             break
    }
    

}while(opcao!=="3")