let spaceship = {

    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registernave() {

    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da nave (km/s)"))

}

function acelerate() {

    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
      alert( "VELOCIDADE MÁXIMA ULTRAPSSADA!") +
      "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
      "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s"  
    }
}

function stop() {
    alert( "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + 
    spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0

}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {

            case "1" :
                acelerate()
                break
            case "2" : 
            stop()
            break
            default:
                alert("Opção Inválida")
        }
    }while (chosenOption != "2")
}

registernave()
showMenu()