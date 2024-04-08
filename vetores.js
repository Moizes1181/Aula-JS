
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
    var alunos = ["Ana", "Pedro", "Maria"];

    res.innerHTML = alunos[0] + "<br>";
    res.innerHTML = res.innerHTML + alunos[1] + "<br>";
    res.innerHTML = res.innerHTML + alunos[2] + "<br>";

    res.innerHTML = "";

    var ult = alunos.length - 1;
    
    for (var ini = 0; ini <= ult; ini += 1)
    {
        res.innerHTML += alunos[ini] + "<br>";
    }
}