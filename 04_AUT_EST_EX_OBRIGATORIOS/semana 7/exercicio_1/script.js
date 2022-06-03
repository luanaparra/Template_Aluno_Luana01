const buttonMenos = document.getElementById("remove");
const buttonMais = document.getElementById("add");

buttonMenos.addEventListener("click", function(){
    let v = document.getElementById("input-number").value
    v = parseInt(v) - 1
    document.getElementById("input-number").value = v
} );

buttonMais.addEventListener("click", function(){
    let v = document.getElementById("input-number").value
    v = parseInt(v) + 1
    document.getElementById("input-number").value = v

} );