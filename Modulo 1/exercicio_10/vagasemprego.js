function menu() {
    const opcao = prompt(`---Bem Vindo ao Gestão de Vagas---\n
    Selecione uma opção:\n
    1. Lista de Vagas disponiveis\n
    2. Criar nova vaga\n
    3. Vizualizar vaga\n
    4. Increver candidato\n
    5. Excluir vaga\n
    6. Sair`)
    return opcao
}
const vagas=[]
do {
    opcao=menu()
    switch (opcao) {
        case "1":
                listarVagas()
            break;
        case "2":
                criarVaga()
            break;
        case "3":
                visualizarVagas()
            break;
        case "4":
                inscreverCandidato()
            break;
        case "5":
                excluirVaga()
            break;
        case "6":
                alert(`Encerrando Sistema...`)
            break;
        default:
                alert(`Opção Inválida`)
            break;
    }
} while (opcao !=="6")

function criarVaga(){
  const nome=prompt(`Digite o nome da Vaga`)
  const descricao=prompt(`Digite uma descricao da Vaga`)
  const dataLimite=prompt(`Digite a data limite`)
  const newVaga = {nome,descricao,dataLimite,candidato: []}
  const confirma=confirm(
        "Confira as informacoes, deseja realmente cadastrar?\n"+
            "\nCargo: "+nome+
            "\nDescricao: "+descricao+
            "\nData Limite: "+dataLimite)
    if(confirma){
  vagas.push(newVaga)}else{
    alert(`Voltando ao cadastro de Vagas`)
    criarVaga()
  }
}
function inscreverCandidato(){
    const indiceVaga=prompt(`Para qual vaga deseja cadastrar`)
    const candidato=prompt(`Qual nome do candidato`)
    if(!vagas[indiceVaga].candidato){ // verifica se existe propriedade candidato em vagas[indiceinformado]
        vagas[indiceVaga].candidato = []// caso nao existe cria um array vazio
    }
    const confirma =confirm(
    "Confira as informacoes, cadastrar candidato?\n"+
            "\nNome: "+candidato+
            "\nCandidatura para vaga: "+vagas[indiceVaga].nome+
            "\nDescricao: "+vagas[indiceVaga].descricao)
    if(confirma){
        vagas[indiceVaga].candidato.push(candidato) // adiciona candidato
    }
}
function excluirVaga(){
    const removeIndice = prompt(`Qual vaga deseja excluir?`)
    if(!vagas[removeIndice]){
        alert(`vaga nao cadastrada`)
        excluirVaga()
    }
    const confirma = confirm(
        "Confira as informacoes, deseja excluir esta vaga?\n"+
            "\nVaga: "+vagas[removeIndice].nome+
            "\nDescricao: "+vagas[removeIndice].descricao+
            "\nData Limite: "+vagas[removeIndice].dataLimite)
    if(confirma){
        vagas.splice(removeIndice,1)
        alert(`vaga excluida com sucesso!!`)
    }
}
function listarVagas(){
    let listaVaga=""
    vagas.forEach((vaga,indice) => {
        listaVaga += vaga.nome+"    Indice: "+indice+"     Quantidade: "+vaga.candidato.length+" Candidatos\n\n"
    })
    alert(`As vagas disponiveis são:\n${listaVaga}`)
}
function visualizarVagas(){
    let visualizar=""
    const indice=Number(prompt(`Informe qual vaga deseja visualizar ?`))
    if(vagas[indice].candidato){
    visualizar +="Cargo: "+vagas[indice].nome+"\nIndice: "+vagas.indexOf(vagas[indice])+
    "\nDescrição: "+vagas[indice].descricao+"\nQuantidade: "+vagas[indice].candidato.length+
    " candidatos"+"\nNomes: "+vagas[indice].candidato}
    else{
        visualizar +="Cargo: "+vagas[indice].nome+"\nIndice: "+vagas.indexOf(vagas[indice])+
        "\nDescrição: "+vagas[indice].descricao+"\nQuantidade: "+vagas[indice].candidato.length+
        " candidatos"
    }
    alert(`Consulta de Vaga:\n\n${visualizar}`)
}
        

//vagas[{nome:joao,descricao:sahu, data:2323},]
// vagas[{nome: uhasuh,
//       descricao: ahusua,
//       datalimite: 12/03,
//       candidatos:[{nome},{nome}]
//        }
//    ]


