export function inline(){ // sintax de exportacao permite renomear apenas com apelido
    console.log('Export nomeado inline')
}

export default function defaultInline(){ //sintax de export permite renomear (apenas 1 por arquivo) // pode ser uma funcao anonima
    console.log('Export default inline')
}