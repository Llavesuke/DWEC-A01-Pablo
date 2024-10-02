
// Condicion = numero entero valido
let condicion = true

while (condicion) {
    let number = parseInt(prompt("Introduzca un numero entero para abandonar el purgatorio"))

    if (number > 0) {
        condicion = false
    } else {
        alert("Numero introducido no valido")
        continue
    }
}