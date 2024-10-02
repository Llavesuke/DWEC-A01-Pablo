

// Convierto a numero el valor introducido por el usuari
let number = Number(prompt("Introduzca un número entero: ").trim());

// Compruebo primero si la variable es NaN o sino es un entero
if (isNaN(number) || !Number.isInteger(number)) {
    alert("Error: No has introducido un número válido");
} else if (number % 2 === 0) { // Comprueba si es par
    alert("Número introducido => Par");
} else {
    alert("Número introducido => Impar");
}


// Si introducimos Rerto nos devolvera el mensaje de Error: No has introducido un número válido ya que no es un entero
// Introduciendo 16 nos devolvera el mensaje de Número introducido => Par
// Introduciendo 3 nos devolvera Número introducido => Impar

/*
El comportamiento del programa es el esperado y esta preparado para controlar los errores
*/

