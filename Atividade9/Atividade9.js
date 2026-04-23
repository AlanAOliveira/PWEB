
function maior() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = Math.max(num1, num2, num3);
    alert("O maior número é: " + maior);
}

function ordenar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var numeros = [num1, num2, num3].sort((a, b) => a - b);
    alert("Números ordenados: " + numeros.join(", "));
}

function epalindromo() {
    var str = document.getElementById("String").value;
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedStr = cleanStr.split("").reverse().join("");
    if (cleanStr === reversedStr) {
        alert("A string '" + str + "' é um palíndromo.");
    } else {
        alert("A string '" + str + "' não é um palíndromo.");
    }
}