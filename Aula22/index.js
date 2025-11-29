/* 
        Avaliação de Curto-Circuito(Short-Circuit)

*/
// && -> false && true -> false "retorna o valor"
// || -> true && false -> vvvai retornar " ovalor mesmo"

// FALSY            } 
// *false           }
// 0                }   Ojavascript identifica esses como false
// '' "" ``         }
// null/ undefine   }
// NaN              }


console.log('Luiz' && true && 'Maria'); // como não encontrou o valor que indica falso, retornou o ultimo valor
console.log('João' && 0 && 'Julia');    // como encontrou um valor que reconhece como falso, retornou o valor no caso 0
console.log('luiz' && 'Maria');
console.log('Luiz' && '' && 'Maria');   // retornou o espaço em branco
function falaOi(){
    return 'Oi';
}
let vaiExecutar = true;
console.log(vaiExecutar && falaOi());
console.log();
console.log(0 || false || null || 'Luiz' || true);  // retorna o primeiro vverdadeiro que encontrar, já que precisa de apenas um
let corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
