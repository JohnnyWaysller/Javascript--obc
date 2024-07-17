const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

    entry: {
        index: './src/index.js'

    },
    mode: 'development',
    module:{        //loader transforma mudulo
        rules:[{        //com regras dizemos os loaders que webpack vai utilizar
            test: /\.css$/, //(em quais arquivos vai usar loader) //o webpack faz test e definimos as regras com expressao regulares (no exemplo ele busca pela extensao do arquivo) $cifrao indica que ele procura extensao pelo final do arquivo.
                // a contra barra \ serve para remover funcao do ponto como no caso de \n (se remove \ o n vira caracter)
                //dessa forma podemos usar tambem outras extensoes \.js$ \.sass$
            //considera para revisao apenas sob utilizar loader-> // use: ['style-loader', 'css-loader']//(qual loader vai usar nesses arquivos) // loader instalados com npm
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin() 
    ] // utilizamos essa plugin junto com regras do use (substituimo o ('style-loader') para colocar o loader
    // do proprio plugin (para aplicar comportamento de separar arquivos css ))
}