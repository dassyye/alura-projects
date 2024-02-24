let pista = 100
let cadeiraSuperior = 200
let cadeiraInferior = 400

const type = document.getElementById('tipo-ingresso')
const quantity = document.getElementById('qtd')

const pistaView = document.getElementById('qtd-pista')
const cadeiraSuperiorView = document.getElementById('qtd-superior')
const cadeiraInferiorView = document.getElementById('qtd-inferior')

function comprar() {
  switch(type.value) {
    case 'inferior':
      cadeiraInferior -= quantity.value
      ; break;
    case 'superior':
      cadeiraSuperior -= quantity.value
      ; break;
    case 'pista':
      pista -= quantity.value
      ; break;
  }

  pistaView.innerHTML = pista
  cadeiraSuperiorView.innerHTML = cadeiraSuperior
  cadeiraInferiorView.innerHTML = cadeiraInferior
}