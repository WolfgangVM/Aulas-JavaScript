const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.keys(produto));

console.log(Object.values(produto));

console.log(Object.entries(produto));
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
};
// outra forma
for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
};

