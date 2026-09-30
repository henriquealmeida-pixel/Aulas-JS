// Pegar os elementos no html

// const formulario = document.getElementById("formulario");

// const nome = document.getElementById("nome");
// const nascimento = document.getElementById("nascimento");

// const nomeResultado = document.getElementById("nomeResultado");
// const dataResultado = document.getElementById("dataResultado");
// const idadeResultado = document.getElementById("idadeResultado");
// const boxResultado = document.getElementById("resultado");

// formulario.addEventListener("submit", function(event) {
//    event.preventDefault();      //impede que a tela recarregue

    // Pegar o valor dos inputs
//     const valornome = nome.value;
// const valorNascimento = nascimento.value;

// console.log(valornome);
// console.log(valornascimento);

// separa a data em 3 valores

// const dataSeparada = valorNascimento.split("-");

// console.log(dataSeparada);

// Armazena as datas separadas em formato numerico
// const anoNascimento = Number(dataSeparada[0]);
// const mesNascimento = Number(dataSeparada[1]);
// const diaNascimento = Number(dataSeparada[2]);

// console.log(anoNascimento);

// pega a data de hoje do sistema

// const hoje = new Date();

// const anoAtual = hoje.getFullYear(); //pega somente o ano
// const mesAtual = hoje.getMonth(); //pega somente o mes
// const diaAtual = hoje.getDate(); //pega somente o dia

// console.log(hoje);
// console.log(anoAtual);
// console.log(mesAtual);
// console.log(diaAtual);

// let idade = anoAtual - anoNascimento;

// console.log(idade);

// if (mesNascimento > mesAtual) {
//     idade = idade -1;
// }

// if (mesNascimento == mesAtual) {
//     if (diaNascimento > diaAtual) {
//         idade = idade -1;
//     }
// }
//  if (mesNascimento >  mesAtual || (mesNascimento == mesAtual && diaNascimento > diaAtual)) {
//      idade = idade -1;
//  }
// console.log(idade);


// const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;
                                                                                                                                                                                                                                  
// nomeResultado.textContent = valornome;
// dataResultado.textContent = dataFormatada;
// idadeResultado.textContent = idade;

// boxResultado.style.display = "block"
// })