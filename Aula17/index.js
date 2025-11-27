// Objetos (basico)

//      EXP 1:
/*
const pessoa1 = {
    nome: 'Wolf',
    sobrenome: 'Manz',
    idade: 30
};
*/

//      EXP: 2:

//permite criar rapidamente varios objetos que recebem nome, sobrenome e idade
/*
function criaPessoa (nome, sobrenome, idade){       //  função que cria objeto
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Vinicius', 20); //  finciona da mesma forma que o exemplo 1

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

*/

//      EXP 3:

function criaPessoa (nome, sobrenome, idade){       //  função que cria objeto
    return {nome, sobrenome, idade};                // modo resumido, funciona igual ao exemplo 2
}
const pessoa1 = criaPessoa('Luiz', 'Vinicius', 20); //  finciona da mesma forma que o exemplo 1

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Wolf',
    idade: 35,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi ...`);
        console.log(`À minha idade autal é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();