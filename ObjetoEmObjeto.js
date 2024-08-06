const cliente = {
    nome: "Robson",
    idade: 36,
    email: "Robso@gmail.com",
    telefone: ["41 99523-0501", "41 99002-8969"]
}


console.log(cliente)

cliente.endereco = [{
    rua: "Sete de setembro",
    numero: 924,
    apartamento: true,
    complemento: "ap 25"
},
]
console.log(cliente)

cliente.endereco.push(
    {
        rua: "24 de maio",
        numero: 726,
        apartamento: false,
    }
)

console.log("====== 3 ======")
console.log(cliente)


console.log("====== 4 ======")
const listaEndAps = cliente.endereco.filter((endereco) => endereco.apartamento === true)

console.log(listaEndAps)


