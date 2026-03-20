// defineProperty 

function Produto(nome, preço, estoque){
    this.nome = nome;
    this.preco = this.preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);

