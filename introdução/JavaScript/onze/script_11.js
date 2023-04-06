let lista = ["Jose", "Maria", "Lucas"]

lista.map((item, index) => {
    console.log(`passando: ${item} na posição ${index}`)
})


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let total = numeros.reduce((acumulador, numero, index, original) => {
    console.log(`Acumulador: ${acumulador}, numero: ${numero}, index: ${index}, original: ${original}`)

    return acumulador += numero
})

console.log("Total: " + total)


let listagem = [2, 5, "jose", 3, "Lucas"]

let busca = listagem.find((item) => {

    return item === "jose"
})

let busca2 = listagem.find((item) => {

    return item === "Jose"
})

let busca3 = listagem.find((item) => {
    if(item === 'jose'){
        return 'encontrou'
    }
})

console.log("Find:", busca)

console.log("Find2:", busca2)

console.log("Find3:", busca3)



let palavras = ["ana", "ricardo", "lucas", "matheus", "luis"]

let resultado = palavras.filter((item) => {
    return item.length <= 5
})

console.log('Filter:', resultado)