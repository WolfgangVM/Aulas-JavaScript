// Tratando e lançando erros (try, catch, finally)

try {
    // executada quando não há erros
/**
 * 'abrir um arquivo'
 * 'manipulei o arquivo e gerou erro'
 * 'fechei o arquivo'
 */
} catch (e) {
    // é executado quando há erros
/**
 * 'tratando erro'
 */
} finally {
    // sempre
/**
 * 'eu sempre sou executado'
 */
}
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esprando a instancia de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        //hoour: '2-digit',
        //minute:'2-digit',
        //second:'2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //tratar erro
    //console.log(e);
}finally {
    console.log('Tenha um bom dia.');
}