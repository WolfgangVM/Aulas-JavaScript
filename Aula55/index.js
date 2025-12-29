// Funções imediattas ou auto-invocada
// IIFE ->Immediately nvoked function expression

(function(idade, peso, altura) {                   // função criada dentro de parenteses "()", ou seja, função imediata
    const nome = 'Wolfgang1';
    console.log (nome);         // confereindo que exta sendo executado
/**
 * é possivel escrever o codigo normalmete dentro
 * da função instantanea.
 * exemplo:
 */
    const sobrenome = 'Manzato';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Wolfgang'));
    }
    falaNome();
    console.log(idade, peso, altura);
}) (31, 65, 1.78);                          // os parenteses no final para já iniciar a função

const nome = 'Vinicius';
console.log (nome);             // verifica se função está funcionando 
                                // de forma independente do que está fora dela
