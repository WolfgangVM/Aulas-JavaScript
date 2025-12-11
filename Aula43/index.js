// tratamento e lançando erros(try, catch, throw)
/*
try {
    console.log(naoExisto);
}catch(err) {   //armazena o erro em "err", pode escrever qualquer coisa, mas recomenda-se usar e, err, error
    console.log('naoExisto não exise'); // não é recomendado exibir partes do codigo para o usuario,
    console.log(err);                   // um por não enenderem e outro por questão de segurança
}
    */

function soma(x, y) 
{
    if (typeof x !== 'number' ||
        typeof y !== 'number') 
    {
        throw new ReferenceError('x e y precisam ser números.');
    }
    return x + y;
}

try {       //se não ocorrer nenhum erro o bloco try é execuado
console.log(soma(1, 2));
console.log(soma('1', 2));
}catch(erro) {      // caso ocorra algum erro o bloco catch é execuado
//console.log(erro);
console.log('Alguma coisa mais amigavel para o usuario.');
}