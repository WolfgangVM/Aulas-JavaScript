const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){      // função que serve para criar o input li
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {  //função que adiciona tarefa apertando enter, caso tenha algum texto
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function LimpaInput() {     // função que limpa o campo digitado após adicionar a  tarefa
    inputTarefa.value = ''; // limpa o campo de digitação
    inputTarefa.focus();    // evento que o icone para digitar fica piscando apos clicar em um campo para gigitar um texto
}

function criaBotaoApagar(li){       //cria um botão que apaga a tarefa, que fica em frente a tarefa
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');         // menor variedade 
    botaoApagar.setAttribute('class', 'apagar'); // maior variedade, pois pode por tipo e o nome do tipo
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {   // função que adiciona o texto na pagina do html
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    LimpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e) {   // função que recebe o click do cursor no botão
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click',function(e) {     // pode ser usado para ver onde está sendo clicado
    el = e.target;
    //console.log(el);  // só para ver
     if (el.classList.contains('apagar')) {
        //console.log('apagar clicado');
        //console.log(el.parentElement); // reorna o pai do elementto clicado
        el.parentElement.remove();
        salvarTarefas();
     };
})

function salvarTarefas() {  // salva as tarefas em um array
    const liTarefas = tarefas.querySelectorAll('li');
    //console.log(liTarefas);   // verifica a função
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        //console.log(tarefas.innerText);
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // para subsiuir a parlavra apgar por um espaço em vasio. a palavra é case sensitive
        //console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    };
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //console.log(tarefasJSON);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas =localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);     // torna uma array novamente
    //console.log(tarefas);
    //console.log(listaDeTarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    };

}
adicionaTarefasSalvas();