
var aluno = "ana";
var aluno2 = "Pedro";

// vetores ou listas -> arrays
// criando
var alunos = ["Ana", "Pedro", "Maria"];

console.log(alunos)

// lendo
console.log(alunos[1])

//alterando
alunos[0] = "Anna"

// adicionando no fim
alunos.push("Lulu")

// adicionando no começo
alunos.unshift("Lulu")

function listar()
{
    var alunos = ["Ana", "Pedro", "Maria", "Carlos", "Paulo", "Thiago", "Lulu"  ];

    res.innerHTML = alunos[0] + "<br>";
    res.innerHTML = alunos[1] + "<br>";
    res.innerHTML = alunos[2] + "<br>";
    
    res.innerHTML = "";

    var ult = alunos.length - 1;
    
    for (var ini = 0; ini <= ult; ini += 1)
    {
        res.innerHTML += alunos[ini] + "<br>";
    }
}

function ordenar()
{
    var alunos = ["Ana", "Pedro", "Maria", "Carlos", "Paulo", "Thiago", "Lulu"  ];
    alunos.sort();
    res.innerHTML = "";
    
    var ult = alunos.length - 1;
    
    for (var ini = 0; ini <= ult; ini += 1)
    {
        res.innerHTML += alunos[ini] + "<br>";
    }
}

function consoantes()
{
    var letras = ["A", "P", "M", "C", "E", "I", "L", "O", "X", "U", "Y"];
    var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    res.innerHTML = "";
    var ult = letras.length - 1;
    var contadorConsoantes = 1;
    
    for (var ini = 0; ini <= ult; ini += 1)
    {   
        if (vogais.includes(letras[ini]))

        ini = ini;

        else
        {
        res.innerHTML += letras[ini] + "<br>";  
        contadorConsoantes += 1 
        }      
        
    }

    res.innerHTML += "Total de consoantes é: "+contadorConsoantes + "<br>";  
}

function parImpar() {

    var listaNumeros = [];
    var listaPares = [];
    var listaImpares = [];
    res.innerHTML = "";    

    for (var ini = 0; ini < 10; ini +=1 ) {
        
        var numeroDigitado = parseInt(prompt("Digite o " + (ini + 1) + "º número inteiro:"));
        listaNumeros.push(numeroDigitado);

        var resto = numeroDigitado % 2;

        if (resto == 0)
    {
        listaPares.push(numeroDigitado);

    } 
    else
    {
        listaImpares.push(numeroDigitado);
      //  res.innerHTML += listaImpares[ini] + "<br>";  
    }
}    




let listaNumerosNumerico = listaNumeros.map(function(str) {
    return parseInt(str, 10);
  });
  
  // Ordenando o array numérico
  listaNumerosNumerico.sort(function(a, b) {
    return a - b;
  });



  let listaParesNumerico = listaPares.map(function(str) {
    return parseInt(str, 10);
  });
  
  // Ordenando o array numérico
  listaParesNumerico.sort(function(a, b) {
    return a - b;
  });

  let listaImparesNumerico = listaImpares.map(function(str) {
    return parseInt(str, 10);
  });
  
  // Ordenando o array numérico
  listaImparesNumerico.sort(function(a, b) {
    return a - b;
  });






for (var ini = 0, ult = listaNumerosNumerico.length - 1;  ini <= ult; ini += 1)
    {
        resnd.innerHTML += listaNumerosNumerico[ini] + "<br>"; 
    }

 for (var ini = 0, ult = listaParesNumerico.length - 1;  ini <= ult; ini += 1)
    {
        resndPares.innerHTML += listaParesNumerico[ini] + "<br>"; 
    }

for (var ini = 0, ult = listaImparesNumerico.length - 1;  ini <= ult; ini += 1)
    {
        resndImpares.innerHTML += listaImparesNumerico[ini] + "<br>";   
    }        

 }