let primeiros = [1,2,3]

let segundos = [...primeiros,4,5,6]

console.log('Array completo', segundos)

let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "CEO"
}

let atributos = {
    ...pessoa,
    status: "ativo",
    cidade: 'Uberlândia'
}

console.log('Pessoa', atributos)

function novoUser(info){
    console.log(info)

    let data = {
        ...info,
        status: 'ativo',
        inicio: "20/03/2023",
        codigo: "1234"
    }

    console.log('NovoUser', data)
}

novoUser({nome: "jose", sobrenome: "Silva", cargo: "Dev"})