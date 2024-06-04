console.log(soma(60, 9));
function soma(v1, v2){
    let resultado = 0;
    resultado = v1 + v2;
    return resultado
   
}
console.log(subtração(60, 9));
function subtração(v1, v2){
    let resultado = 0;
    resultado = v1 - v2;
    return resultado
}
console.log(multiplicação(60, 9));
function multiplicação(v1, v2){
    let resultado = 0;
    resultado = v1 * v2;
    return resultado

}
console.log(divisão(60, 9));
function divisão(v1, v2){
    let resultado = 0;
    resultado = v1 / v2;
    return resultado
}

function print(mensagem){
console.log(mensagem)
}
print(soma(20,33));
print ("resultado:" + soma(8,18));
print(soma(multiplicação(5,3), divisão(30, soma(2,3))));

