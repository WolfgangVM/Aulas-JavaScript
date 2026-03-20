// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );

};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new ContaCorrente(11, 22, 0, 100);
console.log(cc);
cc.depositar(10);
cc.sacar(100);
cc.sacar(1);

const cp = new CP(12, 33, 0);
console.log(cp);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
