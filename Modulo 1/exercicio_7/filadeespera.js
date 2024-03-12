    let pacientes = ["Joao","Carlos","Tomas","Lucas"]
    let encerrar = ""

 do{
     let lista = ""
     const menu = prompt(`Selecione uma opcao\n1 - Lista de Pacientes\n2 - Adicionar Pacientes\n3 - Consultar Pacientes(Remover) \n4 - Encerrar`)

    switch(menu){
            case "1":
                for(i=0;i<pacientes.length;i++){
                ordem = 1
                lista += (ordem+=i) + "°" + pacientes[i]+"\n"
                }
                alert(`A lista de pacientes são\n${lista}`)
                break

            case "2":
                pacientes.push(prompt(`Digite o nome do paciente a ser adicionado`))
                break

            case "3":
                removePatient = pacientes.shift()
                alert(`o paciente ${removePatient} foi removido`)
                break

            case "4":
                 alert (`encerrando sistema sistema`)
                 encerrar="4"
                 break

            default:
   
    }



}while(encerrar!=="4")