
var listaDeAlunos = [];

var Aluno = {
    nomeAluno: "",
    periodoAluno: 0
};

function adicionarAlunoLista(){
    var nome = document.getElementById("nomeAluno").value;
    var periodo = document.getElementById("periodoAluno").value;
    var a1 = Object.create(Aluno);
    a1.nomeAluno = nome;
    a1.periodoAluno = periodo;
    listaDeAlunos.push(a1);
}
function mostraAlunos(){
    for(var i=0; i < listaDeAlunos.length; i++){
        listaDeAlunos += listaDeAlunos[i].nomeAluno + " - " +
                         listaDeAlunos[i].periodoAluno + "</br>";                   
    }
    documento.getElementById("saidaAlunos").innerHTML = listaalunosHTML;
}