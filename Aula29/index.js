// Switch/Case
function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
        switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;// break;  //obrigatório caso fora de uma função
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto; //break;  //obrigatório
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto; //break;  //obrigatório
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto; //break;  //obrigatório
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto; //break;  //obrigatório
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto; //break;  //obrigatório
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto; //break;  //obrigatório
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto; //break;  // não tem necessidade
    }
}
const data = new Date('1987-04-26 00:00:00');
const diaSemana =data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); 
/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
}else if (diaSemana === 2){
    diaSemanaTexto = 'terça';
}else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if (diaSemana === 4){
    diaSemanaTexto ='Quinta';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}else {
    diaSemanaTexto = '';
}*/
console.log(diaSemana, diaSemanaTexto);


