let transactions = [] //armazenar as transações

//criação de um container para os dados da transação e o nome
function createTransactionContainer(id){
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}
function createTransactionTitle(name){
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}
//cria um elemento para o valor da transação
function createTransactionAmount(amount){
    const span = document.createElement('span')
  span.classList.add('transaction-amount')
  //API de internacionalização do navegador para formatar valores numéricos em moedas
  // através do Intl.NumberFormat(). Iremos criar um span para o valor da transação e
  // formatá-lo para a moeda brasileira (BRL)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })
  const formatedAmount = formater.format(amount)
  if (amount > 0) {
    span.textContent = `${formatedAmount} C`
    span.classList.add('credit')
  } else {
    span.textContent = `${formatedAmount} D`
    span.classList.add('debit')
  }
  return span
}

//função que renderiza uma transação na tela usando funções específicas para criação de cada elemento
function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)
  
    document.querySelector('#transactions').append(container)
    container.append(title, amount, editBtn, deleteBtn)
  }

// fazer a requisição GET que obtém todas as transações do backend
  async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
  }

//funcao para calcular os saldos 
  function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
      compactDisplay: 'long',
      currency: 'BRL',
      style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
  }

//função setup() que será responsável por cuidar do carregamento inicial da página,
// obtendo as transações, renderizando-as na tela e exibindo o saldo
  async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
  }
  document.addEventListener('DOMContentLoaded', setup)

//fazer a requisição POST e renderizar a transação devolvida na resposta:
async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const amount = parseFloat(document.querySelector('#amount').value)

    if(id){
        const response = await fetch(`http://localhost:3000/transactions/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ name, amount }),
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            const transaction = await response.json()
            //verifica no array se existe elemento com id inserido no campo value acima dentro do array
            const indexToRemove = transactions.findIndex((t) => t.id === id)
            //apos findIndex o indice fica na variavel indexToRemove
            //é achamado array e removido esse indice e colocado o novo(retornado pela resposta da requisicao)
            transactions.splice(indexToRemove, 1, transaction)
            document.querySelector(`#transaction-${id}`).remove()
            renderTransaction(transaction)
    }else{
        const response = await fetch('http://localhost:3000/transactions', {
          method: 'POST',
          body: JSON.stringify({ name, amount }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }
    ev.target.reset()
    updateBalance()
  }
  document.querySelector('form').addEventListener('submit', saveTransaction)

//Para realizar a edição de uma transação vamos ter um botão na lista de transações 
//que carregará os dados dela para o formulário onde poderão ser editadas e enviadas
  function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
      document.querySelector('#id').value = transaction.id
      document.querySelector('#name').value = transaction.name
      document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
  }
  function createDeleteTransactionBtn(id){
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () =>{
        await fetch(`http://localhost:3000/transactions/${id}`, {
          method: 'DELETE'  
        })
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
  }