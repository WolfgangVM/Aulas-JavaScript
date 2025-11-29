/**
 *      Operadores de comparação
 *       
 *      >   maior que
 *      >=  maior ou igual a
 *      <   menor que
 *      <=  menor ou igual a
 *      ==  igualdade   (valor) **** (evitar usar)
 *      === igualdade estrita   (valor e tipo)
 *      !=  diferente   (valor) **** (evitar usar)
 *      !== diferente estrito   (valor e tipo)
 */
console.log(10 > 5);
console.log(10 >= 11);
console.log(5 > 5);
console.log(10 < 5);
console.log(5 <= 5);
console.log(6 < 15);
console.log(' ');
const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp);
console.log(' ');
const num3 = 10;
const num4 = "11";
const comp1 = num3 === num4 // caso use == o resultado seria true, com === o resultado é false, pois o tipo é diferente
console.log(comp1);         // o mesmo se aplica ao != e !==