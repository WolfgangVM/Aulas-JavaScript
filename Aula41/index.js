//break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
for ( let numero of numeros) {
    if (numero === 2/* || numero === 5*//*){      //dessa forma 
 /*   console.log('pulei o 2');
        continue;
    }
    /*if (numero === 5){  //ou dessa forma
    console.log('pulei o 5');
        continue;
    }*/
 /*  if (numero === 7){   //parei aqui
    console.log('7 encontrado, saindo...');
    break;
   }
    console.log(numero);
}
*/

for (let i in numeros) { // no caso do while precisa de um incrementador no fiinal para não ficar em um numero infinito
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        // no caso de usar while o "i++ viria qui, antes do continue"
        continue;   // o continue faz com que o while entre em lupe infinito
    }
    console.log(numero);
    if (numero === 7){   //parei aqui
    console.log('7 encontrado, saindo...');
    break;  // sem o break aqui o whiile entra em loop infinito
   }
}