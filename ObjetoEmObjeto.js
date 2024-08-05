const cliente = {
    nome: "Robson",
    idade: 36,
    email: "Robso@gmail.com",
    telefone: ["41 99523-0501", "41 99002-8969"]
}

console.log(cliente)

console.log(cliente.telefone)

console.log(cliente.telefone[1])





cliente.endereco = {
    rua: "Sete de setembro",
    numero: 924,
    apartamento: true,
    complemento:"ap 25"
}

console.log(cliente)

console.log(cliente.endereco)

console.log(cliente.endereço.rua)
