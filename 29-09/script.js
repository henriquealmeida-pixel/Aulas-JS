// let produtos = ["Shampoo", "Vassoura", "Creme", "Perfume", "Cloro",];
// let valores = [20, 15, 30, 150, 50];

// for (let index = 0; index < produtos.length; index++) {
//  console.log("Produto: " + produtos[index] +" - valor: R$"+ valores[index] + ",00");
 
    
// }

// let produto = "shampoo";
// let produtos = ["Shampoo", "Vassoura"];
// let produto1 = {
//     nome: "Shampoo",
//     valor: 20.50,
//     descrição: "Shampoo muito cheroso"
// }

// console.log(produto1);
// console.log(produto1.nome);

// produto1.descrição = "Shampoo muito cheiroso";
// console.log(produto1.descrição);

// Ex 1
// Exiba os atributos do produto utilizando o console log
// Produto: Shampoo - valor: R$ 20.50 - Descrição: Shampoo muito cheiroso


// let Produto = "Shampoo";
// let valor = 20.50;
// let descricao = "Shampoo muito cheiroso";

// console.log("Produto:", Produto);
// console.log("Valor: R$", valor);
// console.log("Descrição:", descricao);

// Ex 2
// Crie um objeto aluno, com os atributos nome, idade e curso
// Exiba no console a frase:
// Aluno:  (nome do aluno) - idade: (idade do aluno) - Cursando: (nome do curso)

const aluno = {
    nome: "João",
    idade: 17,
    curso: "Informática"
}

console.log(`Aluno: ${aluno.nome} - idade: ${aluno.idade} - Cursando: ${aluno.curso}`);

// Ex 3 - Cadastro de produtos
// Crie um array contendo 5 nomes de produtos.
// Utilize uma estrutura de repetição para exibir cada produto seguindo o formato:
// Produto 1: Teclado
// Produto 2: Mouse
// Produto 3: Monitor
// Produto 4: Headset
// Produto 5: Webcam
// Desafio: Utilize o indice do array para gerar automaticamente o número do produto.

const produtos = ["Teclado", "Mouse", "Monitor", "Headset", "Webcam"];

for (let numero = 0; numero < produtos.length; numero++) {
    console.log(`Produto ${numero + 1}: ${produtos[numero]}`);
}

