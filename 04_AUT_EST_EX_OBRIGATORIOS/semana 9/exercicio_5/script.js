function Elaborar(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "números primos no intervalo: <br>";
    var inicio = document.getElementById("num1").value;
    var fim = document.getElementById("num2").value;
    for(i=parseInt(inicio); i<=parseInt(fim); i++){
        let contPrimo = 0;
        for(n=1; n<=i; n++){
            if(i % n === 0){
                contPrimo++;
            }
        }
        if(contPrimo === 2 || i === 1){
            document.getElementById("resultado").innerHTML += i + "<br>";
        }
    };
};