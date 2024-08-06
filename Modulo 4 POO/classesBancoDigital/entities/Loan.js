const Installment = require("./Installment")

module.exports = class Loan{
    static #fee = 1.05
   
    constructor(value, installments){
        this.value = value
        this.installments = []
        for (let i =1; i<=installments; i++){
            this.installments.push(new Installment(( (value/Loan.currentFee) * installments ), i) )
            }
            this.createdAt = new Date()
        }

    static get currentFee(){
        return this.#fee
    }

    static set fee(newFreePercent){
        this.#fee = 1 + (newFreePercent / 100)
    }
}