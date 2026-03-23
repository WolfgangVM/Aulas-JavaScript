const _velocdade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocdade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocdade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocdade];
    }

    acelerar(){
        if(this[_velocdade] >= 100) return;
        this[_velocdade]++;
    }

    freiar(){
        if(this[_velocdade] <= 0) return;
        this[_velocdade]--;
    }
}

const c1 = new Carro('Fusca');  

for (let i =0; i <= 200; i++) {
    c1.acelerar();
}
c1.velocidade = 99; // usando o setter
console.log(c1.velocidade); // usanfo o getter
