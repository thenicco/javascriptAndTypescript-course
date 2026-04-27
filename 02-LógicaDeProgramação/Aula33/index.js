const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Mendoca',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil', 
        numero: 321
    }
};

//Atribuicao via desestruturaçao

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome,sobrenome,  resto);