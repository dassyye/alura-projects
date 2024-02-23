function alterarStatus(id) {
  let gameClickado = document.getElementById(`game-${id}`)
  let img = gameClickado.querySelector('.dashboard__item__img')
  let btn = gameClickado.querySelector('.dashboard__item__button')

  if(btn.classList.contains('dashboard__item__button--return') && img.classList.contains('dashboard__item__img--rented')) {
    btn.classList.remove('dashboard__item__button--return')
    img.classList.remove('dashboard__item__img--rented')
    btn.innerHTML = 'Alugar'
  } else {
    btn.classList.add('dashboard__item__button--return')
    img.classList.add('dashboard__item__img--rented')
    btn.innerHTML = 'Devolver'
  }
}