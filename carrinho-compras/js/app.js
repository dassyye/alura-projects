const selectProduct = document.querySelector('.produto-input')
const quantityInput = document.getElementById('quantidade')

const totalView = document.getElementById('valor-total')
const cartView = document.querySelector('.carrinho__produtos__produto')

let total = 0

let cart = []

function add() {
  const quantity = !quantityInput.value ? 1 : quantityInput.value
  const value = selectProduct.value.split('$')[1]
  const price = value * quantity
  total = total + price

  switch(selectProduct.value) {
    case 'Fone de ouvido - R$100':
      cart.push({
        name: 'Fone de ouvido',
        quantity: quantity,
        value: 100
      })
      ;break;
    case 'Celular - R$1400':
      cart.push({
        name: 'Celular',
        quantity: quantity,
        value: 1400
      })
      ;break;
    case 'Oculus VR - R$5000':
      cart.push({
        name: 'Oculus VR',
        quantity: quantity,
        value: 5000
      })
      ;break;
  }

  totalView.innerHTML = `R$${total}`

  cartView.innerHTML = cart.map(product => (
    `<span class="texto-azul">${product.quantity}x</span> ${product.name} <span class="texto-azul">R$${product.value}</span><br>`
  )).join('')
}

function clean() {
  total = 0
  cart = []
  quantityInput.value = ''
  totalView.innerHTML = `R$0,00`
  cartView.innerHTML = 'vazio'
}