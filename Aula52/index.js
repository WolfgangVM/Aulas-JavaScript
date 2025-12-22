// Escopo léxico
const nome = 'Wolfgang';

function falaNome(){
//    const nome = 'Manzato';  // buscou primeiro dentro da função, e ignorou a de fora
    console.log(nome);  // quando não encontra o nome da variavel dentro da função, procura fora dela
}                       // se não encontrar em lugar nenhum ai sim retorna erro.
//falaNome();
function usaFalaNome(){ // função que executa função
    const nome = 'Manzato'; // como esta declarado em outra função é ignorado 
    falaNome();
}
usaFalaNome();