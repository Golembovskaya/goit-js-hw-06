const nameInput = document.querySelector('#name-input');
const nameSpan = document.querySelector('#name-output');

nameInput.addEventListener('input', newInput);
function newInput(event) {
    nameSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
      nameSpan.textContent = 'Anonymous'  
    }
};









