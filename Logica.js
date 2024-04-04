var numero1 = prompt("Digite o primeiro núnero 1:");
var numero2 = prompt("Digite o primeiro núnero 2:");
var numero3 = prompt("Digite o primeiro núnero 3:");


if (numero1 > numero2) {
    console.log(numero1 + " é maior que " + numero2);
} else {
    console.log(numero2 + " é maior que " + numero1);
  
}

/* pergunte a 3 numeros 

if (numero1 > numero2 && numero1 > numero3) {
   console.log(numero1 + " é o maior de todos"); 
}

if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + " é o maior de todos");                      
}
if (numero3 > numero1 && numero3 > numero2) {
    console.log(numero3 + " é o maior de todos");                 
}

if (numero1 < numero2 && numero1 < numero3) {
    console.log(numero1 + " é o menor de todos"); 
 }
if (numero2 < numero1 && numero2 < numero3) {
     console.log(numero2 + " é o menor de todos");                      
 }
 else if (numero3 < numero1 && numero3 < numero2) {
    console.log(numero3 + " é o menor de todos");                 
}
*/


if (numero1 > numero2) {

    if (numero1 > numero3) {
    console.log(numero1 + " é o maior de todos");         
    } 
}
else
{  
    if (numero2 > numero3) {
     console.log(numero2 + " é o maior de todos");         
    } 
    else{
     console.log(numero3 + " é o maior de todos"); 
    }
}