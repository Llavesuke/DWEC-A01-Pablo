
let i = 0
let contador = 0

while (i <= 5) {
    let number = Number(prompt("Introduzca un número entero: ").trim());

    // Compruebo primero si la variable es NaN o sino es un entero
    if (isNaN(number) || !Number.isInteger(number)) {
        continue
    } else if (number >= 18){
        contador++
    }
    i++
}

alert(`Numeros introducidos mayores de 18 => ${contador}`)