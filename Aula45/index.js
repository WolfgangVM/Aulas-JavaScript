// setInterval e setTimeout
 function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
    hour12: false        
    });
 };
/*
 function funcaoDoInterval(){
    console.log(mostraHora());
 }
 setInterval(funcaoDoInterval, 1000);*/
 const timer = setInterval(function(){      //é possivel por dentro de uma variavel
    console.log(mostraHora());
 }, 1000);
 
 setTimeout(function(){ //para depois do tempo determinado
    clearInterval(timer);
 }, 3000);

  setTimeout(function(){ 
    console.log('Olá Mundo!');
 }, 5000);