class Vehicle {
    move(){
        console.log(`O veiculo esta se movendo`)
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro está se movendo")
    }
}

class Ship extends Vehicle{
    move(){
        console.log("O navio está navegando")
    }
}
class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronave está voando. á ${speed}Km/h.`)
    }
}
//cada estancia criada de sua Classe filha, possui mesmo metodo Move(), porem cada metodo
//move() está definido de uma forma diferente em sua respectivas classes
//com isso, por mais que a instancia de filho chame o (mesmo)metodo de Pai esse metodo vai responder
//de uma forma diferente para cada classe

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(80)

const start = (vehicle) => {
    console.log("Iniciando um veiculo")
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)