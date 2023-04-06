function convidados(...nomes){
    console.log("Seja bem vindo todos os convidados", nomes)
}

convidados("Lucas", "Maria", "Matheus")

convidados("Lucas", "Maria", "Matheus", "Ana Carolina", "Luis")




function sorteador(...numeros){
    console.log('numeros', numeros)

    const numero = Math.floor(Math.random() * numeros.length)

    console.log('random', numero, "\nNumero gerado", numeros[numero])


}

sorteador(1,33,56,2,89,0,23,11,78,99)