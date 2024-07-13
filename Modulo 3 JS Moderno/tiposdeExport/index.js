import { inline as i} from "./inline.js" // nao é possivel renomear inline sem (as)

import defaultInline from "./inline.js" // pode renomear na importacao (apenas 1 por arquivo)

import {group} from "./non-inline.js"// foi exportado separado no arq origem

import exportDefault from "./non-inline.js" //mesmo caso default porem separado no arq origem

i() // anteriormente era: inline() (foi importado com apelido as i)
defaultInline()

group()
exportDefault() // pode ser apelidado no import e chamada da funcao

// import exportDefault, { group, a, b} from "./non-inline.js" 
// é possivel importar os 2 tipos de export na mesma linha Ex: acima