const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));  // permite ver as propriedades
Object.defineProperty(produto, 'nome', {
    writable: false,    // alterando
    configurable: false // alterando
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));  // conferindo mudanças
delete produto.nome;    // testando se é possivel mudar após o bloqueio de mudanças
console.log(produto);   // vendo o resultado, confirmando que foi impossivel apagar