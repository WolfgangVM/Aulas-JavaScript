function getTimeSeconds(seconds){               // função criada apenas para pegar os segundos.
    const data =new Date(seconds*1000);         // como o valor é pego em milesegundos precisa multiplicar por mil.
    return data.toLocaleTimeString('pt-BR', {   // formatação.
        hour12: false,                          // foramta para 24h ao inves do padrão de 12h
        timeZone: 'UTC',                        // metodo de contagem mais preciso, segue o relogio atomico, outra opção 'GMT',
    })                                          // é menos preciso, mas funciona da mesma forma na maioria dos casos, incluindo neste.
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;   // variavel criada para armazenar os dados fora da função
let timer;

function iniciarRelogio(){
    timer = setInterval(function() {    
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
};

document.addEventListener('click', function(e){
    const el = e.target;    // 'target' identifica o que esta sendo clicado no navegador, com isso não precisa de multiplas funções para cada click
    
    if (el.classList.contains('zerar')){
    relogio.classList.remove('pausado');        // remove a cor definida no css
    clearInterval(timer);                       // para a contagem
    segundos = 0;                               // reseta o contador
    relogio.innerHTML =('00:00:00');   
    };
    if (el.classList.contains('pausar')){
    relogio.classList.add('pausado');           // adiciona a cor definida no css
    clearInterval(timer);  
    };
    if (el.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
    };
});

//      Método não recomendado por deixar a pagina sobrecarregada
/*
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
    
});

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML =('00:00:00');

});

*/