const path = require ('path') //importamos  um modulo do proprio node para ajudar no caminho configurado do objeto abaixo

module.exports = {
    entry:{
        main: './src/index.js',           //pasta padrao e atribuicao de nome para arquivo
        maisumarquivo: './src/maisumarquivo.js' // configurando mais de 1 arq no ponto de entrada (necessario acrescentar em filename)
    },
    mode: 'development',    // modo de desenvolvimento (isso deixa o codigo geramo mais entendivel enquanto desenvolvemos)
    output: { // config de saida para arquivo
        //normalmente é necessario o caminho absoluto em path para especificar saida porem abaixo o path utiliza metodo do node
        path: path.resolve(__dirname, 'public'), //(dirname caminho completo p/ diretorio atual)
        //segundo argumento (adiciona caminho no final)
        filename: '[name].bundle.min.js' //(muda nome do arquivo com arquivo minificado )
    }
}