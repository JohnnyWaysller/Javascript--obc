const User = require("./User")
const Loan = require("./Loan")
const Deposit = require("./Deposit")
const Transfer = require("./Transfer")

module.exports = class App {
    static #listUsers = []

    static get users() {
        return this.#listUsers
    }

    static findUser(email) {
        const userexists = App.users.find(u => u.email === email)
        return userexists ?? null
    }

    static createUser(name, email) {
        const userexists = App.findUser(email)
        if (userexists) {
            console.log("Este email já está em uso")
            return null
        }
        this.#listUsers.push(new User(name, email))
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const deposit = new Deposit(value)
            user.account.addDeposit(deposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if(fromUser && toUser){
        const transfer = new Transfer(fromUser, toUser, value)
        fromUser.account.addTranfer(transfer)
        toUser.account.addTranfer(transfer)
        }
    }

    static loan(userEmail, value, installmentsNumbers) {
        const user = App.findUser(userEmail)
        if(user){
        const loan = new Loan(value, installmentsNumbers)
        user.account.addLoan(loan)
        }
    }

    static switchFee(newfee) {
        Loan.fee = newfee
    }
}