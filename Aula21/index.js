/*  
        Operadores Lógicos

        &&  -> AND -> e
        ||  -> OR -> ou
        !   -> NOT -> não

*/
console.log(true && true);                  //todas as expressões preciasm ser verdadeiras
console.log(true && false);                 //para retornar verdadeiro (true)
console.log(true && true && true && true);
console.log(true && true && false && true);
console.log(' ');
const expressaoAnd = true && true;
console.log(expressaoAnd);
console.log(' ');
const exrpessaoOr = true || false || false;      // se uma for verdadeira, ira retornar verdadeiro
console.log(exrpessaoOr);
console.log(' ');
console.log(!false);    //nega o operador
console.log(!true);
console.log(!!false);    //nega duas vezes, não é pratico mas funciona
