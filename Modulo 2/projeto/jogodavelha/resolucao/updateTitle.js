import { turnPlayer } from "./resol_jogo_velha.js"

export function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}