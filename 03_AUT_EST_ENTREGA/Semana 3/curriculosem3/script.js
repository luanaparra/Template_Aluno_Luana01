const elements = {
    academic: document.querySelectorAll(".academic")
}

elements.academic.forEach(element => {
    element.addEventListener("click", function(e) {
        if(!element.classList.contains("active")) {
            element.children[1].style.display = "initial";
            element.classList.add("active");
            element.children[0].children[1].src="./plus-solid.svg"
        } else {
            element.children[1].style.display = "none";
            element.classList.remove("active");
            element.children[0].children[1].src="./plus-solid.svg"
        }
    })
})