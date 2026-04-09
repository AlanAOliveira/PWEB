function calculaMedia(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById("resultado").innerHTML = `A média do aluno ${document.getElementById("nomeAluno").value} é: ${media.toFixed(2)}`;
}


function calculosDoidos(){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

    
    document.getElementById("resultadoCalculos").innerHTML = `Soma: ${soma.toFixed(2)}<br>
    Subtração: ${subtracao.toFixed(2)}<br>
    Multiplicação: ${multiplicacao.toFixed(2)}<br>
    Divisão: ${divisao.toFixed(2)}`;

}


