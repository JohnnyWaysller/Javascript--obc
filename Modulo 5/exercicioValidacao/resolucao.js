function validateEmail(email) {
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){ 
        const err = new Error('Email inválido') // se der erro cria objeto de error
        err.input = 'email' //criando propriedade input com valor email
        throw err   //lançando erro
    }
}

const userInputs = { //criando objetos e pegando elementos como propriedades desse objeto
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev)=>{
    ev.preventDefault()
    try{
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
    }catch(err){
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})