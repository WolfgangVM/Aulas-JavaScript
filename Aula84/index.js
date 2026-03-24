class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }
   desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {    // não recomendavel usar muitas, pois torna dificil encontrar erros/bugs
    constructor(nome, cor, modelo){
        super(nome);    // quando usado o extends é preciso usar o super para extender algo que já existe antes de adcionar 
        this.cor = cor; //adições pertencem apenas a esta.
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){        // metodo criado apenas para a classe tablet
        console.log('Você alterou o modo ligar');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Ipad', true);
console.log(t1);
t1.ligar();