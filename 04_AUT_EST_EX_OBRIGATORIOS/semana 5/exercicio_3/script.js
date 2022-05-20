const triggerBtn = document.querySelector("#calculateBtn");
const result = document.querySelector(".result");

function bubbleSort(items) {

    let length = items.length; 

    for (let i = 0; i < length; i++) { 
          for (let j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           let tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp;
            }
        }        
    }

    return items;
}

function binarySearch(arr, focus) {

    let element = {
        pos: 0,
        isFound: false,
    }

    let lastPosition = arr.length - 1;

    while (element.pos <= lastPosition && !element.isFound) {

        listMiddle = Math.ceil((element.pos + lastPosition) / 2);
        
        if (arr[listMiddle] == focus) {

            element.isFound = true;

        }
        else {

            if (focus < arr[listMiddle]) {
                lastPosition = listMiddle - 1;
            }
            else {
                element.pos = listMiddle + 1;
            }

        }
    }

    return element;
}

triggerBtn.addEventListener("click", function(){

    const elements = {
        list : document.querySelector("#list").value,
        focus: Number(document.querySelector("#focus").value),
    }

    let list = elements.list.split(",");

    list.forEach((element, i) => {
        list[i] = Number(element);
    })

    let orderedList = bubbleSort(list);

    let focusElement = binarySearch(orderedList, elements.focus);

    result.innerHTML = `
    
        <span>A lista em ordem crescente é: ${orderedList}</span>
        <span>${focusElement.isFound ? `O valor foco encontra-se na posição ${focusElement.pos+1} da lista.` : `Valor foco não encontrado na lista!`}</span>
    `

    

})