
class Product{
        constructor(name,description,price){
            this.name = name
            this.description = description
            this.price = price
            this.inStock = 0
        }
        addToStock(quantity){
            this.inStock += quantity
        }
        calculateDiscount(percentDiscont){
            let discont = this.price * (percentDiscont / 100)
            console.log(`Preço com Desconto ${this.price - discont} Reais `)
        }
}

const sapato = new Product("nike","Tenis Sport", 300)
sapato.addToStock(3)
sapato.calculateDiscount(10)
console.log(sapato.name)