// mias sobre var, let e const
const verdadeira = true;
let nome = 'Nome';
var nome1 = 'Nome1';
console.log(nome, nome1);
//let tem escopo de bloco {...bloco}
// var só tem escopo de função
var nome1 = 'Maria';
console.log(nome, nome1);
if (verdadeira){
    let nome = 'João';  //criando
    console.log(nome, nome1);

    if (verdadeira){
        let nome = 'Outra coisa';
        console.log('Ok');
        var nome1 = 'Wolf';
    console.log(nome, nome1);

    }
}
console.log(nome, nome1); // apenas var foi alterado no final

/*

function falaOi(){
    var sobrenome = 'Manzato';

    if (verdadeira){
        console.log(sobrenome);
    }

}

falaOi();
*/

console.log(sobrenome);// identifica que existe mas não consegue retornar o valor
console.log(nome2);//não reconhece
var sobrenome = 'Manzato'; // resulta como undefined
let nome2 = 'Wolf'; 