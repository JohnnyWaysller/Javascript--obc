const path = require('path')


module.exports = {
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        // compress: true,  //comprime arquivo g.zip
        // port: 8000 // modifica porta para rodar o server
    },
    entry:{
        exercicio: "./src/exerc.js"
    },
    mode: 'production',
    output:{ 
        filename:'[name].min.js',
    },
    module:{
        rules:[{
            test:/\.css$/,
            use: ['style-loader','css-loader']
        },{ 
            test: /\.js$/,
            use:['babel-loader']
        }]
    }

}