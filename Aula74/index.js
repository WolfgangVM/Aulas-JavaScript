// Métodos úteis para objetos

const produto = { nome: 'Produto', preco: 1.8 };
Object.freeze(produto); // congela para não poder ser alterado posteriormente.
const caneca = Object.assign({}, produto, {material: 'porcelana'}); //cria um novo objeto ao inves de apenas direcionar para o mesmo lugar
// a vantagem é poder adicionar dentro do proprio objeto diretamente.
// const caneca = {...produto}; // tambem pode ser usado
// const caneca = { nome: produto.nome, preco: produto.preco};  // método mais manual, vantagem poder escolher o que quer copiar
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
console.log(Object.keys(produto)); // mostra o que tem no objeto
