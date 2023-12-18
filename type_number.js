// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(`O resultado da operação é: ${operacaoMatematica}`);

// ponto flutuante

const numeroPontoFlutuante = 5.7;
const pontoFlutuanteSemZero = .4;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not A Number (não é um número)

const nome = 'Ephyren';
console.log(nome * primeiroNumero);

// para realizar uma comparação:

const cidade = 'belo horizonte';
const input = 'Belo Horizonte';

console.log(cidade === input); // false

// para padronizar este código e resultar em True:
const inputMinusculo = input.toLowerCase();
// .toLowerCase() -> converte todos os caracteres da string informada para letras minúsculas
console.log(cidade === inputMinusculo); // true

// para a contagem dos caracteres usa-se .length:
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
