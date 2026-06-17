// return
// retorna o valor
// termina a funcao

// function soma(a,b){
//    return a + b;
// }

// console.log(soma(2,3));

/////////////////////////////////////////////////////////////
// function criaPessoa (nome, sobrenome){
//     return {nome,sobrenome};
// }

// const p1 = criaPessoa('Maicon', 'Silva');
// console.log(p1)

//////////////////////////////////////////////////////////////

function criaMultiplicador(multiplicador){
    //multiplicador
   return function(n){
        return n * multiplicador;
    }
};


const duplica =  criaMultiplicador(2);
const triplica =  criaMultiplicador(3);
const quadriplica =  criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));