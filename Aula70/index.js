/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
*/


const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 0;
pessoa1.falarNome = function() {
    /*console.log*/ return (`${this.nome} está falando seu nome`);
};

/*const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa1, pessoa2);
delete pessoa1.nome;
console.log(pessoa1, pessoa2);
*/

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(chave, pessoa1[chave]);
}
console.log(' ');
console.log(' ');

// Factory functions    / Constructions functions   / Classes

function CriaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { // a função funciona normalmente sem o get
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = CriaPessoa('Wolfgang', 'Manzato');
console.log(p1.nomeCompleto); // caso não usae o get precisa ter o parentes no final  "console.log(p1.nomeCompleto());"