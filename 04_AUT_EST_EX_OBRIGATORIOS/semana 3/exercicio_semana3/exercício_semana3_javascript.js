function calcule(){
    var velocidade = document.getElementById("velocidadeInicial").value;
    var altura = (velocidade**2)/20;
    var tempo = velocidade/10;
    document.getElementById ("alturaMaxima").innerHTML = altura;
    document.getElementById ("tempoTotal").innerHTML = tempo;
}

//outro método
/*const { get } = require("express/lib/response")
function calcTempo(velocidade){
    var tempo = velocidade/10
    return tempo
}

function mostrar(){
    var velocidade =  document.getElementById("velocidade").value;
    calcTempo(velocidade);
    var resultado = calcTempo(velocidade)
    document.getElementById("result").textContent= "Resultado:" + resultado
}*/