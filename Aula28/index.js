// Objeto Date
/*
const tresHoras = 60 * 60 * 3 *1000;
const data = new Date(0 + tresHoras);    //sempre que se usa a função new, esta se usando uma função construtora, e ela tem a primeira letra maiuscula
console.log(data.toString());// Thu Jan 01 1970 00:00:00 -> horario marco 0, as três horas a mais é pq estamos no brasil, GMT-0300 (Horário Padrão de Brasília)

*/
/*                                                    //   a, m,d,   h,M, s 
const data = new Date(2019, 3, 20, 20, 15, 59, 500); // '2019-04-20 20:20:59'   (modo de digitar alternativo mais utilizado)     //ano, mes, dia, hora, min, seg, milesegundo
console.log(data.toString());                           // do mes pra frente pode omitir, caso deixe apenas o ano ele ira intender que é em milesgundos
console.log('dia', data.getDate);             
console.log('Mês', data.getMonth());    // mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());    // 0 - Domingo, 6 - Sábado


console.log(Date.now());    //deste momento em milesimos de segundo 
const data1 = new Date(1764718375393);  //1764718375393 momento que foi registrado pelo "console.log(Date.now());"  ao rodar
console.log(data1);
*/
// função que retorna uma data
function zeroAEsquerda (num){               //formata para não ficar um digito só.
    return num >= 10 ? num : `0${num}`;
}

function FormataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1; // corrige a visualização para começaer em um ao inves de zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;    //retorna deacordo
}

const data = new Date();    //busca o horrio do pc onde esta sendo executado
const dataBrasil = FormataData(data);   
console.log(dataBrasil);