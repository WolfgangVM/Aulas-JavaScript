
const numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('O número está entre 0 e 5.');
}else if(numero >=6 && numero <=8){
    console.log('O número está entre 6 e 8.');
}//else if(1 === 1){                                       //verdadeira, sera executado
   // console.log('Literal');
//}
else if(numero >= 9 && numero <= 11){                    //verdadeiro, não sera executado pq, tem outra condição verdadeira antes
    console.log('O número está entr5e 9 e 11');
}else{
    console.log('O número NÃO está entre 0 e 11');
}

console.log('... Resto do codigo');

// para evvitar que haja duas condições verdadeiras encadeada no mesmo if, se cria outro if separado

if(1 === 1){                                       //verdadeira, sera executado
    console.log('Literal');
}
        // dessa forma todas as condições verdadeiras são testadas