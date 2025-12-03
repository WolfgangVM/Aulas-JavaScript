// Operação ternária
// (condição) ? 'para verdadeiro': 'para falso'; 

const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VP': 'Usuário normal';
const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);
/*
if (pontuacaoUsuario >= 1000){
    console.log("Usuario VIP");
}else {
    console.log("Usuario normal");
}
*/

