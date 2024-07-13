const lodash = require ("lodash") // npm sempre deixa node modules sem especificar o caminho completo tanto 
//no metodo commonjs quanto ES Module.

console.log(lodash.isArray([]))
console.log(lodash.kebabCase("Johnny domingos"))