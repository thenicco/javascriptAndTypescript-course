// escreva uma funcao chamada ePaisagem que recebe dois argumentos, lagura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.
// traduzindo largura > altura  = paisagem

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1920)); // false