console.log(soma(5,9));
function soma(v1=0, v2=0){
    return v1 + v2;
}

function nomeidade (nome, idade){
    console.log(`nome:${nome} - idade:${idade}`);
}
nomeidade(" Eduardo", " 16")
nomeidade("16", " Eduardo")

console.log(soma(9));
nomeidade("pikademel");

console.log(multiplicação (1358, 86));
function multiplicação(v1=0, v2=0){
    return v1 * v2;
}

multiplicação (soma(3,5), soma(8,7));
multiplicação(5);
