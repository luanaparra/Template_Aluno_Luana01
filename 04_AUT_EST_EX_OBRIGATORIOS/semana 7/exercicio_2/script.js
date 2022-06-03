const elements = {
    triggerButton: document.querySelector("#trigger-button"),
}

elements.triggerButton.addEventListener("click", function() {
    elements.fields = document.querySelectorAll(".input-field input[type='text']");

    const aux = elements.fields[0].value; 

    elements.fields[0].value = elements.fields[1].value;
    elements.fields[1].value = aux;
})