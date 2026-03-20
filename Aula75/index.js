// Construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
// __proto__  o proto já vem no sistema javascript e sua função é evitar sobrecarregar construtores de funções repetidas
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
