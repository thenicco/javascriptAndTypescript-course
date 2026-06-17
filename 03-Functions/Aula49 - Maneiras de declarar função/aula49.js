// Declaração de funcao ()

falaOI();
function falaOI(){
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function Expression
const souUmDado = function(){
    console.log('Sou um dado')
};

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

//Arrow Function

const funcaoArrow = () => {
    console.log("sou uma arrow function");
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('estou falando');
    }
};

obj.falar();