// Factory functions    / Constructions functions   / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // com isso nenhum objeto criado por essa função pode ser alterado
}

// {} <- this -> this
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);

p2.nome = 'Wolfgnag';
console.log(p2);
