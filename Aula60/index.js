// Funções recursivas

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max); // reinicia novamente a função até que max seja maior ou igual a 10.
}

recursiva(0);

//  ou seja, função recursiva é uma função que se chama de volta.
//  deve-se ter atenção ao limite, ou o próprio desenvolvedor coloca ou o motor do JS ira por si mesmo parar a recursividade.