const exibeDia = document.querySelector('h1');
const data = new Date();

function zeroEsquerda (num){
    return num >= 10 ? num:`0${num}`;
}

function FormataData(data){
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());

    function getSemana(diaSemana){
        switch (diaSemana){
            case 0: return 'Domingo';
            case 1: return 'Segunda-feira';
            case 2: return 'Terça-feira';
            case 3: return 'Quarta-feira';
            case 4: return 'Quinta-feira';
            case 5: return 'Sexta-feira';
            case 6: return 'Sábado';
            default: return '';
        }
    }

    function mesTexto (mes){
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
             'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[mes];
    }

    return `${getSemana(diaSemana)}, ${dia} de ${mesTexto(mes)} de ${ano} <br> ${hora}:${min}`;
}

if (exibeDia) {
    exibeDia.innerHTML = FormataData(data);
} else {
    console.warn('Elemento <h1> não encontrado para exibir a data.');
}