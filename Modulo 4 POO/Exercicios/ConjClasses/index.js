
class Component{

    #refElement = null

    constructor(entry){
        this.build(entry)
    }
    getElement(){
        return this.#refElement;
        
    }
    build(entry){
        this.newElement=document.createElement(entry)
        this.#refElement=this.newElement
    }
    render(){
        const insertElement = document.getElementById('sec')
        insertElement.append(this.newElement)
    }
}

class Inputcreate extends Component{
    constructor(){
        super("input")
    }
    
}

class Labelcreate extends Component{
    
    constructor(text){
        super("label")
        this.newElement.innerText = text
        // this.newElement.textContent = text
    }
} 



class FormElements extends Component{
    constructor() {
        super('form');
    }
    addChild(component){
        this.newElement.appendChild(component.newElement)
    }
}

const teste = new Labelcreate("Teste Labels")
const newform = new FormElements()
newform.addChild(teste)
// const teste2 = new Inputcreate()

// teste2.render()
// teste.render()
newform.render()
console.log(teste, newform)