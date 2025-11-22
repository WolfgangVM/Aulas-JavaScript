const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso =84;
const alturaEmM =1.80;

 let indiceMassaCorporal = peso/(alturaEmM * alturaEmM);
 let anoNascimento = 2025 - idade;

 console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'o IMC é', indiceMassaCorporal + '.');
 console.log();

 // resposta

 console.log(nome + ' '+ sobrenome + ' tem ' + idade + ' anos, peso ' + peso + ' Kg');
 console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);   // modo mais recomendado, pois é o mais legivel
 console.log(nome, 'nasceu em', anoNascimento + '.');

