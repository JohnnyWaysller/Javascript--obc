//1 forma de alterar os estilos no JS
// funcao para alterar tema claro
function useLightTheme(){
document.body.style.color = '#212529'
document.body.style.backgroundColor = '#f1f5f9'

}
// funcao para alterar tema escuro
function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)

// document.getElementById

// 2 Forma de alterar os estilos no JS usando as classes

function switchTheme(){
    //classList permite manipular lista de classe dos elementos
    //toggle (serve para alternar) nesse caso no html o body esta com classe is-light
    //o toggle remove a classe no elemento e colocar a proxima descrita no js abaixo
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    }

document.getElementById('switchBtn').addEventListener('click', switchTheme)


