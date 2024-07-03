const menorValor = 1
const maiorValor = 10
const numeroSecreto = gerarNum()

function gerarNum() {
    return parseInt(Math.random() * maiorValor + 1)
}

const MENOR_VALOR = document.querySelector('#menor-valor')
MENOR_VALOR.innerHTML = menorValor
const MAIOR_VALOR = document.querySelector('#maior-valor')
MAIOR_VALOR.innerHTML = maiorValor
