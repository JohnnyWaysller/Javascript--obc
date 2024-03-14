let opcao = ""
do{
        opcao = prompt("Calculadora geometrica\nSelecione a opcao a calcular:\n"+
        "1. Area do triangulo\n"+
        "2. Area do retangulo\n"+
        "3. Area do quadrado\n"+
        "4. Area do Trapezio\n"+
        "5. Area do Circulo\n"+
        "6. Encerrar")

        function triangulo(b,a){
            return (b * a) / 2
        }
        function retangulo(b,a){
            return b*a
        }
        function quadrado(l){
            return retangulo(l,l)
        }
        function trapezio(bm,bm,a){
            return (bm+bm)*a/2
        }
        function circulo(r){
            return pi=3.14*(r*r)
        }
        switch(opcao){

            case "1":
                const baseTriangulo=Number(prompt("Insira valor da Base"))
                const alturaTriangulo=Number(prompt("Insira valor da Altura"))
                alert(triangulo(baseTriangulo,alturaTriangulo))
                break
            case "2":
                const baseRetangulo=Number(prompt("Insira valor da Base"))
                const alturaRetangulo=Number(prompt("Insira valor da Altura"))
                alert(triangulo(baseRetangulo,alturaRetangulo))
                break
            case "3":
                const lado=Number(prompt("Insira valor do Lado"))
                alert(quadrado(lado))
                break
            case "4":   
                const baseMaior=Number(prompt("Insira valor da Base Maior"))
                const baseMenor=Number(prompt("Insira valor da baseMenor"))   
                const altura=Number(prompt("Insira valor da Altura"))       
                alert(trapezio(baseMaior,baseMenor,altura))
                break
            case "5":
                const raio=Number(prompt("Insira valor do raio"))   
                alert(circulo(raio))
                break
            case "6":
                alert("Encerrando o sistema");
                break
            default:
                alert("Opcao inserida inválida")
                
        }
    
}while(opcao!=="6")