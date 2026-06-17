// funcao construtora -> objeto
// funcao fabrica -> objetos
// Construtoria -> Pessoa (new)
function Pessoa(nome,sobrenome){
    //Atributos ou metodos privadas
    const ID = 1234;

    const metodoInterno = function(){

    };
// Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + " : sou um método")
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Souza');

p2.metodo();

