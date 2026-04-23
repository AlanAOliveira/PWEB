function processaresultados() {
    var medIdade = opinioes.reduce((acc, opiniao) => acc + parseInt(opiniao.idade), 0) / opinioes.length;
    var maiorIdade = Math.max(...opinioes.map(opiniao => parseInt(opiniao.idade)));
    var menorIdade = Math.min(...opinioes.map(opiniao => parseInt(opiniao.idade)));
    var totalPessimos = opinioes.filter(opiniao => opiniao.avaliacao === "1").length;
    var totalOtimos = opinioes.filter(opiniao => opiniao.avaliacao === "4").length;
    var totalBons = opinioes.filter(opiniao => opiniao.avaliacao === "3").length;
    var percentualMelhores = (totalOtimos + totalBons) / opinioes.length * 100;
    var totalMulheres = opinioes.filter(opiniao => opiniao.sexo === "feminino").length;
    var totalHomens = opinioes.filter(opiniao => opiniao.sexo === "masculino").length;
    var totalOutros = opinioes.filter(opiniao => opiniao.sexo === "outro").length;

    document.getElementById("resultados").innerHTML = `
                <p>Média de Idade: ${medIdade.toFixed(2)}</p>
                <p>Maior Idade: ${maiorIdade}</p>
                p>Menor Idade: ${menorIdade}</p>
                <p>Total de Pessimos: ${totalPessimos}</p>  
                <p>Percentual de Melhores: ${percentualMelhores.toFixed(2)}%</p>
                <p>Total de Mulheres: ${totalMulheres}</p>
                <p>Total de Homens: ${totalHomens}</p>
                <p>Total de Outros: ${totalOutros}</p>
            `;


}

function responder(respostas) {
    for (let i = 0; i < respostas; i++) {
        document.getElementById("idade").value = Math.floor(Math.random() * 100) + 1;
        document.getElementById("sexo").value = Math.random() < 0.3 ? "masculino" : Math.random() < 0.6 ? "feminino" : "outro";
        document.querySelector(`input[name="avaliacao"][value="${Math.floor(Math.random() * 4) + 1}"]`).checked = true;
        document.getElementById("enviar").click();
    }
}

const opinioes = [];


function enviar() {
    var idade = document.getElementById("idade").value;
    var sexo = document.getElementById("sexo").value;
    var avaliacao = document.querySelector('input[name="avaliacao"]:checked').value;
    var opiniao = {
        idade: idade,
        sexo: sexo,
        avaliacao: avaliacao
    };
    opinioes.push(opiniao);
}