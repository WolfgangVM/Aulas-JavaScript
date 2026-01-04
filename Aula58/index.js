//Funções construtoras (constructor functions)

//exemplo
function Pessoa(nome, sobrenome) {
    // privados, não estão disponivel no método
    const ID = 1234566;
    const metodoInterno = function(){};

    // atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    // ou utilizando uma função
    this.metodo = function() {

        console.log( this.nome + ': sou um método');

    };
}

const p1 = new Pessoa('Wolfgang', 'Manzato');
const p2 = new Pessoa('Vinicius', 'Manzato');

/*  sem o uso da função
console.log(p1.nome);
console.log(p2.nome);

*/

p1.metodo();
p2.metodo();