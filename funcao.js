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


