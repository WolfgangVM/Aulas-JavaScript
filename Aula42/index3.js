/*
Escreva uma função que recebe um numero e retorne o seguine:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz 
Número NÃO é divisíivel por 3 e 5 = Retorna o próprio número
checar se o número é realmentte um número
Use a função com números de 0 a 100 
*/

/*
function number(numero){
    const valor = Number(numero);
    if (valor >= 0 && valor <= 100){
        if (valor % 3 === 0 && valor % 5 === 0){
            return 'Número é divisível por 3 e 5 = FizzBuzz';
        }else if (valor % 3 === 0){
            return 'Número é divisível por 3 = Fizz';
        }else if (valor % 5 === 0){
            return 'Número é divisível por 5 = Buzz';
        }else {
            return `Número NÃO é divisíivel por 3 e 5 = ${valor}`;
        }
    }else{
        return 'O valor deve ser de 0 a 100';
    }
}
console.log(number(55));
*/

/* resolução*/

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++){
console.log(i, fizzBuzz(i));
}

