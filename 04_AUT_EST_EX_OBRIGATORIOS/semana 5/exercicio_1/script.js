const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

triggerBtn.addEventListener("click", function(){

    const elements = {
        numberInputs: {
            first: Number(document.querySelector("#number-1").value),
            second: Number(document.querySelector("#number-2").value),
        },
        selectedRadioBtn: document.querySelector("input[name=radio]:checked"),
    }

    let calculatedResult;
    let { first : firstNumber, second : secondNumber  } = elements.numberInputs;

    // acrescentando as operações
    switch(elements.selectedRadioBtn.id) {
        case 'radio-1':
            calculatedResult = firstNumber + secondNumber;
        break;

        case 'radio-2':
            calculatedResult = firstNumber - secondNumber;
        break;

        case 'radio-3':
            calculatedResult = firstNumber * secondNumber;
        break;

        case 'radio-4':
            calculatedResult = firstNumber / secondNumber;
        break;

        case 'radio-5':
            calculatedResult = Math.floor(firstNumber / secondNumber);
        break;

        case 'radio-6':
            calculatedResult = firstNumber % secondNumber;
        break;
    }

    result.innerHTML = `O resultado é ${calculatedResult}.`

})