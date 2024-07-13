import {turnPlayer} from "./resol_jogo_velha.js"

export function handleWin(regions){
    //recebe conbinacao da vitoria, pra cada elemento dessa combinacao(array)
    //seleciona no atributo passado como string a classe win
    regions.forEach(function (region){
      document.querySelector('[data-region="' + region + '"]').classList.add('win')
      
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' venceu!'
  }
  