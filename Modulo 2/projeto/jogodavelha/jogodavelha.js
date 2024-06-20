
const players = {player1:{nome:'',pontos: 0,jogadas:0},player2:{nome:'',pontos: 0,jogadas: 0}}

const resetBtn = document.createElement('button')
const sectionElement = document.getElementById('printPlayer')
const showDivElement =document.createElement('div')
const inputcheck = document.querySelectorAll("input.toRemove");

//elemento para representar jogador do turno
let turnPlayer = document.createElement('p') 
turnPlayer.innerText = ""
turnPlayer.classList.add('resultWinner')

let btnStart = false

document.getElementById('start').addEventListener('click',function(){
   
    if (inputcheck.length === 2 && inputcheck[0].value !== "" && inputcheck[1].value !== ""){   
    btnStart = true
    insertElements()
    removeElements()
    
    resetBtn.innerText = "RESET"
    resetBtn.classList.add('reset')
    sectionElement.append(resetBtn)
    
    //inicia primeira jogado com player1
    turnPlayer.innerText = "Turno do Jogador: " + players.player1.nome
    sectionElement.append(turnPlayer)}
    else{
        console.log("digite os nomes")
        turnPlayer.innerText = "Digite os nomes para começar"
        turnPlayer.style.fontSize = '1.4rem'
        turnPlayer.style.height = '2.4rem'
        turnPlayer.style.top= '29%'
        sectionElement.append(turnPlayer)
    }
    
})

function removeElements(){
    //remove todos elementos da classe definida no elemento pai
    const elementsOff = sectionElement.querySelectorAll('.toRemove')
    elementsOff.forEach(function(elements){
        sectionElement.removeChild(elements)
    })
    
}

function insertElements(){
    // Atribui os valores dos inputs aos objetos
    players.player1.nome = document.getElementById('name1').value
    players.player2.nome = document.getElementById('name2').value
    
    // Cria os elementos p
    const player1 = document.createElement('p')
    const player2 = document.createElement('p')
    
    // Atribui os valores dos objetos aos elementos p
    player1.innerText = players.player1.nome
    player2.innerText = players.player2.nome
    //cria elementos e insere dinamicamente
    
    showDivElement.append(player1,player2)
    sectionElement.append(showDivElement)

}

resetBtn.addEventListener('click',function(){
    location.reload();
    // const retry = document.getElementById('printPlayer')
    // const elementsRestore = document.querySelectorAll('.toRemove')
    // elementsRestore.forEach(function(element){
    // sectionElement.appendChild(element)
    // })

    // console.log("teste")
    // // sectionElement.remove(showDivElement)
    // showDivElement.remove()
    // turnPlayer.remove()
    // resetBtn.remove()
})



//alterna entre jogadores a cada turno
function turnPlay(){
    turnPlayer.innerText = turnPlayer.innerText === "Turno do Jogador: " + players.player1.nome 
    ? "Turno do Jogador: " + players.player2.nome 
    : "Turno do Jogador: " + players.player1.nome
    
}


const elements = document.querySelectorAll('.areamark')

elements.forEach(function(selected, index){

    
    selected.addEventListener('click',function(){
        //se item selecionado nao possui classe disable
        //contains verifica propriedade
        if(!selected.classList.contains('disable') && btnStart=== true){
        //controla qual jogador do turno
        turnPlay()
        //marca cada jogada de acordo com jogador
        marcador(selected)
        //desabilita campo já macado(jogada)
        selected.classList.add('disable')
        //verifica jogadas para definir ganhador
        validateGame()
        }else{
            console.log("Jagador já Marcou este espaço")
        }
    })
})

 
let counterplays = 1

//combinacoes para vitoria
function validateGame() {
    const winningConditions = [
        [0, 1, 2], // Linha 1
        [3, 4, 5], // Linha 2
        [6, 7, 8], // Linha 3
        [0, 3, 6], // Coluna 1
        [1, 4, 7], // Coluna 2
        [2, 5, 8], // Coluna 3
        [0, 4, 8], // Diagonal principal
        [2, 4, 6]  // Diagonal secundária
    ];

    // para cada subconjunto de winning  executa condicao abaixo
    for (let condition of winningConditions) {
        //para todos (every) de condition(subconj.. [0,1,2])
        //ex: o primeiro elemento do array possui propriedade x?
        if (condition.every(index => elements[index].dataset.marked === "circle")) {
        //no caso verifica para os 3 elementos do sub, se ambos atender o retorno é true 
            turnPlayer.innerText = "Jogador: " + players.player2.nome + " VENCEU !!"
            //itera pelos elementos atuais do subconj em condition define bgcolor
            condition.forEach(index => elements[index].style.backgroundColor = '#ee7d7d')
            return
        }
        if (condition.every(index => elements[index].dataset.marked === "x")) {
        //no caso verifica para os 3 elementos do sub, se ambos atender o retorno é true
            turnPlayer.innerText = "Jogador: " + players.player1.nome + " VENCEU !!"
            //itera pelos elementos atuais do subconj em condition define bgcolor
            condition.forEach(index => elements[index].style.backgroundColor = '#6995c7')
            return
        }
    }
    if(counterplays === 9){
        turnPlayer.innerText = "DEU # VELHA !!"
    }
    
    counterplays++

}



function marcador(selected){
    // if(btnStart){
         if(turnPlayer.innerText === "Turno do Jogador: " + players.player1.nome){
        
        const circleMark =document.createElement('img')
        circleMark.src = './imagens/circle.svg'
        circleMark.classList.add('circle')
        selected.append(circleMark)
        selected.dataset.marked = "circle"
       
         }else{
        const xMark =document.createElement('img')
        xMark.src = './imagens/x.svg'
        xMark.classList.add('xMark')
        selected.append(xMark)
        selected.dataset.marked = "x"
       
    }
 
}