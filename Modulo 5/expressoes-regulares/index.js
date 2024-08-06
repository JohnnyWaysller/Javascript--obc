function PhoneNumber(phoneNumberString){    //funcao construtora //replace permite substituir parte da string
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "") // espaço em branco \s letras a-sA-Z g(todas) serao substituidas por "" nada.
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0] //eles parte de: + que antecede (\dnumero) {1,3} de 1 á 3 (digitos)
    // o metodo math obtem varias informacoes, porem queremos só string que fica [0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    // (?<=)  positive look behind olha antes: encontra termos que são precedidos por um determinado termo no caso-> numeros que precedem 
    //parentese (
    //foi escapado ( com \(
    // depois qualquer quantidade de numero \d+ e
    // (?=)  positive look ahead olha depois: encontra termos que precedem um determinado termo no caso parensete ) foi usado \)
    //para escapar o parentese )
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
    //pega termo que é precedido \) por outro termo .+ no caso tudo na string a partir de )paranteses até final.
    //   /-g/ substitui todos - por ""
}

console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
console.log(new PhoneNumber('+1 (13) 9 9as476-5830'))