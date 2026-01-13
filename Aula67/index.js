// reduce - reduzindo o array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor/*, indice, array*/) {
acumulador.push(valor * 2);                     // dobra todos os valores da array
// if (valor% 2 === 0) acumulador.push(valor);  // retorna uma array com os nummeros pares
//  acumulador += valor;                        // soma os valores
//   console.log(acumulador, valor);        // mostra cada iteração
    return acumulador;
}, []/*0*/);    // o zero serve par que o acumulador inicie no zero e não noo primeiro valor do array, no caso 5.

//console.log(total);



// Retorne a pessoa mais velha
const pessoas =[
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);