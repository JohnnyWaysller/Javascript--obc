
const button = document.getElementById('register-button')

button.addEventListener('click', register)

function register (event){
    //aqui event é referencia da onde foi acionado event (no caso click)
    //depois ele pega Target do evento (Alvo, no caso o button no Ex acima: button.addEventListener('click', register)
    //depois (parentNode Pai desse alvo), depois (filho do Elemento)
    //depois (propriedade>valor)
    const username = event.currentTarget.parentNode.children.username.value
    alert ("Testando " + username)
}




//removendo eventos especificos
function removeListener(){
    button.removeEventListener('click', register)
    alert('Evento Removido')
}

//adicinando outro evento ao mesmo tempo
button.addEventListener('mouseover', function(ev){
    //a propriedade pode ser referenciada diretamete do parametro da funcao
    // ev é referencia de onde foi acionado event ('mouseover') que esta sendo
    // acionado de button. e currentTarget  pega esse button como Alvo
    console.log(ev.currentTarget)

    //resultado> no mesmo botao de click no html ta sendo acionado evento mouseover
    //e exibindo quantidade de vezes da acao no console.
})