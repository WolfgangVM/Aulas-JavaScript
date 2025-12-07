// Esrutura de repeição

for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}

for (let i = 500; i >= 400; i-= 100){
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(`fruta ${frutas[i]}`);
}