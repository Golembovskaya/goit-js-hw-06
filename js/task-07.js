const inputFsc = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputFsc.addEventListener("input", fn1);
function fn1(event) {
    spanText.style.fontSize = `${event.target.value}px`;
}