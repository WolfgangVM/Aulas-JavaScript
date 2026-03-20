// defineProperty 

function Produto(nome, preço, estoque){
    this.nome = nome;
    this.preco = this.preco;
 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave ou não
        value: estoque,     // valor
        writable: true,    //pode alterar ou não o valor
        configurable: false  // configuravel ou não (EXP: pode ou não deletar a variavel)
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome);
console.log(Object.keys(p1));
