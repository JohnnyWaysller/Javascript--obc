let pessoa = {
    nome: "Johnnyy",
    idade: 26,
    dizerOla(){
        console.log("Olá mundo")
    }
}
// é possivel referenciar propriedades do objeto em um metodo dele mesmo
//ex: let pessoa = {
//     nome: "Johnnyy",
//     idade: 26,
//     dizerOla(){
//         console.log("Olá mundo" + this.nome) /// aqui ele se refere ao proprio obj
//     }
// }
console.log(pessoa)
pessoa.dizerOla()