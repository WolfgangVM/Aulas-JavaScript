// for of

//re-lembrando

 const nome = ['Wolfgang', 'Manzato'];

 //método mais antigo
 // geralmente com iteráveis (array e strings)
 for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
 }
 // for in
 // retorna o indice ou chave(string, array ou objetos)
 console.log('###');
 for (let i in nome){
    console.log(nome[i]);
 }
console.log('###');
//for of
// retorna o valor em si (iteraveis, array ou string)
 for (let valor of nome ){
    console.log(valor);
 }
console.log('###');
 //forEach
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})

console.log('###');
