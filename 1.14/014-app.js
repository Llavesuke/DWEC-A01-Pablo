

let number = Number(prompt("Introduzca un número entero: ").trim());

if (isNaN(number) || !Number.isInteger(number)) {
    alert("Error: No has introducido un número válido");
} else if (number % 2 === 0) {
    alert("Número introducido => Par");
} else {
    alert("Número introducido => Impar");
}
