class Wallet {
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100
    }
    get amount(){
        return this.#amount / 100       //definindo um comportamento ao utilizar get
    }

    set username(newUsername){                   //usando set para atribuir valor a um atributo privado
        if (typeof newUsername === 'string'){   //obs se em: this.#username tivesse como: username (mesmo nome de set)
        this.#username = newUsername            // isso resultaria em um loop infinito
        }else{                      
            console.log("username must be of tipe string")
        }
    }                                   
    get username(){                     
        return this.#username
    }
}

const myWallet = new Wallet()

//ao chamar o get (fica com comportamento de atributo público)
//sendo tambem possivel utilizar atribuicoes +=  -= concat etc..
myWallet.username = "Fabio"     //usando set 

console.log(myWallet.username)
console.log(myWallet.amount)

//é possivel inserir regra no set
//apos incluir regra no set
myWallet.username = 1

console.log(myWallet.username)