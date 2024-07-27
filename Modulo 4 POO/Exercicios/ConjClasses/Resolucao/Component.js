export class Component{
    #element = null
    constructor (tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElement(){
        return this.#element
    }

    build(){
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)  //obj Global//copia propriedades de obj origem p obj destino(primeiro parametro é destino)
        return this
        //apos a chamada de build pela instancia
        //retorna a propria instancia
        //assim quando chamamos instancia.build() <- conseguimos continuar chamando os metodos da instancia ex:
        //instancia.build().metodoRender/getElement
    }

    render(){
        if(this.parent instanceof Component){
            //aqui this.parent é outra instancia como nosso parent
            //atraves de this.parent é chamado a propriedade dessa instancia que é #element
            //seria this.parent.#Element (mas usamos metodo getElement para isso)
            this.parent.getElement().append(this.#element)
        }else{
            //através do query selector (a string passada pelo usuario é this.parent), essa 
            //string é referencia de elemento existente na pagina setada com id ou class 
            // entao o query selector pega essa referencia e acha o elemento, depois é
            // chamado append e coloca nosso elemento #Element no elemento buscado
            // pelo query selector (Docdapagina(nossoElemento))
            document.querySelector(this.parent).append(this.#element)
        }
    }
}
