// Closures

function retornaFuncao(nome){
    /*const nome = 'Wolfgang';*/
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Wolfgang');
const funcao2 = retornaFuncao('Vinicius');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());   // para ver no output do VsCode