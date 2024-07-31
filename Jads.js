const objetoCliente = {
    id: 5,
    nome: "Jads",
    idade: 36,
    cpf: "111.111.111-01"
}

console.log(`Nome: ${objetoCliente}`)
console.log(`Idade: ${objetoCliente[`idade`]}`)
console.log(`Idade: ${objetoCliente[`cpf`]}`)

const chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave) => {
    console.log(`chave: ${chave} valor: ${objetoCliente[chave]})`)
});


