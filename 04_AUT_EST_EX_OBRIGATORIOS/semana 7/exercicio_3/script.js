function buttonEnviar(){
    const valor = {
        texto: document.querySelector("#aceitar")
    }
    valor.telefoneInput = document.querySelector("#numero");

    const formatoTelefone = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(valor.telefoneInput.value);

    if(formatoTelefone) {
        alert("Número de telefone aceito!")
        
    } else {
        alert("O número de telefone não está em um formato aceito! \n \n Utilizar (XX)XXXXX-XXXX")
    }
}