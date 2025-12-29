// Funções fábrca ( Factory Functions)
// constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome,
        sobrenome,
        
        fala: function(assunto) {
        return `${nome} está ${assunto}.` /*${this.peso}*/;     // para acessar fora da função usa-se this
        },

        altura,
        peso,
        
        get imc(){                                                  // outra forma de fazer uma função gual a linha 6, função "fala"
            const indice = this.peso /(this.altura**2);
            return indice.toFixed(2);
        }
        /*peso:80*/
    };
}

const p1 = criaPessoa('Wolfgang', 'Vinicius', 1.78, 65);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc/* () */);  // o get faz com que mc seja reconhecida como uma string, ao invez de função

