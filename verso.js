function inverter(frase) {
    let vert = ''

    for (let i = frase.length - 1; i >= 0; i--) {
        vert += frase[i];
    }
     return vert;
}

const frase = "OlÁ, MUNDO!"
const vert = inverter(frase)

console.log("String original: " + frase)
console.log("String invertida: " + vert)