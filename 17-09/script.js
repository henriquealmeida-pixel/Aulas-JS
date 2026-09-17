// let nota = 6;

// if (nota < 5) {
//     console.log("Henrique Reprovado");
    
// // } else if (nota < 7) {
// // } else if (nota == 5 || nota == 6) {
// } else if (nota == 5 && nota < 7) {
//     console.log("Henrique de recuperação");
    
// } else{
//     console.log("Henrique Aprovado");
    
// }


// 01 - Temperatura
// Crie uma variavel chamada temperatura.
// Utilize uma estrutura condicional para verificar:
// •    Temperatura maior que 30 → "Está quente!"
// •    Temperatura entre 20 e 30 → "Temperatura agradável."
// •    Temperatura menor que 20 → "Está frio!"
// •    Exiba a mensagem no console.
 
                        // Resposta 1
let temperatura = 25;

if (temperatura > 30) {
    console.log("Está quente!");
} else if (temperatura >= 20 && temperatura <= 30) {
    console.log("Temperatura agradável.");
} else {
    console.log("Está frio!");
    
}
// _________________________________________
// 02 - Velocidade do veículo
// Crie uma variável chamada velocidade.
// Verifique:
// •    Até 60 km/h → "Velocidade permitida"
// •    Acima de 60 km/h e até 80 km/h → "Atenção: velocidade acima do permitido"
// •    Acima de 80 km/h → "Velocidade muito alta"
// Exiba a mensagem correspondente no console.

                    // Resposta 2
let velocidade = 75;

if (velocidade <= 60) {
    console.log("Velocidade permitida");
} else if (velocidade > 60 && velocidade <= 80) {
    console.log("Atenção: velocidade acima do permitido");
} else {
    console.log("Velocidade muito alta");
}

// __________________________________________
// 03 - Estoque
// Crie uma variável chamada quantidadeEstoque.
// Verifique:
// •    Quantidade igual a 0 → "Produto esgotado"
// •    Quantidade entre 1 e 10 → "Estoque baixo"
// •    Quantidade acima de 10 → "Estoque disponivel"
// Exiba a situação do estoque.

                    //Resposta 3 
let quantidadeEstoque = 8;

if (quantidadeEstoque === 0) {
    console.log("Produto esgotado");
} else if (quantidadeEstoque >= 1 && quantidadeEstoque <= 10) {
    console.log("Estoque baixo");
} else {
    console.log("Estoque disponível");
}

// Exercicio 04 - login
// Crie duas variáveis:
// let usuario = "admin";
// let senha = "1234";
// Verifique se o usuário e a senha estão corretos.
// se estiverem corretos: login realizado com sucesso
// se não: usuário ou senha incorretos

                    // Resposta 4

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado com sucesso");
    
} else {
    console.log("Usuário ou senha incorretos");
    
}
// _______________________________________________
// exercicio 05 - horario do dia
// crie uma variavel chamada hora contendo um valor entre 0 a 23.
// utilize condicionais para informar:
//      0 até 11 - "bom dia"
//      12 até 17 - "boa tarde"
//      18 até 23 - "boa noite"

let hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
console.log("Boa noite");

}

// Exercicio 06 - Classificação de nota de um produto
// Uma loja recebe avaliações de seus clientes utilizando notas de 1 a 5.
// Crie uma variavel chamada nota.
// Classifique a avaliação:
//          5 - "Excelente"
//          4 - "Muito bom"
//          3 - "Bom"
//          2 - "Regular"
//          1 - "Ruim"
// Caso a nota não esteja entre 1 a 5, exiba "Nota inválida".

let nota = 7;
("Digite a nota do produto (1 a 5):");

if (nota === 5) {
    console.log("Excelente");
} else if (nota === 4) {
    console.log("Muito bom");
} else if (nota === 3) {
    console.log("Bom");
} else if (nota === 2) {
    console.log("Regular");
} else if (nota === 1) {
    console.log("Ruim");
} else {
    console.log("Nota inválida");
}
// _________________________________________________________
// Exercicio 07 - Tipo de ingresso
// Crie uma variavel chamada tipoingresso.
// Ela poderá receber:
// "Inteira"
// "Meia"
// "Vip"
// Utilize condicionais para exibir o preço correspondente:
//      Inteira - R$ 40
//      Meia - R$ 20
//      VIP - R$ 80
// Caso seja informadoo outro tipo, exiba:
// Tipo de ingresso inválido

let tipoIngresso = "VIP";
("Digite o tipo de ingresso: Inteira, Meia ou Vip");

if (tipoIngresso === "Inteira") {
    console.log("Inteira - R$ 40");
} else if (tipoIngresso === "Meia") {
    console.log("Meia - R$ 20");
} else if (tipoIngresso === "Vip") {
    console.log("VIP - R$ 80");
} else {
    console.log("Tipo de ingresso inválido");
}
// ____________________________________________________________