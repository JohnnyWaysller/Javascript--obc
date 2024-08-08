

const abreviacaoNome = (name) => {
    const names = name.split(' ')
    let lastname = names[names.length-1].toUpperCase() + ", "
    let nick = ""
    for(let i = 0; i<names.length-1; i++){
        nick += names[i][0]+ '.'
    }
   return lastname += nick.toUpperCase()
    

}

console.log(abreviacaoNome("Johnny waysller Domingos teixeira almeida pereira"))