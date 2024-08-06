function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido') // se der erro cria objeto de error
        err.input = 'email' //criando propriedade input com valor email
        throw err   //lançando erro
    }
}

function validatePassword(password) {
    if (password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ){
        const err = new Error('senha inválida')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles(userInputs) {
    //metodo entries, recebe objeto como entrada
    //e transforma em array
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })

}

const userInputs = { //criando objetos e pegando elementos como propriedades desse objeto
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles(userInputs)
    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    } catch (err) {
        //acessa Objeto propriedade email de userInput com referencia de [err.input], que temvalor 'email'
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
