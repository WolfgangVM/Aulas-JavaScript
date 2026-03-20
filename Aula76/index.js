// Manipulando prototype

// new object
const objA = {
    chaveA: 'A'
    
};

const objB = {
    chaveB: 'B'
    
};
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);  // cria uma cadeia de vinculo entre os objetos
Object.setPrototypeOf(objC, objB);  // permite erdar configurações de outras funções
console.log(objC.chaveA);           // não é recomendado mexer com o funcionamento do proto, pois afeta o desenpenho