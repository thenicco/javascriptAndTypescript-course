// Escreva uma funcao que recebe um numero e
// retorn o seguinte:
/* numero é divisivel por 3 = Fizz
 numero é divisivel por 5 = Buzz
 numero é divisivel por 3 e 5 = FizzBuzz
 numero nao é divisivel por 3 e 5 = retorna o proprio numero
 checar se o numero é realmente um numero
 use a funcao com numeros de 0 a 100 */

function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;

  if (numero % 3 === 0 && e % 5 === 0) return "FizzBuzz";

  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";

  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
