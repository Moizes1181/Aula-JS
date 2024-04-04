// Solicitar ao usuário que insira o peso e a altura
let peso = parseFloat(prompt("Insira seu peso em kg:"));
let altura = parseFloat(prompt("Insira sua altura em centímetros sem ponto ou vírgula:"));

// Calcular o IMC
altura = altura / 100; // Converter altura para metros
let imc = peso / (altura * altura);

// Exibir o resultado
console.log("Seu IMC é:", imc.toFixed(2));