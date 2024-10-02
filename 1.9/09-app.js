
let edad = prompt("Edad: ")
let nacionalidad = prompt("Nacionalidad: ")

edad = parseInt(edad)
    
if (edad >= 18 && nacionalidad.toLowerCase() === "española" ) {
    console.log("Puedes votar compatriota")
} else {
    console.log("Fuera de aqui YA")
}
