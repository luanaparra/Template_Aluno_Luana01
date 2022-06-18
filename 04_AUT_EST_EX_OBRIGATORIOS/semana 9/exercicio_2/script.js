function soma(){
    let n = document.getElementById("numero").value;
    if(Number(n)>0){
        let result = document.getElementById("resultado");
        n=n.split("");
        let soma = 0;
        for (i=0; i<n.length; i++){
            soma += parseInt(n[i]);
    };
    result.innerHTML = "A soma é " + soma;
}
    else {
        result.innerHTML = "Somente numeros positivos"
    };
};