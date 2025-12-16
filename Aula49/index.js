// As várias maneiras de declarar funções em JavaScript

// declaração de função (function hoisting)

falaOi();                   // isso significa que o JavaScript le a função primeiro, independente da ordem em que esá no código
function falaOi(){
    console.log('Oie');
}
falaOi();


// first-class objects (Objetos de primeira classe)
// function expression      
                            //caso queira dar um nome
const souUmDado = function /*nomeDaFuncao*/() {  // define uma variavel como uma função
    console.log('Sou um dado.');
}
function executaFuncao(funcao) {    // define uma função que recebe funções
    console.log('Vou executar a função a baixo:');
    funcao();
}
executaFuncao(souUmDado);   // uma função que executa outra função

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//  Dentro de um objeto
/*
const obj = {
    falar: function () {
        console.log('estou falando...');
    }
}*/
// outro método
const obj = {
    falar() {   // não precisa especificar que é uma função
        console.log('estou falando...');
    }
}

obj.falar();