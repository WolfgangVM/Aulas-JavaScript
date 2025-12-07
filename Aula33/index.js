// Atribuição via destruturação(Objetos)

const pessoa = {
    nome: 'Wolfgang',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
console.log(pessoa);

/*const nome = pessoa.nome;
console.log(nome);*/

// Atrtibuição via desesruturação
const { nome, sobrenome, endereco:{rua, numero} } = pessoa;// no endereço pego rua e numero e não o indereço ineiro
console.log(nome, sobrenome, rua);

const{idade, ...resto} = pessoa;// resto udo que não peguei, só peguei idade e os damais foram para resto
console.log(resto);