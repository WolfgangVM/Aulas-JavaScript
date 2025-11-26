//Arrays (básico)

// por questão de boas praticas cada array deve ter um tipo de dado

//ex.:               0      1         2    3   4     5
//const alunos = ['Luiz', 'Maria', 'João', 1, true, null];      conforme notado o javascript não impede que aja varios tipos de dados na mesma lista
const alunos = ['Luiz', 'Maria', 'João'];                        // porem fazer isso torna a lista confusa
                                                           
console.log(alunos);                                       
console.log(alunos[0]); //altera
console.log(alunos[2]); // adiciona, precisa saber o taamanho da array

alunos[0] = 'Eduardo';
//alunos[3] = 'Luiza';    // para usar esse método é necessario saber como esta a array para não substituir aao inves de adicionar.
//alunos[alunos.length] = 'Luiza'; // em alunos pega otamanho de alunos para adicionar, sem precisar saber o tamanho da array
//alunos[alunos.length] = 'Fábio'; 
//alunos[alunos.length] = 'Luana';

alunos.push('Otávio'); //adiciona no final da array
alunos.push('Luiza');
//alunos.push('Fábio');

alunos.unshift('Luana');    //adiciona na [0] e arrasta os demais para a direita
alunos.unshift('Fábio');



console.log(alunos);

//remover

//remover do fim
//alunos.pop();
const removido = alunos.pop();  //salva o elemento removido do fim

//remove do começo
alunos.shift();     

//resultado
console.log(removido);
console.log(alunos);

//deletar
//delete alunos[2]; //não muda o local, fica com um espaço em vasio
//console.log(alunos);

console.log(alunos.slice(0, -2)); //mostra do inicio até o final menos dois

console.log(typeof alunos); //retorna que a array é um objeto

console.log(alunos instanceof Array); //verifica se é uma array

//Obs.: geralmente não se usa o unshift e sim o push por motivvos de desempenho


/**
 * Const com valores mutáveis

const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

    const nome = 'luiz';
    nome = 'joão'; // Erro: Assignment to constant variable.

Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis,
 como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, 
 como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente.
 Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição,
 o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante,
 porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto,
  não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória),
   apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. 
A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

    const array = [1, 2, 3, 4, 5];
    array.pop();
    array[0] = 1024;
    console.log(array); // [ 1024, 2, 3, 4 ]
     

Isso NÃO pode

    const array = [1, 2, 3, 4, 5];
    array = 'Legal'; // Assignment to constant variable.
 */