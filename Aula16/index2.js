//      Funções

function soma(x, y){    // é possivel deixar valores em x e y, caso não seja enviados valoresou valor em uma o javascript usa os valores deixados prontos
    const resultado = x + y;
    console.log('Olá mundo1');
    return resultado;
    console.log('Olá mundo2');  // tudo dentro da função depois de return é iguinorado
}
console.log(soma(2, 2));
//  console.log(soma(3, 1));
//  console.log(soma(5, 10));

const resultado = soma(7, -2);
console.log(resultado); //  tudo que está dentro da função só existe
                        //   na função por isso posso criar a variavel resultado

console.log(soma()); // retorna NaN por não possui valor, para retornar precisa ter os dois valores

/**
 const raiz = function (n){
   return n ** 0.5;
}

console.log(raiz(9));
 */

// quando tenho apenas uma linha de função é possivel resumila
const raiz = n => n ** 0.5;

console.log(raiz(9));