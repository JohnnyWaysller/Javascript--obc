
function triangulo() {
    const baseTriangulo = Number(prompt("Insira valor da Base"))
    const alturaTriangulo = Number(prompt("Insira valor da Altura"))
    return (baseTriangulo * alturaTriangulo) / 2
}
function retangulo() {
    const baseRetangulo = Number(prompt("Insira valor da Base"))
    const alturaRetangulo = Number(prompt("Insira valor da Altura"))
    return baseRetangulo * alturaRetangulo
}
function quadrado() {
    const l = Number(prompt("Insira valor do Lado"))
    return l * l
}
function trapezio() {
    const bMa = Number(prompt("Insira valor da Base Maior"))
    const bMe = Number(prompt("Insira valor da baseMenor"))
    const a = Number(prompt("Insira valor da Altura"))
    return (bMa + bMe) * a / 2
}
function circulo() {
    const r = Number(prompt("Insira valor do raio"))
    return pi = 3.14 * (r * r)
}
function menu() {
   return prompt("Calculadora geometrica\nSelecione a opcao\ a calcular:\n" +
        "1. Area do triangulo\n" +
        "2. Area do retangulo\n" +
        "3. Area do quadrado\n" +
        "4. Area do Trapezio\n" +
        "5. Area do Circulo\n" +
        "6. Encerrar")
}
let opcao = ""
do{
    opcao=menu()
    
    switch (opcao) {
        case "1":
            alert(triangulo())
            break
        case "2":
            alert(triangulo())
            break
        case "3":
            alert(quadrado())
            break
        case "4":
            alert(trapezio())
            break
        case "5":
            alert(circulo())
            break
        case "6":
            alert("Encerrando o sistema");
            break
        default:
            alert("Opcao inserida inválida")
        }

}while(opcao !== "6")