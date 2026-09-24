// let nome1 = "Levi";
// let nome2 = "Duda";
// let nome3 = "Gustavo";
// let nome4 = "Bernardo";

// ---------- ARRAY ---------- 
//               0       1       2           3
// let nomes = ["Levi", "Duda", "Gustavo", "Bernardo"]; //Criação do Array/Lista

// console.log(nomes); //Mostra a lista completa na mesma linha

// console.log(nomes[1]); //Mostra o item da posição mencionada entre colchetes

// nome4 = "Ana";
// nomes[3] = "Ana"; //Altero o valor na posição especificada

// console.log(nomes.length); //Mostra o tamanho do Array

// ---------- exercicios ----------

// Exercicio 07 - Lista de frutas
// Crie um array chamado frutas contendo 5 frutas.
// Depois:
// 1. Exiba o array completo.
// 2. Exiba a primeira fruta.
// 3. Exiba a terceira fruta.
// 4. Exiba a quantidade de frutas.

// let frutas = ["Banana", "Maça", "Tomate", "Laranja", "Manga"];
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(frutas.length);



// Exercicio 08 - LIsta de cidades
// Crie um array contendo 5 cidades brasileiras.
// Depois:
// 1. Exiba o array completo.
// 2. Altere a segunda cidade.
// 3. Exiba a segunda cidade.
// 4. Exiba a quantidade de cidades.

// let cidades = ["Santo André", "São Caetano do Sul", "São Paulo", "Maúa", "São Bernardo do Campo"];
// console.log(cidades);
// cidades[1] = "Maúa";,0
// console.log(cidades[1]);
// console.log(cidades.length);


// Exercício 09 - Nomes
// Crie um array com 6 nomes.
// Utilize um for para exibir todos os nomes no console.

// let nomes = ["Ana", "João", "Maria", "Pedro", "Lucas", "Carla"];

// for (let numero = 0; numero < nomes.length; numero++) {
//     console.log(nomes[numero]);
// }


// Exercício 10 - Preços
// Crie um array contendo 5 preços de produtos.
// Utilize um for para exibir todos os preços.

// let precos = [10.50, 25.90, 7.99, 45.00, 12.50];

// for (let numero = 0; numero < precos.length; numero++) {
//     console.log(precos[numero]); 
// }


// Exercício 11 - Produto e Preços
// Crie dois arrays, um contendo 5 nomes de produtos
// e outro contendo 5 preços de produtos.
// Utilize um for para exibir todos os nomes e preços.

// let produtos = ["Arroz", "Feijão", "Macarrão", "Leite", "Café"];
// let valores = [25.00, 8.50, 6.99, 5.50, 18.00];

// for (let numero = 0; numero < produtos.length; numero++) {
//     console.log(produtos[numero] + " - R$ " + valores[numero]);
// }

// ---------- Estrutura de Repetição + Estrutura de Decisão ----------
// for (let index = 0; index <= 10; index++) { //contando de 0 a 10
    
//  if (index >= 5) { // veriicando se é maior ou igual a 5
//     console.log(index); //mostra  o numero
    
//     }   
// }

// let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
// for (let index = 0; index < numeros.length; index++) { //contando de 0 a 10
    
//  if (numeros [index] >= 10 ) { // veriicando se é maior ou igual a 10
//     console.log(numeros) [index]; //mostra  o numero do array
    
//     }   
// }

// let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
// for (let index = 0; index < numeros.length; index++) { //lendo o array
//     let sobra = numeros[index] % 2;
    
//     if (sobra == 0) {
//         console.log("O numero " + numeros[index] +"é par");
        
//     } else {
//         console.log("O numero " + numeros[index] +"é impar");
        
//     }
// }   

// Exercício 01 - Analisando notas
// Crie um array com 8 notas.
// Utilize for para percorrer as notas e if/else para informar:
// - Nota maior ou igual a 7 -> "Aprovado"
// - Nota menor que 7 -> "Reprovado"

let notas = [8, 6, 9, 5, 7, 4, 10, 6];

for (let numero = 0; numero < notas.length; numero++) {
    if (notas[numero] >= 7) {
        console.log(notas[numero] + " -> Aprovado");
    } else {
        console.log(notas[numero] + " -> Reprovado");
    }
}


// Exercício 02 - Temperaturas
// Crie um array contendo 7 temperaturas.
// Percorra o array e classifique cada temperatura:
// - Maior que 30 -> "Quente"
// - Entre 20 e 30 -> "Agradável"
// - Menor que 20 -> "Frio"

let temperaturas = [32, 25, 18, 30, 35, 22, 15];

for (let numero = 0; numero < temperaturas.length; numero++) {
    if (temperaturas[numero] > 30) {
        console.log(temperaturas[numero] + " -> Quente");
    } else if (temperaturas[numero] >= 20 && temperaturas[numero] <= 30) {
        console.log(temperaturas[numero] + " -> Agradável");
    } else {
        console.log(temperaturas[numero] + " -> Frio");
    }
}
