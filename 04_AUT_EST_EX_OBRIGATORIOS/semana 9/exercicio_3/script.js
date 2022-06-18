function Ordenar(){
    let nome1 = document.getElementById("nome1").value;
    let nome2 = document.getElementById("nome2").value;
    let nome3 = document.getElementById("nome3").value;
    var nomes = [nome1, nome2, nome3];
    nomes.sort();
    for(i=0; i<nomes.length; i++){
        document.getElementById("resultado").innerHTML += nomes[i] + "<br>";   
    }
};