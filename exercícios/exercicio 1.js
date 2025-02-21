//Para usar o prompt no nodejs é preciso instalar essa lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

const n1 = prompt("Digite o primeiro número: ");
console.log(n1);

// // Cálculo de desconto:
// let preco = parseFloat(prompt("Digite o preço: "));
// // Solicita ao usuário que digite o preço de um produto e o converte para um número de ponto flutuante.

// let desconto = parseFloat(prompt("Digite o desconto: "));
// // Solicita ao usuário que digite o valor do desconto em porcentagem e o converte para um número de ponto flutuante.

// function calcularDesconto(preco, desconto){
// // Define uma função chamada `calcularDesconto` que recebe dois parâmetros: `preco` e `desconto`.

// const calcular = preco - (preco * desconto / 100);
//   // Calcula o preço com desconto. O desconto é subtraído do preço com base na porcentagem fornecida.

// console.log(preco - desconto);
//   // Exibe no console o preço original subtraído do valor do desconto.
// }
// // Fecha a função `calcularDesconto`.
// calcularDesconto(preco, desconto);
// // Chama a função `calcularDesconto`, passando os valores de `preco` e `desconto` para que a função seja executada.

// // Conversor de Temperatura:
// let celsius = parseFloat(prompt("Digite qual a temperatura: "));
// // Solicita ao usuário que insira uma temperatura em Celsius e a converte para um número de ponto flutuante.
// function celsiusParaFahrenheit(celsius){
// // Define uma função chamada `celsiusParaFahrenheit`, que recebe um parâmetro `celsius`.
// console.log((celsius * 9 / 5) + 32);
//   // Converte a temperatura de Celsius para Fahrenheit e exibe o resultado no console. A fórmula utilizada é `(celsius * 9 / 5) + 32`.
// };
// // Fecha a função `celsiusParaFahrenheit`.
// celsiusParaFahrenheit(celsius);
// // Chama a função `celsiusParaFahrenheit`, passando o valor de `celsius` fornecido pelo usuário para que a conversão seja realizada.

// // Cálculo de Juros Simples:
// let valor = parseFloat(prompt("Digite o valor principal: "));
// // Solicita ao usuário o valor principal do empréstimo ou investimento e o converte para um número de ponto flutuante.
// let taxa = parseFloat(prompt("Digite a taxa: "));
// // Solicita ao usuário a taxa de juros (em porcentagem) e a converte para um número de ponto flutuante.
// let tempo = parseFloat(prompt("Digite o tempo: "));
// // Solicita ao usuário o tempo (geralmente em meses ou anos) e o converte para um número de ponto flutuante.
// function calcularJuros(valor, taxa, tempo) {
// // Define uma função chamada `calcularJuros`, que recebe os parâmetros `valor`, `taxa` e `tempo`.
// const conta = valor * taxa * tempo;
// // Calcula os juros simples multiplicando o valor, a taxa e o tempo.
// console.log ("Seu juros é: ", conta)
// // Exibe no console o valor dos juros calculados.
// };
// // Fecha a função `calcularJuros`.
// calcularJuros(valor, taxa, tempo);
// // Chama a função `calcularJuros`, passando os valores de `valor`, `taxa` e `tempo` para que o cálculo seja feito.

// // Parte 2: Operadores Relacionais
// // 2.1. Maior Número

// let numero1 = parseFloat(prompt("Digite o valor do número 1: "));
// // Solicita ao usuário o primeiro número e o converte para um número de ponto flutuante.
// let numero2 = parseFloat(prompt("Digite o valor do número 2: "));
// // Solicita ao usuário o segundo número e o converte para um número de ponto flutuante.
// function maiorNumero(numero1, numero2) {
// // Define uma função chamada `maiorNumero`, que recebe dois parâmetros: `numero1` e `numero2`.
// if (numero1 > numero2) {
// // Verifica se o primeiro número é maior que o segundo. Se for, executa o bloco de código abaixo.
// console.log("O maior número é: ", numero1);
// // Exibe no console que o primeiro número é o maior.

// }else if(numero1 < numero2) {
// // Verifica se o segundo número é maior que o primeiro. Se for, executa o bloco de código abaixo.
// console.log ("O menor número é: ", numero2);
// // Exibe no console que o segundo número é o maior.
// }else{
// // Caso os dois números sejam iguais, executa o bloco de código abaixo.
// console.log("Os números são iguais.")
// // Exibe no console que os dois números são iguais.
// }

// }
// // Chama a função `maiorNumero`, passando os valores de `numero1` e `numero2` para que a comparação seja feita.

