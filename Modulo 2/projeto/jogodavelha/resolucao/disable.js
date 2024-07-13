import { handleBoardClick } from "./resol_jogo_velha.js"

export function disableRegion(element){
    //apos elemento clicado na funcao handleBoard, é removido evento para
    //nao ser permitido clicar nesse elemento novamente
    element.classList.remove('cursor-pointer')
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}