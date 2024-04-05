// Solicitar ao usuário que insira o peso e a altura

const peso = (prompt("Insira seu peso em kg:"));
const altura = (prompt("Insira sua altura em metros:"));

// Calcular o IMC
const imc = peso / (altura * altura);

// Exibir o resultado
console.log("Seu IMC é:", imc.toFixed(2));

if (imc <= 18.5) {
    console.log("Seu IMC é baixo");    
}

if (imc >= 18.6 && imc <= 24.9 ) {
    console.log("Seu IMC é normal"); 
}

if (imc >= 25 && imc <= 29.9 ) {
    console.log("Seu IMC é Sobrepeso"); 
}

if (imc >= 30 && imc <= 34.9 ) {
    console.log("Seu IMC é Obesidade grau I"); 
}







/*
// Solicitar ao usuário que insira o peso e a altura

const peso = (prompt("Insira seu peso em kg:"));
const altura = (prompt("Insira sua altura em metros: (Ex. 1.87)"));

// Exibir o resultado
console.log("Seu IMC é:" + ((peso / (altura * altura)).toFixed(2)));
*/

