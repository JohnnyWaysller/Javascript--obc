
const validateUserMail = (ev) => {
    
    const usermail = document.getElementById('usermail')

    try {
        let rule01 = usermail.value.match(/@/g)   // ou retorna [@] ou null regra 1
        let rule02 = usermail.value.match(/[\w\d_]{2,}(?=@)/g)
        let rule03 = usermail.value.match(/(?<=@)[^\W\d]{2,}/g)
        let rule04 = usermail.value.match(/(?<=@+\w+\.)([^\W\d]{2,})/g)

         if(!rule01){ // se null ou undefined
             alert('Email digitado não possui @') 
             return
         }      
         if(!rule02) {
             alert('Email Digite ao menos 2 caracteres alfanuméricos ou _ antes do @');
             return
         }
         if(!rule03){
            alert(`Email - letras insuficientes apos @`)
            return
         }
         if(!rule04){
            alert(`Email - letras insuficientes apos (@dominio)`)
            return
         }

    } catch (error) {
        console.log(error.message)
        alert('Ocorreu um erro ao validar o email.')
    }

}

const validatePassword = () =>{
    const userpassword = document.getElementById('userpassword')
    let rule01 = userpassword.value.match(/[a-z]/) //ao menos 1 minuscula/
    let rule02 = userpassword.value.match(/[A-Z]/) //ao menos 1 maiuscula/
    let rule03 = userpassword.value.match(/[\d]/) //ao menos 1 numero/
    let rule04 = userpassword.value.match(/[\W]/) //ao menos 1 especial/
    let rule05 = userpassword.value // ao menos 8 caracteres

    try{
        if(!rule01){
            alert(` Senha Necessário ao menos uma Letra minúscula`)
            return
        }
        if(!rule02){
            alert(` Senha Necessário ao menos uma Letra maiúscula`)
            return
        }
        if(!rule03){
            alert(` Senha Necessário ao menos um número`)
            return
        }
        if(!rule04){
            alert(` Senha Necessário ao menos um caractere especial @/.`)
            return
        }
        if(rule05.length<8){
            alert(` Senha Necessário ao menos 8 digitos`)
        }
    }catch{

    }
}

document.getElementById('myForm').addEventListener('submit', (ev) => {
    ev.preventDefault()
    validateUserMail()
    // validatePassword()


})
