// (condicao) ? "Valor para verdadeiro" : "Valor para falso";
const pontuacaoUsuario = 2999;

// como se fosse (? == if e : == else)
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;

const corPadrao = corUsuario || 'Preta';

// if (pontuacaoUsuario >= 1000) {
//     console.log("Usuario VIP");
// } else { 
//     console.log("Usuario Normal");
// }

