const validInput = document.querySelector('#validation-input');

const checkNumbers = () => {
    if (validInput.value.length === Number(validInput.dataset.length)) {
        validInput.classList.remove(`invalid`);
        validInput.classList.add(`valid`);
        return;
    } else {
        validInput.classList.remove(`valid`);
        validInput.classList.add(`invalid`);
    };
}
validInput.addEventListener('blur', checkNumbers);