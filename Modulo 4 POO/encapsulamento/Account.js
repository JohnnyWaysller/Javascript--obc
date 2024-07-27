class Account {

    #password
    #balance = 0

    constructor(user){
        this.email = user.email
        this.#password = user.password //para definir o atributo como privado necessario usar #antes do nome e indicalo fora do construtor
    }

    //para ter acesso a propriedades privadas é necessario usar metodo dentro da classe
    getBalance(email, password){
        if(this.#authenticate(email,password)){
            return this.#balance
        }else{
            return null
        }

    }

    #authenticate(email,password){
        return this.email === email && this.#password === password
    }

}

const user = {
    email: "johnny@gmail.com",
    password: "12345"
}

const myAccount = new Account(user)


console.log(myAccount.getBalance("johnny@gmail.com","12345"))