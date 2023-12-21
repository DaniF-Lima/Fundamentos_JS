// tipo de dado
// looleanos

// conversão implícita
const numero = 547;
const numeroString = '547';

console.log(numero == numeroString);
console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);

// Number()

let largura = "10";
let altura = "5";
console.log( + largura * + altura); 
// teremos a conversão de String para números realizado usando o + antes das variáveis
// String()
// os 3 === comparam não apenas o valor mas tbm o tipo

// conversão explícita

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); 
// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); 
// agora teremos uma string “true”.