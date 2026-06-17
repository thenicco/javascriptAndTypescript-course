
// factory function ( funcao fabrica )
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`

        },

        // setter

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

        // getter
        get imc() {
         const indice = this.peso / (this.altura ** 2);
         return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Joao', 'Otavio', 1.90, 65);
const p3 = criaPessoa('Junir', 'Otavio', 1.5, 110);

console.log(p3.imc);