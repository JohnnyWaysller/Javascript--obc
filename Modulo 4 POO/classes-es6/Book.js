class Book {
    constructor(title){
        this.title = title
        this.published = false
    }
   publish(){
    this.published = true
   }

}

const eragon = new Book("Eragon")
const eldest = new Book("SrAneis")

eragon.publish()


console.log(eragon)
console.log(eldest)