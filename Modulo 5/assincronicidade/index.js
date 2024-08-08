function step02(){
    console.log("Passo 02")
}

console.log("Passo 01")
step02()
console.log("Passo 03")

console.log("Passo 04")
//set timeout roda codigo de forma assincrona e nao trava a execucao
setTimeout(()=>{
    console.log("Passo 05")
}, 2000)
console.log('Passo 06')