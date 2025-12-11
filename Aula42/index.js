// Escreva uma função que recebe 2 numeros e retorna o mmaior deles

function resultadoMaior(primeiro, segundo){
    if (primeiro > segundo) return primeiro;
    return segundo;
}
console.log(resultadoMaior(5, 7));

/* alternativa de resposta, resolução: */

const max =(x, y) => x > y ? x : y;
console.log(max(10, 20));