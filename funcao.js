function soma(n1, n2)
{    
const resultado = n1 + n2;
console.log(resultado)
return resultado;
}

/*function somarInput()
{    
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);

   var resultado = numero1 + numero2;
  
   console.log(resultado)
   document.getElementById("resultado").innerHTML = "A soma é: " + resultado;

   if (resultado % 2 === 0) {
    document.getElementById("parimpar").innerHTML = resultado + " é um número par.";
} else {
    document.getElementById("parimpar").innerHTML = resultado + " é um número ímpar.";
}
    
} 
*/


function somarInput()
{
    var n1 = num1.value;
    var n2 = num2.value;
    console.log(n1, n2);
    var resultado = parseInt(n1) + parseInt(n2);
    console.log(resultado);   
}

function par()
{
    var n1 = parseInt(num1.value);

    var resto = n1 % 2;

    if (resto == 0)
    {
        res.value = "Par";
    } 
    else
    {
        res.value = "Impar";
    }
}

/*
    Alcool ou gasolina
    70% da gasolina
*/
function combustivel()
{
    var gas = parseFloat(num1.value);
    var alc = parseFloat(num2.value);

    var resultado = alc / gas;

    if (resultado >= 0.7)
    {
        res.value = "Gasolina";
    }
    else 
    {
        res.value = "Alcool";
    }
}

function diasDevida() {
    // Obtém a data de nascimento do input
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    
    // Obtém a data atual
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataNascimento;

    // Converte a diferença de milissegundos para dias
    const diasDeVida = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    // Exibe o resultado na página
    document.getElementById('resultado').textContent = `Você tem aproximadamente ${diasDeVida} dias de vida.`;
  }

function contagem()
{
var inicio = 1;
var fim = parseInt(num1.value)

    while (inicio <= fim) {
        res.value = res.value + " " + inicio + " ";
        inicio = inicio + 1;        
    }

}

function regressiva()
{
    var inicio = parseInt(num1.value);
    var fim = 1;

    while (inicio >= fim) {
        res.value = res.value + " " + inicio + " ";
        inicio = inicio - 1;        
    }
}   

function fatorial() 
{
    var inicio = 1;
    var fim =  parseInt(num1.value);
    var total = 1;

    while (inicio <= fim) {
        total = total * inicio;
        inicio = inicio + 1;                         
        
    }

    res.value = total;  
}


function fibonacci() 
{
    var inicio = 1;
    var fim =  parseInt(num1.value);
    var nfiboPenultimo = 0;
    var nfiboUltimo = 1;
    var nfibo = 0;
    
    if (inicio = 1)
    { 
        nfiboPenultimo = 0;
        nfibo = 1;
        res.value += nfibo + " ";                 
    }
    
    while (inicio+1 <= fim) {

        nfibo = nfiboUltimo + nfiboPenultimo;
            
        res.value += " " + nfibo + " ";            
        nfiboPenultimo = nfiboUltimo; 
        nfiboUltimo = nfibo
        inicio += 1             
    }
}










 
               
      
   