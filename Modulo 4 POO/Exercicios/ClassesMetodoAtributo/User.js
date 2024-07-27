
class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password

    }
    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Login Efetuado com sucesso !!")
        }else
        console.log("Usuário não encontrado")
    }

}

const person = new User("Johnny Domingos","johnny@gmail.com","123")

person.login("johnny@gmail.com","1234")

console.log(person)

