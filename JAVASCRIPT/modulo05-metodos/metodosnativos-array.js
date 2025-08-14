// EXERCÍCIOS DE JS HASHTAG TREINAMENTOS
// MÉTODOS - MÓDULO 5

/*
Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final, remova o primeiro item e exiba o carrinho atualizado.
*/

let lista = ["Produto A", "Produto B"];
lista.push("Produto C");
lista.shift();
console.log(lista);


/*
Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos disponíveis.
*/

let produtos = ["Produto X", "Produto Y"];
produtos.push("Produto Z");

let carrinho = ["Produto A", "Produto B"];
let novoArray = produtos.concat(carrinho);
console.log(novoArray);

/*
Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e 'Agenda' estão presentes no estoque.
*/

let lista3 = ["caderno", "Lápis", "Estojo"];
console.log(lista3.includes("Lápis"));
console.log(lista3.includes("Agenda"));

/*   
Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
que 7.
*/

let numeros = [2, 5, 8, 1];

let resultadoSome = numeros.some((numero)=> numero > 7);
console.log("resultado", resultadoSome);

/*
Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
*/

let listaNum = [4, 6, 8, 2];

let verifica = listaNum.every(numero => numero > 3);
console.log(verifica);