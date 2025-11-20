let nome = 'João'; // variavel, por estar em aspas define como string

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo.');

let variavel; // declaração de variavel sem especificação
console.log(variavel);
/**
 * o console ira exibir um resultado
 * que indica não possuir valor definido.
 */

variavel = 'nome';
console.log(variavel);
/**
 * agora a variavel possui um valor,
 * no caso como string "nome".
 */

/**
 * OBS.: não é possivel usar como variavel 
 * palavras reservadas pelo sistema, e
 * nem pode começar com numero. Deve sempre começar comm 
 * a primeira letra minuscula(boas praticas)
 */

/**
 * REGRAS
 * 1. não podemos usar palavras reservadas
 * 2. variáveis precisam ter nomes significativos
 * 3. não pode começar o nome de uma variavel com nuero
 * 4. variavel não pode conter espaço ou traços
 * 5. utilizamos camelCase
 * 6. Case-sensitive
 * 7. não podemos redeclarar variaáveis com let
 * 8. NÃO UTILIZE VAR, UTILIZE LET.
 */