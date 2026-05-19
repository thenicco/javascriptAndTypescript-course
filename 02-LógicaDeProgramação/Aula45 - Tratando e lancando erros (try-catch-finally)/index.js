// try {
//     // é executada quando nao ha erros
//  //   console.log(a) // erro
//     console.log('Abri um arquivo');
//     console.log('manipulei o arquivo e gerou erro');
//     console.log('fechei o arquivo')


//     try{
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Tambem sou finally');
//     }

// } catch (e) {
//     // é executada quando ha erros
//     console.log('tratando o erro');
// } finally {
//     // sempre
//     console.log('FINALLY: eu sempre sou executado');
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia de Date.");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    })

}
try {
const data = new Date('01-01-1970 12:21:21');
const hora = retornaHora(data);
console.log(hora);
} catch (e) {
    //tratar erro
} finally {
    console.log('tenha um bom dia');
}
