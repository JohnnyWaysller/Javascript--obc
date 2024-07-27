import { Component } from "./Component.js"

export class Label extends Component {
    constructor(text, parent, options){
        super('label', parent, Object.assign({}, options, {textContent: text}))
        //primeiro parametri é string para ser criada a label com create do (construtor Pai chamado pelo super)
        //object.assign cria um objeto vazio como destino, para incluir propriedades de 
        //outros objetos, no caso objetos passado pelo usuario(options) e por ultimo
        //objeto criado com propriedade {textContent: text } sendo text o texto passado
        //pelo usuario
    }
}