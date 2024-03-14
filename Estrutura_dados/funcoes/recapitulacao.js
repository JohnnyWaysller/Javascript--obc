// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
    }
    
    function parametrosDoJeitoCerto(usuario) {
    // ...
    }
    
    // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
    parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
    
    const dadosDoUsuario = {           //jeito correto de mandar para dados funcao certa
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
    }
    parametrosDoJeitoCerto(dadosDoUsuario)




//--- Retorno é a saída da função----
// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
  }
  const resultado = calcularMedia(5, 9)
  console.log(resultado)


//---- Para dizer qual é a saída de uma função usamos o return----
function criarProduto(nome, preco) {
    const produto = { 
    nome, 
    preco, 
    estoque: 1 }
    return produto
  }
  const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
  console.log(notebook)


 //---- Uma função só pode retornar uma vez------
// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "..."
  return texto
  texto = "Olá, mundo!"
  console.log(texto)
}
console.log(olaMundo())