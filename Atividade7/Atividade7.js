function jogar(jogada) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const jogadaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado = '';

    if (jogada === jogadaComputador) {
        resultado = 'Empate!';
        document.body.style.backgroundColor = 'yellow';
    } else if (
        (jogada === 'pedra' && jogadaComputador === 'tesoura') ||
        (jogada === 'papel' && jogadaComputador === 'pedra') ||
        (jogada === 'tesoura' && jogadaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
        document.body.style.backgroundColor = 'green';
    } else {
        resultado = 'Você perdeu!';
        document.body.style.backgroundColor = 'red';
    }

    document.getElementById('resultado').textContent = `Você escolheu ${jogada} e o computador escolheu ${jogadaComputador}. ${resultado}`;
}