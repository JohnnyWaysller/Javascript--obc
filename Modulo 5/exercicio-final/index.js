const form = document.querySelector('form')
const edit = document.getElementById('edit')
const del = document.getElementById('del')


document.addEventListener('DOMContentLoaded', () => {
    fetchTransfers()
})

function renderTransfers(dataTransfer){
    const transfer = document.createElement('div')
    transfer.classList.add('item')
    transfer.id = `transfer-${dataTransfer.id}`

    const author = document.createElement('h3')
    author.classList.add('transfer-author')
    author.textContent = dataTransfer.author

    const balance = document.createElement('h3')
    balance.classList.add('tranfer-balance')
    balance.textContent = dataTransfer.balance

    transfer.append(author, balance)
    
    document.querySelector('#transfers').appendChild(transfer)
}

async function fetchTransfers(){
    removeItems()
    const transfers = await fetch("http://localhost:3000/transfers").then( response => response.json())
    transfers.forEach(renderTransfers)
    balanceMove(transfers)
}


function balanceMove(transfer){
    const sumBalance = transfer.reduce( (sum, currentValue) => sum += currentValue.balance, 0)
    const span = document.querySelector('span')
    span.textContent = sumBalance
}

//PUT
edit.addEventListener('click', async (ev)=>{
    ev.preventDefault()
    const registerField = document.getElementById('register').value
    const updateData = {
        author: document.querySelector('#name').value,
        balance: parseFloat(document.querySelector('#valor').value)
    }
    const transfers = await fetch(`http://localhost:3000/transfers/${registerField}`, {
        method: 'PUT', // atualizar
        headers: {
            'Content-Type': 'application/json'  // Define o cabeçalho como JSON
        },
        body: JSON.stringify(updateData)  
        })
        // document.querySelector('#transfers').remove() 
        fetchTransfers()
        // const updatedTransfer = await transfers.json();
        // console.log(updatedTransfer)
        // renderTransfers(updatedTransfer)
 })

 //Delete
 del.addEventListener('click', async (ev)=>{
    ev.preventDefault()
    const registerField = document.getElementById('register').value
    const deleteData = {
        author: document.querySelector('#name').value,
        balance: parseFloat(document.querySelector('#valor').value)
    }
    const transfers = await fetch(`http://localhost:3000/transfers/${registerField}`, {
        method: 'DELETE', // atualizar
        headers: {
            'Content-Type': 'application/json'  // Define o cabeçalho como JSON
        }
        })
        // document.querySelector('#transfers').remove() 
        fetchTransfers()
        // const updatedTransfer = await transfers.json();
        // console.log(updatedTransfer)
        // renderTransfers(updatedTransfer)
 })



//POST
form.addEventListener('submit', async (ev) => {
    // Previne o comportamento padrão de recarregar a página ao submeter o formulário
    ev.preventDefault()
    // Cria um objeto com os dados do formulário
    const dataTransfer = {
        author: document.querySelector('#name').value,
        balance: parseFloat(document.querySelector('#valor').value)
    }
    const response = await fetch('http://localhost:3000/transfers', {
        method: 'POST',  // Define o método como POST
        headers: {
            'Content-Type': 'application/json'  // Define o cabeçalho como JSON
        },
        body: JSON.stringify(dataTransfer)  
    })
    const savedTransfer = await response.json()
    // Reseta o formulário após o envio
    form.reset()
    // Renderiza o noVA TRANSFERENCIA na página
    renderTransfers(savedTransfer)
    fetchTransfers() // repete processo de carregamento de todo array de db.json
    // Exibe A TRANFERENCIA salva no console para verificação
    console.log(savedTransfer)
    
})

function removeItems(){
    const elements = document.querySelectorAll('.item')
    elements.forEach(element => {
        element.remove();
    });
}