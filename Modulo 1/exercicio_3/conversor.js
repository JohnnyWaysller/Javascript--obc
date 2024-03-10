const numero = (parseFloat(prompt(`Insira um valor em
em metros: `)))
let valor="";

const escolha = prompt("Para qual medida deseja converter?\n milimetro(mm)\ncentimetro(cm)\ndecimetro(dm)\ndecametro(dam)\nhectometro(hm)\nquilometro(km)")

switch (escolha) {

    case "mm":
        valor = numero * 1000
        alert(`${numero} metros é = ${valor.toFixed(3)}mm`)
        break
    case "cm":
        valor = numero * 100
        alert(`${numero} metros é = ${valor.toFixed(2)}cm`)
        break
    case "dm":
        valor = numero * 10
        alert(`${numero} metros é = ${valor.toFixed(2)}dm`)
        break
    case "dam":
        valor = numero / 10
        alert(`${numero} metros  é = ${valor.toFixed(2)}dam`)
        break
    case "hm":
        valor = numero / 100
        alert(`${numero} metros é = ${valor.toFixed(2)}hm`)
        break
    case "km":
        valor = numero / 1000
        alert(`${numero} metros é = ${valor.toFixed(2)}km`)
        break
    default:
        alert(`entrada invalida`)
}