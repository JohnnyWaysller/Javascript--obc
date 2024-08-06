
module.exports = class Account {
    #balance = 0
    
    
    constructor(user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    // newDeposit(value){
    //     this.#balance += value
    //     this.deposits.push(new Deposit(value))
    // }

    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    // newLoan(loanValue, numberParts){
    //     const loan = new Loan(loanValue, numberParts)
    //     this.#balance += loan.loanValue
    //     this.loans.push(loan)
    // }

    addTranfer(transfer){
        if(this.owner.email === transfer.fromUser.email){
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }else if (this.owner.email === transfer.toUser.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        }
    }

}