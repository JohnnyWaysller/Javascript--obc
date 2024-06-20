const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    //queryselector pega todos elementos da classe .charkey
    //e para ele chama for earch executando uma funcao para cada elemento
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click',function(){
    input.value = ''
    input.focus()
})



input.addEventListener('keydown', function (ev){
    //preventDefault previne comportamento padrao do evento
 ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
        //se vetor possuir a tecla pressionada no evento
        //é adicionado no campo input o valor pressionado
    }
    if(ev.key==='Backspace'){
        input.value = input.value.slice(0, -1)
        //se precionado backspace ele remove ultimo caracter do valor input
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value= 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
    }
    
    document.getElementById('copyToClipboard').addEventListener('click', function(ev){
        const button = ev.currentTarget
        if (button.innerText === 'Copy'){
            button.innerText = 'Copied!'
            button.classList.add('success')
            //funcionalidade do navegador chama clip board (area de transferencia) escreve texto
            //valor input do resultado
            navigator.clipboard.writeText(resultInput.value)
        }else{
            button.innerText = 'Copy'
            button.classList.remove('success')
        }
        
    })

    document.getElementById('themeSwitcher').addEventListener('click', function(){
        //main é elemento html usando data-propety, foi selecionado com queryselector
        //apos variavel selecionada main, ela chama dataset que busca(data-theme no html)
        //verifica valor de data-theme 
        //assim como  main root (elemento definido CSS) é buscado com queryselector 
        //atravéz do root é chamado style setProperty usada para definir o valor de uma propriedade
        // de estilo em um objeto CSSStyleDeclaration
        //ex: element.style.setProperty(propertyName, value, priority);
        //com isso os valores dar variaveis definidades no css sao mudadas dinamicamente
       if(main.dataset.theme === 'dark') {
            root.style.setProperty('--bg-color', '#f1f5f9')
            root.style.setProperty('--border-color', '#aaa')
            root.style.setProperty('--font-color', '#212529')
            root.style.setProperty('--primary-color', '#26834a')
            main.dataset.theme = 'light'
       }else{
             root.style.setProperty('--bg-color', '#212529')
            root.style.setProperty('--border-color', '#666')
            root.style.setProperty('--font-color', '#f1f5f9')
            root.style.setProperty('--primary-color', '#4dff91')
            main.dataset.theme = 'dark'
       }
    })

 
        


