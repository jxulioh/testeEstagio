function pertenceAFibonacci(numero) {
    let a = 0
    let b = 1

    while (a <= numero) {
        if (a === numero) {
            return true
        }
        const temp = a
        a = b;
        b = temp + b
    }

    return false
}

const numeroInformado = parseInt(94) // Informe o numero desejado

if (pertenceAFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`)
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`)
}

