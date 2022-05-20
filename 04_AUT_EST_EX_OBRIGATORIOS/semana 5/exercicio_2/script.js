const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

triggerBtn.addEventListener("click", function(){

    const elements = {
        numberInput: Number(document.querySelector("#number").value),
    }

    let money = {
        bills: {
            two: 0,
            five: 0,
            ten: 0,
            twenty: 0,
            fifty: 0,
            oneHundred: 0,
        },
        coins: {
            one: 0,
        }
    }

    let targetValue = elements.numberInput;

    while(targetValue > 0) {
        if(targetValue >= 100) {
            targetValue -= 100;
            money.bills.oneHundred += 1;
        } else if (targetValue >= 50) {
            targetValue -= 50;
            money.bills.fifty += 1;
        } else if (targetValue >= 20) {
            targetValue -= 20;
            money.bills.twenty += 1;
        } else if (targetValue >= 10) {
            targetValue -= 10;
            money.bills.ten += 1;
        } else if (targetValue >= 5) {
            targetValue -= 5;
            money.bills.five += 1;
        } else if (targetValue >= 2) {
            targetValue -= 2;
            money.bills.two += 1;
        } else {
            targetValue -= 1;
            money.coins.one += 1;
        }
    }

    result.innerHTML = `
    
    <span> Para efetuar o pagamento de R$${elements.numberInput} com a menor quantidade de notas, são necessárias:</span>
    <ul>
        ${money.bills.oneHundred ? `<li>${money.bills.oneHundred} nota(s) de R$100</li>` : ''}
        ${money.bills.fifty ? `<li>${money.bills.fifty} nota(s) de R$50</li>` : ''}
        ${money.bills.twenty ? `<li>${money.bills.twenty} nota(s) de R$20</li>` : ''}
        ${money.bills.ten ? `<li>${money.bills.ten} nota(s) de R$10</li>` : ''}
        ${money.bills.five ? `<li>${money.bills.five} nota(s) de R$5</li>` : ''}
        ${money.bills.two ? `<li>${money.bills.two} nota(s) de R$2</li>` : ''}
        ${money.coins.one ? `<li>${money.coins.one} moeda(s) de R$1</li>` : ''}
    </ul>
    `
})