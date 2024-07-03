function verificaValor(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido! O valor deve estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }


    if (numero === numeroSecreto) {
        elementoChute.innerHTML += `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${chute}</h3>

            <button id="jogarNovamente" onclick="window.location.reload()">Jogar Novamente</button>
        `
    } else {
        elementoChute.innerHTML += `<h2>Quase lá!</h2>`

        if (numero > numeroSecreto)  {
            elementoChute.innerHTML += `<h3>Tente um valor menor.</h3>`
        } else {
            elementoChute.innerHTML += `<h3>Tente um valor maior.</h3>`
        }
    }

}