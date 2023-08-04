function clearDisplay() {
    document.getElementById('display').value = '';
}
function delDisplay() {
    const display = document.getElementById('display');
    display.value=display.value.toString().slice(0, -1);
}
function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
}