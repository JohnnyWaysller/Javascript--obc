let p1nome, p1atq, p1def
let p2nome, p2atq, p2def
let p1dano = p2dano = 0
let p2vida = p1vida = 300
let defensor = false
let selecao = Boolean(parseInt(prompt(`Qual personagem irá atacar?
\npersonagem 1 -> digite 1\npersonagem 2 -> digite 0`)))

if (selecao) { 

    //incluindo personagem 1
    p1nome = prompt(`Digitee o nome do personagem 1: `)
    p1atq = parseInt(prompt(`Digite qual numero de ATK: `))
    p1def = parseInt(prompt(`Digite qual numero de Defesa: `))

    //incluindo personagem 2
    p2nome = prompt(`Digitee o nome do personagem 2: `)
    p2atq = parseInt(prompt(`Digite qual numero de ATK: `))
    p2def = parseInt(prompt(`Digite qual numero de Defesa:`))
    defensor = Boolean(parseInt(prompt(`Esse personagem possui escudo  1-sim, 0-nao ?`)))

}
else {
    //incluindo personagem 2
    p2nome = prompt(`Digite o nome do personagem 2: `)
    p2atq = parseInt(prompt(`Digite qual numero de ATK: `))
    p2def = parseInt(prompt(`Digite qual numero de Defesa: `))

    //incluindo personagem 1
    p1nome = prompt(`Digite o nome do personagem 1: `)
    p1atq = parseInt(prompt(`Digite qual numero de ATK: `))
    p1def = parseInt(prompt(`Digite qual numero de Defesa: `))
    defensor = Boolean(parseInt(prompt(`Esse personagem possui escudo  1-sim, 0-nao ?`)))
}

if(selecao){
if (p1atq > p2def) {
    if (defensor) {
        p2dano = (p1atq - p2def) / 2
    } else {
        p2dano = p1atq - p2def
    }
}
else {
    p2dano = 0
}
}

else{
if (p2atq > p1def) {
    if (defensor) {
        p1dano = (p2atq - p1def) / 2
    } else {
        p1dano = p2atq - p1def
    }
} else {
    p1dano = 0
}
}
p1vida = p1vida - p1dano
p2vida = p2vida - p2dano

alert(`após o combate o personagem 1 ${p1nome} possui\nvida: ${p1vida}\n ataque:${p1atq}\n defesa: ${p1def}\ndano: ${p1dano}\n\n
 O personagem 2 ${p2nome} possui:\nvida: ${p2vida}\n ataque: ${p2atq}\n defesa: ${p2def}\n dano: ${p2dano}`)







