// Funções

//              parametro
//                  |
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
    //return 123456;
    return `Bom dia ${nome}!`;
}   //não precisade ponto e virgula 

//  saudacao('Luiz'); //os () servem para indicar que estasendo executado

const variavel = saudacao('Luiz');  //  retorna a funcao console.log 
console.log(variavel);  //  retorna o comando return