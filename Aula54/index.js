// função de callback
// a função callback serve para ordenar a resposta com retorno de tempo aleatório em sequencia
function rand(min = 1000, max = 3000){
    const num = Math.random()*(max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}
// função callback mais organizado usando funções
f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Olá Mundo!');
}

/*  conhecido como inferno de callback por er muito confuso quando se usa muito a função.

f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá Mundo!');
        });
    });
});
*/