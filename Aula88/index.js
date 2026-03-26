function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
/*      retorna em ordem aleatória
function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3));
esperaAi('Frase 2', rand(1, 3));
esperaAi('Frase 3', rand(1, 3));
*/
/*        //retorna de forma sequencial, usanso calback
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function(){
        esperaAi('Frase 3', rand(1, 3));
    });
});
*/

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');    // dentro do reject pode usar outros tipos como o padrao de erro do javascript
    setTimeout(() => {
        resolve(msg);
    }, tempo);
    });
}

esperaAi('Conexão com DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(/*'Buscando dados da BASE'*/ 2222, rand(1, 3)); // alterando texto(string) para numero
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {   // catch é erro, se gerado ele encerra o promise
        console.log('ERRO', e);
    });

    console.log('Mensagem fora do promise é executada antes, depois o promise é executado.');
    console.log('Isso é porque o JavaScript é assincrono.')