let number = Number(prompt("Introduzca un número entero: ").trim());
let factorial = 1

    // Compruebo primero si la variable es NaN o sino es un entero
    if ((isNaN(number) || !Number.isInteger(number))) {
        alert("Numero introducido no valido")
    } else {
        for(let i = 1; i <= number; i++) {
            factorial *= i
        }

        alert(`Factorial de ${number} = ${factorial}`)
    }