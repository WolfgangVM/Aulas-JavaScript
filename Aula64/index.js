//concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1 + a2;
//console.log(a3);

//const a4 = a1.concat(a2, [7, 8, 9], 'Wolfgang');
//console.log(a4);
// ... rest-> ... spread
const a3 = [...a1, 'Wolfgang', ...a2, ...[7, 8, 9]];
console.log(a3);