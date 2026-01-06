// revisão do basico de arrays
// valores por referencia
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
console.log(nomes); // remove do final
delete nomes[2];
console.log(nomes); // shift remove do começo
//const novo = nomes;   // ambos são alterados, pois nomes e novo apontam para a mesma array, ou seja, mesma referencia
const novo = [...nomes];    // neste caso é feito uma copia, são duas arrays diferentes a partir deste ponto
 // novo.pop();
const removido = nomes.pop();   // remove o ultimo elemento da array e faz uma copia para a nova variavel removido
console.log(nomes); 
console.log(novo);
console.log(removido);
console.log(nomes); 
novo.push('Laura'); // adiciona no final
novo.unshift('Luiz');   // adiciona no inicio e empurra para o final os demais
novo.unshift('Wallace');
console.log(novo); 
const novo1 = novo.slice(0, 3); // pega de tal a tal
const novo2 = novo.slice(2, -1);// caso seja negativo, o JS começa a excluir do ultimo e vai em direção ao primeiro
const novo3 = novo.slice(1, -3);
console.log(novo1); 
console.log(novo2); 
console.log(novo3); 

//const nome = 'Wolfgang Vinicius Manzato';
//const meuNome = nome.split(' ');    // separa por espaço conforme especificado
const nome = [ 'Wolfgang', 'Vinicius', 'Manzato' ];
meuNome = nome.join(' ');   // transforma uma array em uma string
console.log(meuNome);

