const quantity = document.getElementById('quantidade')
const firstValue = document.getElementById('de')
const secondValue = document.getElementById('ate')

const result = document.getElementById('result')

const raffle = document.getElementById('btn-sortear')
const reset = document.getElementById('btn-reiniciar')

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min); //retorna o menor número inteiro maior ou igual a "x".
  const maxFloored = Math.floor(max); //retorna o menor número inteiro dentre o número "x".
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function startDraw(quantity, firstValue, secondValue) {
  const resultValues = []

  for(let n = 0; n < Number(quantity.value); n++) {
    resultValues.push(getRandomInt(Number(firstValue.value), Number(secondValue.value)))
  }

  result.innerHTML = `${resultValues.map(e => ` ${e}`)}`
}

raffle.addEventListener('click', () => {
  startDraw(quantity, firstValue, secondValue)
})

reset.addEventListener('click', () => {
  location.reload()
})

