
// Input from the user
let testNumber = prompt('Enter a number. It could be positive, negative or zeros')

// I tried to cast the userPrompt as a integer, if is not possible throw an exception
try {
    testNumber = Number(testNumber)

    // Ternary operator saved on a variable and called after
    const screenResult =
     testNumber > 0 ? alert('Numero positivo') : 
     testNumber < 0 ? alert('Numero negativo') : 
     testNumber === 0 ? alert('Es cero') :

    console.log(screenResult)

} catch (e) {
    alert('Invalid input data')
}
