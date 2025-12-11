/* Escreva uma função chamada ePaisagem que 
recebe dois argumentos, largura e altura de 
umaa imagem (number).
Retorne true se a imagem estiver no modo paisagem.  */

/*
function ePaisagem(largura, autura){
    if (largura > autura) return true;
    return false;
}
console.log(ePaisagem(1, 5));
*/
/* resolução */

 const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));
