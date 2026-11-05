
let currentValue = "0";
let previousValue = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

// Menampilkan angka
function updateDisplay() {
    currentDisplay.innerText = currentValue;
    previousDisplay.innerText =
        previousValue + (operator ? " " + operator : "");
}

// Memasukkan angka
function addNumber(number) {
    if (currentValue === "Error") {
        currentValue = "0";
    }

    if (number === "." && currentValue.includes(".")) return;

    if (currentValue === "0" && number !== ".") {
        currentValue = number;
    } else {
        currentValue += number;
    }

    updateDisplay();
}

// Memilih operator
function setOperator(op) {
    if (currentValue === "Error") return;

    if (operator !== null) {
        calculate();
    }

    previousValue = currentValue;
    operator = op;
    currentValue = "0";

    updateDisplay();
}

// Fungsi pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi perkalian
function kali(a, b) {
    return a * b;
}

// Fungsi pembagian
function bagi(a, b) {
    if (b === 0) {
        return "Error";
    }

    return a / b;
}

// Fungsi penjumlahan
function tambah(a, b) {
    return a + b;
}

// Menghitung hasil
function calculate() {
    if (operator === null || previousValue === "") return;

    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    let result;

    switch (operator) {
        case "+":
            result = tambah(a, b);
            break;

        case "-":
            result = kurang(a, b);
            break;

        case "*":
            result = kali(a, b);
            break;

        case "/":
            result = bagi(a, b);
            break;

        case "%":
            result = a % b;
            break;
    }

    if (result === "Error" || !Number.isFinite(result)) {
        currentValue = "Error";
    } else {
        currentValue = String(
            parseFloat(result.toPrecision(12))
        );
    }

    previousValue = "";
    operator = null;

    updateDisplay();
}

// Menghapus semua angka
function clearDisplay() {
    currentValue = "0";
    previousValue = "";
    operator = null;

    updateDisplay();
}

// Menghapus satu angka
function deleteNumber() {
    if (currentValue === "Error") {
        currentValue = "0";
    } else {
        currentValue = currentValue.slice(0, -1);

        if (currentValue === "" || currentValue === "-") {
            currentValue = "0";
        }
    }

    updateDisplay();
}
