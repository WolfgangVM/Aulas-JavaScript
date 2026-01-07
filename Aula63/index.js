// Método Splice

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// simulando 

// pop
console.log('Array inicial :', nomes);
const removidos = nomes.splice(4, 1);       
console.log('array resultante após a remoção :', nomes);
console.log('O que foi removido :', removidos);

// push
nomes.splice(4, 0, 'Luiz');
console.log(nomes);

// pop e push
nomes.splice(nomes.length, 1, 'Wolfgang');
console.log(nomes);

