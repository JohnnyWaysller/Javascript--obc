// import { handleBoardClick } from "./boardClick.js"
import { updateTitle } from "./updateTitle.js"
import { disableRegion } from "./disable.js"
import { getWinRegions } from "./getWinRegions.js"
import { handleWin } from "./handleWin.js"

const boardRegion = document.querySelectorAll('#gameBoard span')
export let vBoard = [] // export p/ getwinRegion
export let turnPlayer = " " //export p/ updateTitle

document.getElementById('start').addEventListener('click', initializeGame)

function initializeGame(){
  vBoard = [['','',''], ['','',''], ['','','']]
  turnPlayer = "player1"
  document.querySelector('h2').innerHTML = 'Vez de: <span= id="turnPlayer"></span>'
  updateTitle()
  boardRegion.forEach(function (element){
    element.classList.remove('win')
    element.innerText = ""
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick)
  })
}

export function handleBoardClick(ev){ //export p/ disable
    const span = ev.currentTarget
    const region = span.dataset.region //funcao split //exemplo: se string = N.N.N
    const rowColumPair = region.split('.')//divide em arrays = ["N","N","N"]
    const row = rowColumPair[0]
    const col = rowColumPair[1]
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row][col] = 'X'
    }else{
        span.innerText = 'O'
        vBoard[row][col] = 'O'
    }
    console.clear()
    console.table(vBoard)//pega alguma informacao e tenta mostrar como tabela
    disableRegion(span)

    const winRegions = getWinRegions()
    if(winRegions.length > 0){
        // se array existe vencedor
        handleWin(winRegions)
    }else if(vBoard.flat().includes('')){
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        //metodo flat pega todos elementos do array (sub-arrays)
        //e retorna como array unico todos elementos.
        //includes v  erifica espaço vazio desse array
        //se nesse novo array existe espaço vazio (ainda há jogadas),entao
        //chama uptadeTittle pro novo jogador 
        updateTitle()
    }else{
        document.querySelector('h2').innerHTML = 'Empate'
    }
}