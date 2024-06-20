
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder =''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTech = document.getElementById('addTechBtn') //pega botao no html
const form = document.getElementById('devForm') //pega todo o form html
const developers = []
let inputRow = 0

addTechBtn.addEventListener('click',function (ev){

    const stackInputs = document.getElementById('stackInputs') //pega elemento Ul na paginaHtml

    const newRow = document.createElement('li') // cria Item List
    const rowIndex = inputRow // variavel contador
    inputRow++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow' // todas linhas estao recebendo class inputrow

    const techNameLabel = createLabel ('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-'+ rowIndex, null, 'techName')


    const expLabel = createLabel('experiencia: ')


    const id1 = 'expRadio-' + rowIndex + '.1' // variavel para ajudar atribuir parametro id
    const expRadio1 = createInput (id1, '0-2 anos', 'techExp-'+ rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos ', id1)


    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput (id2, '3-4 anos', 'techExp-'+ rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos ', id2)


    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput (id3, '5+ anos', 'techExp-'+ rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos ', id3)


    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function (){
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev){
    ev.preventDefault()

    const fullnameinput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow') // pega todas as linhas pela classe (colecao(nodelist))

    let technologies = []
    inputRows.forEach(function(row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push ({name: techName, exp: techExp})
    })
    const newDev = {fullname: fullnameinput.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso')

    fullnameinput.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })
    console.log(developers)
})