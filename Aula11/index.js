//Aula sobre string


//               01234567
let umaString = "Um texto";     //ou  "um \"texto\"";    'um \'texto\''

console.log(umaString);

console.log(umaString.charAt(3));// faz o mesmo que colocar em '[]'

console.log(umaString[4]);

console.log(umaString[-1]); // caso esteja fora do indice aparece como undefine

console.log(umaString[5]);

console.log(umaString.concat(' em', ' um', ' lindo dia.'));     // } amobos tem o
console.log(umaString + ' em um lindo dia.');                   // } mesmo resltado 
console.log(`${umaString} em um lindo dia.`);                   // } final

console.log(umaString.indexOf('texto'));    // retorna o index onde está a parte especificada

console.log(umaString.indexOf('Texto'));    // no caso por t estar em caixa alta retorna -1, ou seja não encontrado

console.log(umaString.lastIndexOf('U', 3)); // de tras para frente, com o 3 ele não encontra pois começa no 0 de tras pra frente

console.log(umaString.match(/[a-z]/g));     // retorna todas as letras (a-z), como o JavaScript é case sencitive ele ignora as letras em caixa alta

console.log(umaString.match(/[a-z]/));      // mostra a primeira encontrada e onde foi

console.log(umaString.search(/x/));        //semelhante ao idexOf, pois mostra o indece onde encontra a letra selecionada

console.log(umaString.replace('Um', 'Outra'));  // substitui uma por outra

let outraString = 'O rato roeu a roupa do rei de roma.';

console.log(outraString.replace(/r/, '#')); //apenas a primeira é trocada

console.log(outraString.replace(/r/g, '#'));    // agora todos os r serão trocados 

console.log(outraString.length);        //pega o tamanho da string

console.log(outraString.slice(2,6)); //pega de 2 a 6, mas a 6 não mostra então pego da 2 a 5

console.log(outraString.slice(-3));     //ira começar do final de forma invertida pegando as tres ultimas: ma. 35 - 3 = 32 até o 35

console.log(outraString.slice(-5,-1)); // pega  35-5 = 30 em diante, e 35 - 1 + 34 termina no 34

console.log(outraString.substring(outraString.length - 5, outraString - 1)); // faz o mesmo que slice

console.log(outraString.split(' ')); //separa pela escolha, no caso pelo espaço. OBS: o separador não aparece, caso escolha uma lettra ela ficara de fora

// para mais detalhes w3school javascript ,  mdn javascript e ECMA Script

console.log(outraString.toUpperCase());   //fica tudo maiuscula

console.log(outraString.toLowerCase());    //fica tudo minuscula