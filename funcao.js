function soma(n1, n2)
{    
const resultado = n1 + n2;
console.log(resultado)
return resultado;
}

function SomarInput()
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

