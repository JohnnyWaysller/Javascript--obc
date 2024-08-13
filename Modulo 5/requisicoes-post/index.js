// Função para renderizar um artigo na página
function renderArticle(articleData) {
    // Cria um elemento <article>
    const article = document.createElement('article')
    // Adiciona a classe 'article' ao elemento criado
    article.classList.add('article')
    // Define o id do elemento <article> com base no id do artigo
    article.id = `article-${articleData.id}`

    // Cria um elemento <h3> para o título do artigo
    const title = document.createElement('h3')
    // Adiciona a classe 'article-title' ao título
    title.classList.add('article-title')
    // Define o texto do título com o valor do artigo
    title.textContent = articleData.title

    // Cria um elemento <div> para o conteúdo do artigo
    const content = document.createElement('div')
    // Adiciona a classe 'article-content' ao conteúdo
    content.classList.add('article-content')
    // Define o conteúdo em HTML com o valor do artigo
    content.innerHTML = articleData.content

    // Cria um elemento <div> para o autor do artigo
    const author = document.createElement('div')
    // Adiciona a classe 'article-author' ao autor
    author.classList.add('article-author')
    // Define o texto do autor com o valor do artigo
    author.textContent = articleData.author

    // Anexa o título, autor e conteúdo ao elemento <article>
    article.append(title, author, content)
    // Anexa o artigo ao elemento <section> com id 'articles'
    document.querySelector('#articles').appendChild(article)
}

// Função para buscar os artigos do servidor e renderizá-los na página
async function fetchArticles() {
    // Faz uma requisição GET para obter os artigos do servidor
    const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
    // Itera sobre cada artigo retornado e o renderiza na página
    articles.forEach(renderArticle)
}

// Aguarda o carregamento completo do DOM antes de buscar e renderizar os artigos
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

// Seleciona o formulário na página
const form = document.querySelector('form')

// Configura o envio dos dados via POST quando o formulário é submetido
form.addEventListener('submit', async (ev) => {
    // Previne o comportamento padrão de recarregar a página ao submeter o formulário
    ev.preventDefault()

    // Cria um objeto com os dados do formulário
    const articleData = {
        title: document.querySelector('#title').value,  // Obtém o valor do campo 'title'
        author: document.querySelector('#author').value,  // Obtém o valor do campo 'author'
        content: document.querySelector('#content').value  // Obtém o valor do campo 'content'
    }

    // Faz uma requisição POST para enviar os dados ao servidor
    const response = await fetch('http://localhost:3000/articles', {
        method: 'POST',  // Define o método como POST
        headers: {
            'Content-Type': 'application/json'  // Define o cabeçalho como JSON
        },
        body: JSON.stringify(articleData)  // Converte o objeto articleData para uma string JSON
    })

    // Espera a resposta do servidor e a converte para JSON
    const savedArticle = await response.json()
    // Reseta o formulário após o envio
    form.reset()
    // Renderiza o novo artigo na página
    renderArticle(savedArticle)

    // Exibe o artigo salvo no console para verificação
    console.log(savedArticle)
})