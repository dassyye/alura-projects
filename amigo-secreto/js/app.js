let secretFriend = []

const friendInput = document.getElementById('nome-amigo')
const friendOutput = document.getElementById('lista-amigos')
const secretsFriendsOutput = document.getElementById('lista-sorteio')

function shuffleArray(inputArray) {
  return inputArray.sort(() => Math.random() - 0.5);
}

function adicionar() {
  if(friendInput.value !== '') {
    secretFriend.push(friendInput.value)
  }

  friendOutput.innerHTML = secretFriend.join(', ')
  friendInput.value = ''
}

function sortear() {
  secretsFriendsOutput.innerHTML = shuffleArray(secretFriend).join(' --> ')
}

function reiniciar() {
  secretFriend = []
  friendOutput.innerHTML = ''
  secretsFriendsOutput.innerHTML = ''
  friendInput.value = ''
}