function calculateFactorial() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    let number = inputElement.value;

    number = parseInt(number, 10);

    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Por favor, ingresa un número válido';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultElement.textContent = `El factorial de ${number} es ${factorial}`;
}