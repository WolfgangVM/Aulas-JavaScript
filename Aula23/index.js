//      if, else if, else       (condição)
/**
 * Entre 0 - 11 - Bom dia
 * entre 12 - 17 - Boa tarde
 * entre 18 - 23 - Boa noite
 */
/**
 * If pode ser usado sozinho
 * sempre que utilizar a palavra else, preciso de um if antes
 * eu posso ter quantos else if quiser, mas não presisa se não for necessario
 * e por fim apenas só pode ter um else na checagem
 */

const hora = 50;    // mudar para testar

if (hora >= 0 && hora <= 11){       // condição
    console.log('Bom dia!');
}else if (hora >= 12 && hora <= 17){    // condição
    console.log('Boa tarde!');
}
else if(hora >=18 && hora <= 23){       // condição
    console.log('Boa noite!');
}else{                              //condição para tudo fora do escopo anterior
    console.log('Olá!');
}

const tenhoGrana = NaN;         // trocar para testar, "true" para executar o if ao inves do else
if(tenhoGrana){
    console.log('Vou sai de casa');
}else{
    console.log('Não vou sair de casa');

}