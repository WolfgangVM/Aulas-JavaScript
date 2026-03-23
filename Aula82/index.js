class Pessoa {
    Constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    Comer(){
        console.log(`${this.nome} está comendo.`)

    }

    beber(){
        console.log(`${this.nome} está bebendo.`)

    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Wolfgang', 'Manzato');
const p2 = new Pessoa2('Luiz', 'Mranda');
console.log(p1);
console.log(p2);