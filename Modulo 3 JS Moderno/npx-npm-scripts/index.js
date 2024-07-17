//3. Com um módulo instalado podemos executá-lo pela linha de comando utilizando o npx:   
//Obs.: Repare na pasta node_modules/.bin/hello-world-npm que o arquivo que nós estamos executando é o principal do módulo.
//
//npx hello-world-npm
//
//lém de executar um módulo com o npx, podemos criar scripts de atalho para qualquer comando npx, ou mesmo outros tipos de comando
//só precisamos incluir o script no arquivo “package.json”.
//
//// package.json

// ...
//	"scripts": {
//        "hello": "hello-world-npm"
//       },
//    // ...

// E então execute o script com o comando “npm run“:
//    npm run hello
//
// package.json

// // ... RODAR PROPRIO ARQUIVO INDEX CONFIGURANDO COMANDO
// "scripts": {
//     "hello": "hello-world-npm",
//     "start": "node index.js"
//   },
//
//      npm start
// // ...