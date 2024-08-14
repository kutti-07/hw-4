// PHONE BLOCK 

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_span');

const regExp = /\+996 [2579]\d{2}-\d{2}-\d{2}-\d{2}/;

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.textContent = 'Valid phone number!';
        phoneSpan.style.color = 'green';
    } else {
        phoneSpan.textContent = 'Invalid phone number!';
        phoneSpan.style.color = 'red';
    }
};

const tapContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

const hidetTapContentBlocks = () => {
    tapContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tapContentBlocks[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

hidetTapContentBlocks();
showTabContent();

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hidetTapContentBlocks();
                showTabContent(index);
            }
        });
    }
};

let currentTabIndex = 0;

const changeTabContent = () => {
    currentTabIndex = (currentTabIndex + 1) % tapContentBlocks.length;
    hidetTapContentBlocks();
    showTabContent(currentTabIndex);
};

setInterval(changeTabContent, 4000);


// //converter
const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")

// somInput.addEventListener("input", () => {
//   
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         input.value = (somInput.value / data.usd).toFixed(2)
//         vv
//     }
//  const request = new XMLHttpRequest()
//     request.open("GET","../data/converter.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()
 

const converter = (element, targetElement) =>{
    element.oninput = () => {
        const request = new XMLHttpRequest()
       request.open("GET","../data/converter.json")
       request.setRequestHeader("Content-type","application/json")
       request.send()
       request.onload = () => {
        const data = JSON.parse(request.response)
        if (element.id === 'som') {
            targetElement.value = (element.value / data.usd).toFixed(2)
        }
        if (element.id === 'usd') {
            targetElement.value = (element.value * data.usd).toFixed(2)
       }
    }
    }
}

converter(somInput, usdInput)
converter(usdInput, somInput )