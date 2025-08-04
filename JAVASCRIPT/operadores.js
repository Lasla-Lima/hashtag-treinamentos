// ATIVIDADE DE JS HASHTAG TREINAMENTOS
// OPERADORES E OPERAÇÕES - MÓDULO 3

// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00. Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do produto após aplicar o desconto e o imposto.
let produto = 200;
let descontoProduto = 40;
let imposto = 12;

let precoDesconto = produto - descontoProduto;
let precoFinal = precoDesconto + imposto;
console.log(`O valor final do produto é: ${precoFinal}`);

// Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00. Calcule o preço de venda do produto
let custoProduto = 100;
let lucroAdicional = 30;

let precoVenda = custoProduto + lucroAdicional;
console.log(`Preço de venda do produto: R$ ${precoVenda}`);

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um  produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.

let orcamento = 250;
let desconto = 50;
let precoProduto = 300;

let precoComDesconto = precoProduto - desconto;
let dentroOrcamento = precoComDesconto <= orcamento;

console.log(`Preço com desconto: R$ ${precoComDesconto}`);
console.log(`Está dentro do orçamento? ${dentroOrcamento}`);

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20") e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console se a quantidade é suficiente ou não.

let quantidadeEstoqueString = "20";
let quantidadeMinEstoque = 20;

// conversão explicita
let quantidadeEstoque = Number(quantidadeEstoqueString);
// verificação de igualdade estrita
let suficiente = quantidadeEstoque === quantidadeMinEstoque;
console.log(`A quantidade no estoque é suficiente? ${suficiente}`);

// Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto está disponível e tem a quantidade suficiente. Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O produto está indisponível: false”
let produtoDisponivel = true;
let estoque = 10;
let quantidadeMinimaEstoque = 15;

//Verificação de disponibilidade e quantidade
let quantidadeSuficiente = estoque >= quantidadeMinimaEstoque;
let produtoDisponivelSuficiente = produtoDisponivel && quantidadeSuficiente;

console.log(`O produto está disponível e tem quantidade suficiente: ${produtoDisponivelSuficiente}`);

// Not - verificar se o produto está indisponível
let produtoIndisponivel = !produtoDisponivel;
console.log(`O produto está disponível: ${produtoIndisponivel}`)
