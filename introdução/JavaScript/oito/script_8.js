let pessoa = {
    nome: "Mathues",
    sobrenome: "Fraga",
    empresa: "Sujeito Programador",
    cargo: "Programador Fullstack"
}

console.log(pessoa.nome)
console.log(pessoa.cargo)

var sobrenome = 'Luis'

const {nome, cargo, sobrenome: apelido} = pessoa

console.log(nome)
console.log(cargo)
console.log(sobrenome)
console.log(apelido)



let usuarios = [
    "Matheus",
    "Lucas",
    "Kayré"
]

console.log(usuarios)
console.log(usuarios[1])

let { 0: matheus, 2: Kayre} = usuarios

console.log(matheus)
console.log(Kayre)

let [ primeiro, segundo ] = usuarios

console.log(primeiro)
console.log(segundo)
