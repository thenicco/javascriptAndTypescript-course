/*
Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol); - valores copiados

Referencia (mutavel) - array, objetc, function - passados por referencia

*/

const pessoa = {
    nome: 'Luiz',

    sobrenome: 'macaco'

};

const b = {...pessoa};

pessoa.nome = 'Jonas';

console.log(b);
