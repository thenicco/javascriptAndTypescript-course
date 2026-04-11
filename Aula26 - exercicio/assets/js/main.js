// captura evento de submit do form
const form = document.querySelector('#formIMC');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');// captura dados do input
    const inputAltura = e.target.querySelector('#altura');// captura dados do input
        

     const peso = Number(inputPeso.value);
     const altura = Number(inputAltura.value);


     if (!peso) {
        setResultado('Peso Inválido', false);
        return;
     } // se n for valido o peso ( exemplo : macaco), ele retorna invalido e transmite a msg 'Peso invalido'

     if (!altura) {
        setResultado('Altura Inválido', false);
        return; // se n for valido a altura ( exemplo : macaco), ele retorna invalido e transmite a msg 'altura invalido'
     }

     const imc = getIMC(peso, altura);
     const nivelIMC = getNivelIMC(imc);

     const msg = `Seu IMC é ${imc} ${nivelIMC}`;

     setResultado(msg, true);

     

});
// criacao da lista de coisas (Array) pra puxar o nivel do imc
function getNivelIMC(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc > 39.9){
        return nivel[5];
    } 
    if (imc >= 34.9){
        return nivel[4];
    } 
    if (imc >= 29.9){
        return nivel[3];
    } 
    if (imc >= 24.9){
        return nivel[2];
    } 
    if (imc >= 18.5){
        return nivel[1];
    } 
    if (imc < 18.5){
        return nivel[0];
    }
}

function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

//funcao pra criar o paragrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}

// recebe o resultado pra ver se é valido ou nao 
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg
    resultado.appendChild(p);

};