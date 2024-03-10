let saldo = Number(prompt(`Insira um saldo`))
let opcao =0

do{
    opcao = Number(prompt(`voce possui: ${saldo} guardado\n O que deseja fazer?\n1 - depositar\n2 - sacar\n3 - sair`))
    if (opcao == 1){
        let soma = Number(prompt(`Quanto quer depositar:`))
        saldo += soma
    }else if (opcao==2){
        let subtrai = Number(prompt(`Quanto quer sacar:`))
        saldo -= subtrai
    }
}while(opcao!==3)
