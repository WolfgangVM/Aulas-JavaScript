//Explicalção tipos de variaveis e regras

//dados primitivos:
// String, number, undefine, null, boolean, "symbol(não demonstrado ainda)"


const nome = 'Luiz';    // string
const nome1 = "Luiz";   // string
const nome2 = `Luiz`;   // string
const num1 = 10;        // number
const num2 = 10.52;     // number
let nomeAluno;          // undefine -> não aponta para local nenhuma na memória
let sobrenome = null;   // Nulo -> não aponta para local nenhuma na memória

const boolean = true;   // Boolean = true, false
const aprovado = false; // valor lógico, usado para mudar o fluxo do programa. EX.: se true vai por um caminho se false vai pra outro
 //para saber o tipo usase o typeof
 console.log(typeof nomeAluno, nome, nome1, num2, null, aprovado);
