let powerOn = false;

function togglePower() {
    powerOn = !powerOn;
    const calc = document.getElementById('calculator');
    const powerBtn = document.getElementById('power-btn');

    if (powerOn) {
        calc.classList.remove('off');
        powerBtn.textContent = "Desligar";
        document.getElementById('display').value = '';
    } else {
        calc.classList.add('off');
        powerBtn.textContent = "Ligar";
        document.getElementById('display').value = '';
    }
}

function appendValue(value) {
    if (!powerOn) return;
    document.getElementById('display').value += value;
}

function clearDisplay() {
    if (!powerOn) return;
    document.getElementById('display').value = '';
}

function deleteLast() {
    if (!powerOn) return;
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculateResult() {
    if (!powerOn) return;
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = "Erro";
    }
}
