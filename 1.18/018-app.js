let number = Number(prompt("Introduzca un número entero: ").trim());
let sumaDigitos = 0

    // Compruebo primero si la variable es NaN o sino es un entero
    if ((isNaN(number) || !Number.isInteger(number))) {
        alert("Numero introducido no valido")
    } else if (number.toString().length > 1){
            number = number.toString()

            for(let i = 0; i < number.length ; i++){
                sumaDigitos += parseInt(number[i])
            }
            alert(`Suma de los digitos => ${sumaDigitos}`)

    } else {
        alert("Debe introducir un numero mas grande")
    }