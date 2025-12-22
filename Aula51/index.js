// Retorno da função

//return = retorna um valor / termina a função

function soma(a, b) {   // se abrir o console do navegador e chamar por soma() 
    return a + b;       // e enserir os valores ira retornar a soma
}

function soma2(a, b){   // exibe o resultado da soma caso a chame junto dos valores
    console.log(a + b);
}
soma2(5, 2);    //chamando e envando os valores para serem somados por soma2
/* neste caso não vai funcionar por faltar umma pagina html
document.addEventListener('click', function(){  //umma função que não precisa de valor e que mmesmo assim
    document.body.style.background = 'red';     // pode ser mito util
});
*/
function criaPesssoa(nome, sobrenome){
    return {nome, sobrenome};
}
const p1 = criaPesssoa('Luiz', 'Otávio');
const p2 = {
    nome: 'Wolfgang',
    sobrenome: 'Manzato'
};
console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(typeof p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

/*
function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}*/
function criaMultiplicacao(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicacao(2);
const triplica = criaMultiplicacao(3);
const quadriplica = criaMultiplicacao(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
