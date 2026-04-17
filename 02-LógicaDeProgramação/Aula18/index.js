// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Luiz', "Miranda", 21);
// const pessoa2 = criaPessoa('Junior', "Moreira", 12);
// const pessoa3 = criaPessoa('Maria', "Otavio", 35);

// console.log(pessoa1.nome, pessoa2.nome);

/////////////////////////////////////////////////////////////////

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 21,

    fala()    {
        console.log(`a minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }


};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();