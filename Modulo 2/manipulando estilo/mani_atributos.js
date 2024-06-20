const input = document.getElementById('input')

// document.getElementById('value').addEventListener('click', function(){
//     //referenciando atributo pego do html e mudando valor condicional ternaria
//     input.value = input.value === '' ? "Olá Mundo" : ''

//     input.getAttribute('value')

// })

document.getElementById('value').addEventListener('click', function(){
    //referenciando atributo pego do html e mudando valor condicional ternaria
    input.value = "Olá Mundo"

    console.log(input.value)
    console.log(input.getAttribute('value'))    
})

// document.getElementById('type').addEventListener('click', function(){
//     //atributo pode ser mudado dessa forma
//     input.type = input.type !== 'radio' ? 'radio' : 'text'
// })


// com setAttribute - obs apenas muda se um p outro no ex
document.getElementById('type').addEventListener('click', function(){
    
   input.setAttribute ( 'type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function (){

    input.placeholder = 'Digite algo ..'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
    //outro metodo abaixo
    // input.disabled = input.disabled ? false : true  
})


document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    //something se torna um atributo do Elemento data-something definido no elemento HTML
    //sendo possivel acessalo com dataset usando apenas paravra apos something de data-something
    console.log("conteudo de data é: " + data)
    //é possivel alterar os valor do atributo dinamicamente tambem
    input.dataset.something = "outro valor"
    
    console.log("apos alterar: "+ input.dataset.something)

})