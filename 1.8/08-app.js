

    let edad = prompt("Edad: ")

    edad = parseInt(edad)
    
    if (edad >= 18 && edad <= 25) {
        console.log("Enhorabuena, eres un delincuente juvenil")
    } else if ( edad > 25) {
        console.log("Enhorabuena, eres mayor de edad")
    } else if (edad < 18) {
        console.log("Eres menor")
    } else {
        console.log("Error")
    }