// // Classificação de Idade:
// let idade = parseFloat(prompt("Digite a sua idade: "));
// // Solicita ao usuário que insira a sua idade e a converte para um número de ponto flutuante.
// function classificarIdade(idade){
// // Define uma função chamada `classificarIdade`, que recebe o parâmetro `idade`.
// if( idade < 12) {
// // Verifica se a idade é menor que 12. Se for, executa o bloco de código abaixo.
// console.log("Você é criança" );
// // Exibe no console que a pessoa é uma criança.
// }else if( idade >= 12 && idade < 18 ){
// // Verifica se a idade está entre 12 e 18. Se for, executa o bloco de código abaixo.
// console.log ("Você é um adolescente");
// // Exibe no console que a pessoa é um adolescente.
// }else{
// // Caso a idade seja 18 ou mais, executa o bloco de código abaixo.
// console.log("Você é um adulto")
// // Exibe no console que a pessoa é um adulto.
// }
// // Fecha a função `classificarIdade`.
// }
// // Chama a função `classificarIdade`, passando o valor de `idade` para que a classificação seja feita.

// // Validação de Nota:
// let nota = parseFloat(prompt("Digite sua nota: "));
// // Solicita ao usuário que insira sua nota e a converte para um número de ponto flutuante.
// function validarNota(nota){
// // Define uma função chamada `validarNota`, que recebe o parâmetro `nota`.
// if (nota >=0 && nota <= 10){
// // Verifica se a nota está entre 0 e 10. Se estiver, retorna `true`.
// return true;
// // Retorna `true` se a nota for válida.
// }else{
// // Caso contrário, retorna `false`.
// return false;
// // Retorna `false` se a nota for inválida.
// }
//   }
// // Chama a função `validarNota`, passando o valor de `nota` para que a validação seja feita.

// console.log(validarNota(nota));
// // Exibe no console o resultado da validação.

// // Parte 3: Operadores Lógicos
// // 3.1. Aprovado ou Reprovado

// let media = parseFloat(prompt("Digite sua média: "));
// // Solicita ao usuário a média do aluno e a converte para um número de ponto flutuante.
// let faltas = parseFloat(prompt("Digite sua porcentagem de faltas: "));
// // Solicita ao usuário a porcentagem de faltas e a converte para um número de ponto flutuante.
// function  verificarAprovacao(media, faltas){
// // Define uma função chamada `verificarAprovacao`, que recebe os parâmetros `media` e `faltas`.
// if(media > 7 && faltas < 25){
// // Verifica se a média é maior que 7 e a porcentagem de faltas é menor que 25%. Se ambas as condições forem verdadeiras, o aluno é aprovado.
// console.log("Parabéns, você foi aprovado(a)!")
// // Exibe no console que o aluno foi aprovado.
// }else{
// // Caso contrário, o aluno foi reprovado.

//     // console.log("Poxa! Você foi reprovado(a)...")
// // Exibe no console que o aluno foi reprovado.

//   // }
// // Fecha a função `verificarAprovacao`.

// }
// // Chama a função `verificarAprovacao`, passando os valores de `media` e `faltas` para que a verificação seja feita.

// // Intervalo de Valores:
// // let valor = parseFloat(prompt("Digite o valor: "))
// // Solicita ao usuário que insira um valor e o converte para um número de ponto flutuante.

// // let min = parseFloat(prompt("Digite o valor mínimo: "))
// // Solicita ao usuário o valor mínimo do intervalo e o converte para um número de ponto flutuante.

// // let max = parseFloat(prompt("Digite o valor máximo: "))
// // Solicita ao usuário o valor máximo do intervalo e o converte para um número de ponto flutuante.

// // function  estaNoIntervalo(valor, min, max){
// // Define uma função chamada `estaNoIntervalo`, que recebe os parâmetros `valor`, `min` e `max`.

//   // if (valor >= min && valor <= max){
// // Verifica se o valor está dentro do intervalo entre `min` e `max`. Se estiver, retorna `true`.

//     // return true;
// // Retorna `true` se o valor estiver dentro do intervalo.

//   // }else{
// // Caso contrário, retorna `false`.

//     // return false;
// // Retorna `false` se o valor estiver fora do intervalo.

//   // }

// // }
// // Chama a função `estaNoIntervalo`, passando os valores de `valor`, `min` e `max` para que a verificação seja feita.

// console.log(estaNoIntervalo(valor, min, max));
// // Exibe no console se o valor está dentro ou fora do intervalo.

// // Verificação de Login:
// // let username = prompt("Digite o seu username: ");
// // Solicita ao usuário que insira seu nome de usuário.

//   // let senha = parseFloat(prompt("Digite a sua senha: "));
// // Solicita ao usuário que insira sua senha e a converte para um número de ponto flutuante.

//   // function verificarLogin(username, senha){
// // Define uma função chamada `verificarLogin`, que recebe os parâmetros `username` e `senha`.

//     // if (username === "admin" && senha === 1234){
// // Verifica se o nome de usuário é "admin" e a senha é 1234. Se for, o login é bem-sucedido.

//       // console.log("Login bem-sucedido")
// // Exibe no console a mensagem de login bem-sucedido.

//     // }else{
// // Caso contrário, o login falha.

//       // console.log("Usuário ou senha incorretos");
// // Exibe no console a mensagem de erro.

//     // }
// // Fecha a função `verificarLogin`.

//   // }
// // Chama a função `verificarLogin`, passando os valores de `username` e `senha` para que a verificação seja feita.
