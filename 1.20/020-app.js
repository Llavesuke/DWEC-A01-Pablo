function invertirCadena(string){

    let cadenaSeparada = string.toLowerCase().replace(/ /g, "").split("")
    let cadenaInvertida = cadenaSeparada.reverse()
    let cadenaReunida = cadenaInvertida.join("")

    return cadenaReunida
}

let textoUsuario = prompt("Introduzca una frase y yo DarkMasterGringo96 descubrire si es palindroma o NO: ").trim()

let cadenaInvertida = invertirCadena(textoUsuario)

if (cadenaInvertida === textoUsuario.toLowerCase().replace(/ /g, "")){
    alert("La cadena es palíndroma")
} else {
    alert("Pues no es palindroma")
}
