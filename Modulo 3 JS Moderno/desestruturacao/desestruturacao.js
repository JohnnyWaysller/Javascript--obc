const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin","Padme"]
}

//metodo normal e objetos
const name = person.name
//usando desestruturacao
// const { name } = person
//ambos geram mesmo resultado
// é possivel desestruturar varias propriedades de uma vez
const {job, parents} = person
console.log(job,parents)

//para fazer desestruracao com arrays segue mesma metodo porem trocamos
// as Chaves por conchetes
// com array podemos dar qualquer nome, e a ordem dos elementos segue como
// nos parametros dentro das chaves

const [father, mother] = parents

console.log (father, mother)

//------desestruturacao em funcoes Ex:-------
//primeiro metodo normal:
// function createUser(person) {

//     // funcao recebe paremetro e cria id aleatoria 
//     //math bibli Global//Floor Metodo para arredondar para baixo numero (devolve apenas iteiro)

//     // math.random numero aleatorio entre 0 e 9999
//     const id = Math.floor(Math.random() * 9999)
//     return{
//         id,
//         name: person.name,
//         job: person.job,
//         parents: person.parents
//     }
// }
// //cria variavel luke passando objeto como parametro
// // dessa forma vai criar usuario com os elementos referenciados
// const luke = createUser(person)
// console.log(luke)


// ---- com metodo desestruturacao ---
// dentro dos parametros desestruturamos e indicamo oque queremos pegar do objeto
// com isso a referencia no return onde os atributos sao explicito pode ser removido
function createUser({name, job, parents}) {
    // funcao recebe paremetro e cria id aleatoria 
    //math bibli Global//Floor Metodo para arredondar para baixo numero (devolve apenas iteiro)
    // math.random numero aleatorio entre 0 e 9999
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name,
        job,
        parents
    }
}
//cria variavel luke passando objeto como parametro
// dessa forma vai criar usuario com os elementos referenciados
const luke = createUser(person)

console.log(luke)