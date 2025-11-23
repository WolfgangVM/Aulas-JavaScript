let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let armazenar = varA;

console.log(varA, varB, varC);

//método de resolução 

varA = varB;
varB = varC;
varC = armazenar;

console.log(varA, varB, varC);

// outro método de resolução

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);