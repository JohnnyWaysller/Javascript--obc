const App = require("./App")

App.createUser("Johnny", "johnny@gmail.com")
App.createUser("Bento", "bento@gmail.com")

App.deposit("johnny@gmail.com", 100)

App.transfer("johnny@gmail.com","bento@gmail.com", 50)

App.switchFee(10)
App.loan("johnny@gmail.com", 300, 2)

console.log(App.findUser("johnny@gmail.com").account)
console.log(App.findUser("johnny@gmail.com").account.balance)
console.log(App.findUser("johnny@gmail.com").account.deposits)
console.log(App.findUser("johnny@gmail.com").account.loans)
console.log(App.findUser("johnny@gmail.com").account.transfers)
console.log(App.findUser("johnny@gmail.com").account.loans[0].installments)
