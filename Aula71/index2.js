// defineProperties


function Produto(nome, preço, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave ou não
        value: estoque,     // valor
        writable: true,    //pode alterar ou não o valor
        configurable: false  // configuravel ou não (EXP: pode ou não deletar a variavel)
    });
    Object.defineProperties(this, {
        nome: {
        enumerable: true,   
        value: estoque,     
        writable: true,   
        configurable: false
        },
        preço: { 
        enumerable: true,   
        value: estoque,     
        writable: true,    
        configurable: false
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
};