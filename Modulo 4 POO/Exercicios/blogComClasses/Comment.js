
class Comment {

    constructor(username, content){
        this.username = username
        this.content = content
        this.createdAt = new Date()
        //metodo global tmb possui construtor que cria objeto do tipo Date
    }
}

module.exports = Comment


// const test =  new Comment("joao", "exempplo content")  
// console.log(test)